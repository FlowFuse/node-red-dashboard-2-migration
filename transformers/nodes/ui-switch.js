module.exports = function (node, baseId, themeId) {
    node.type = 'ui-switch'

    // update properties
    // NONE

    // new properties

    // remove properties
    delete node.tooltip // no longer have tooltip
    delete node.decouple // no longer have decouple
    delete node.animate // no longer have animate

    return node
}
