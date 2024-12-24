module.exports = function (node, baseId, themeId) {
    node.type = 'ui-audio'

    // update properties
    // NONE
    node.autoplay = node.always

    // new properties
    node.loop = 'off'
    node.muted = 'off'
    node.src = ''
    node.order = 0
    node.width = 0
    node.height = 0

    // remove properties
    // NONE
    delete node.always

    return node
}
