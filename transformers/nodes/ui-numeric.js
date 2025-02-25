module.exports = function (node, baseId, themeId) {
    node.type = 'ui-number-input'

    // update properties
    // NONE

    // new properties
    node.tooltip = ''
    node.sendOnBlur = true
    node.sendOnEnter = true
    node.clearable = false
    node.icon = ''
    node.iconPosition = 'left'
    node.iconInnerPosition = 'inside'
    node.spinner = 'default'

    // remove properties
    delete node.format
    delete node.wrap

    return node
}
