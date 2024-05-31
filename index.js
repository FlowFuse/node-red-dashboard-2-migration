// ui-page
function migrateUiPage (node) {
    node.type = node.type.replace('_', '-')
    return node
}

const MigrateDashboard = {
    migrate: function (flow) {
        const migratedFlow = []
        // loop over all nodes in the flow.json
        flow.forEach(node => {
            // if the node is a dashboard node
            if (node.type === 'ui_page') {
                const migratedNode = migrateUiPage(node)
                migratedFlow.push(migratedNode)
            } else {
                // we don't have any particular migration logic for this node type
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
