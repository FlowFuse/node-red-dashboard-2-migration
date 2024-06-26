function toKebabCase (str) {
    return str
        .replace(/\s+/g, '-') // replace all white space with dash
        .toLowerCase() // convert all letters to lowercase
}

module.exports = function (node, baseId, themeId) {
    node.type = 'ui-page'

    // update properties

    // new properties
    node.visible = !node.hidden
    node.ui = baseId
    node.path = '/' + toKebabCase(node.name)
    node.theme = themeId
    node.layout = 'flex' // closest we have to a Dashboard 1.0 layout
    node.order = 0
    node.className = ''

    // remove properties
    delete node.hidden

    return node
}
