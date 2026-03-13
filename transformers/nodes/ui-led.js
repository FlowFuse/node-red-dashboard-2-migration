module.exports = function (node, baseId, themeId) {
    node.type = 'ui-led'

    // update properties
    node.states = node.colorForValue

    // new properties
    node.showBorder = true

    // remove properties
    delete node.colorForValue
    return node
}
