module.exports = function (node, baseId, themeId) {
    node.type = 'ui-gauge'

    // update properties
    node.units = node.label
    node.segments = [{}, {}, {}]
    node.segments[0].from = node.min
    node.segments[0].colors = node.colors[0]
    if (node.seg1 !== '') {
        node.segments[1].from = node.seg1
    } else {
        node.segments[1].from = (node.max - node.min) * 0.4 + node.min
    }
    node.segments[1].color = node.colors[1]

    if (node.seg2 !== '') {
        node.segments[2].from = node.seg2
    } else {
        node.segments[2].from = node.max - (node.max - node.min) * 0.3
    }
    node.segments[2].color = node.colors[2]

    switch (node.gtype) {
    case 'gage': // gauge
        node.gtype = 'gauge-half'
        break
    case 'wave': // level
        node.gtype = 'gauge-tank'
        break
    default:
        node.gtype = 'gauge-34'
        break
    }

    const str = node.format
    const indexpre = str.indexOf('{{value}}')
    if (indexpre !== -1) {
        const resultpre = str.substring(0, indexpre)
        node.prefix = resultpre
        const indexsuf = indexpre + 9
        const resultsuf = str.substring(indexsuf)
        node.suffix = resultsuf
    } else {
        node.prefix = ''
        node.suffix = ''
    };

    // new properties
    node.icon = ''
    node.sizeThickness = 16
    node.sizeGap = 4
    node.sizeKeyThickness = 8
    node.styleRounded = true
    node.styleGlow = false

    // remove properties
    delete node.seg1
    delete node.seg2
    delete node.colors
    delete node.format

    return node
}
