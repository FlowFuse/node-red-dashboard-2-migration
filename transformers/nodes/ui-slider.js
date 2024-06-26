module.exports = function (node, baseId, themeId) {
    node.type = 'ui-slider'

    // update properties
    // NONE

    // new properties
    node.thumbLabel = 'true'
    node.showTicks = 'always'
    node.color = ''
    node.colorTrack = ''
    node.colorThumb = ''

    // remove properties
    // NONE

    return node
}
