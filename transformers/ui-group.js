module.exports = function (node, baseId, themeId) {
    node.type = 'ui-group'

    // update/move properties
    node.page = node.tab
    node.showTitle = node.disp

    // new properties
    node.height = '1'
    node.visible = true
    node.disabled = false

    // remove properties
    delete node.tab
    delete node.disp
    delete node.collapse

    return node
}
