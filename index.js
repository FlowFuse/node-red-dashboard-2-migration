const generators = require('./generators')

const transformerMap = require('./transformers/map.json')
const transformers = require('./transformers')

const MigrateDashboard = {
    migrate: function (flow) {
        const migratedFlow = []

        // generate nodes we know D1.0 doesn't provide
        const base = generators.generateUiBase()
        migratedFlow.push(base)

        const theme = generators.generateUiTheme()
        migratedFlow.push(theme)

        // loop over all nodes in the flow.json
        flow.forEach(node => {
            if (
                Object.prototype.hasOwnProperty.call(transformerMap, node.type) &&
                Object.prototype.hasOwnProperty.call(transformers, transformerMap[node.type]) &&
                typeof transformers[transformerMap[node.type]] === 'function'
            ) {
                migratedFlow.push(transformers[transformerMap[node.type]](node, base.id, theme.id))
                return
            }

            if (node.type.startsWith('ui_')) {
                // Unsupported UI node types, don't return anything
                console.log('Unable to automatically migrate ' + node.type + ' nodes currently')
                return
            }

            // We don't have any particular migration logic for this node type
            // Not a Dashboard 1.0 node, we can just return it as is
            migratedFlow.push(node)
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
