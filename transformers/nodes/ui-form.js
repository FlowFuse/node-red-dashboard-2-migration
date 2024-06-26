module.exports = function (node, baseId, themeId) {
    node.type = 'ui-form'

    // update properties
    // we mapped option.value to option.key
    node.options = node.options.map(option => {
        return {
            label: option.label,
            key: option.value,
            type: option.type,
            required: option.required,
            rows: option.rows
        }
    })

    // new properties
    node.resetOnSubmit = true

    // remove properties
    // NONE

    return node
}
