const generateUiBase = require('./scripts/ui-base')
const generateUiTheme = require('./scripts/ui-theme')

const toUiPage = require('./scripts/ui-page')
const toUiGroup = require('./scripts/ui-group')

const MigrateDashboard = {
    migrate: function (flow) {
        const migratedFlow = []

        // generate nodes we know D1.0 doesn't provide
        const base = generateUiBase()
        migratedFlow.push(base)

        const theme = generateUiTheme()
        migratedFlow.push(theme)

        // loop over all nodes in the flow.json
        flow.forEach(node => {
            // if the node is a dashboard node
            if (node.type === 'ui_tab') {
                migratedFlow.push(toUiPage(node, base.id, theme.id))
            } else if (node.type === 'ui_group') {
                migratedFlow.push(toUiGroup(node))
            } else if (node.type.startsWith('ui_')) {
                // Unsupported UI node types, don't return anything
                console.log('Unable to automatically migrate ' + node.type + ' nodes currently')
            } else {
                // We don't have any particular migration logic for this node type
                // Not a Dashboard 1.0 node, we can just return it as is
                migratedFlow.push(node)
            }
        })

        return migratedFlow
    }
}

if (typeof module === 'object' && module.exports) {
    module.exports = MigrateDashboard
} else if (typeof window === 'object') {
    window.MigrateDashboard = MigrateDashboard
} else {
    global.MigrateDashboard = MigrateDashboard
}
