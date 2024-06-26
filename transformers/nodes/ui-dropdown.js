module.exports = function (node, baseId, themeId) {
    node.type = 'ui-dropdown'

    // update properties
    // NONE

    // new properties
    node.chips = false
    node.clearable = false

    // remove properties
    delete node.place // no longer have placeholder

    return node
}
