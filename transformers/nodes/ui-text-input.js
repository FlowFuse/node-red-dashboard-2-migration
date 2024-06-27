module.exports = function (node, baseId, themeId) {
    node.type = 'ui-text-input'

    // update properties
    // NONE

    // new properties
    node.sendOnDelay = true
    node.sendOnEnter = false

    // remove properties
    delete node.tooltip // no longer have tooltip

    return node
}
