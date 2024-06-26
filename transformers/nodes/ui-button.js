module.exports = function (node, baseId, themeId) {
    node.type = 'ui-button'

    // update properties
    node.emulateClick = node.passthru

    // new properties
    node.iconPosition = 'left'

    // remove properties
    delete node.passthru

    return node
}
