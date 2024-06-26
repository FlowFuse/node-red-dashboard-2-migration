const generators = require('./generators')
const utils = require('./utils')

const transformerMap = require('./transformers/map.json')
const transformers = require('./transformers')

const MigrateDashboard = {
    migrate: function (flow) {
        const idMap = {} // map old IDs to new IDs so that we can update references to them

        const migratedFlow = []

        // generate nodes we know D1.0 doesn't provide
        const base = generators.generateUiBase()
        migratedFlow.push(base)

        const theme = generators.generateUiTheme()
        migratedFlow.push(theme)

        // loop over all nodes in the flow.json
        flow.forEach(node => {
            const oldId = node.id
            const newId = utils.generateId()
            node.id = newId
            idMap[oldId] = newId

            if (
                Object.prototype.hasOwnProperty.call(transformerMap, node.type) &&
                Object.prototype.hasOwnProperty.call(transformers, transformerMap[node.type]) &&
                typeof transformers[transformerMap[node.type]] === 'function'
            ) {
                const migratedNode = transformers[transformerMap[node.type]](node, base.id, theme.id)
                migratedFlow.push(migratedNode)
                return
            }

            if (node.type.startsWith('ui_')) {
                // Unsupported UI node types, disable them
                console.log('Unable to automatically migrate ' + node.type + ' nodes currently. Disabling the node.')
                node.d = true
            }

            // We don't have any particular migration logic for this node type
            // Not a Dashboard 1.0 node, we can just return it as is
            migratedFlow.push(node)
        })

        console.log(idMap)
        // loop ovr all nodes in thw flow and ensure we have updated references:

        migratedFlow.forEach(node => {
            if (node.wires && node.wires.length) {
                node.wires = node.wires.map(wire => {
                    return wire.map(id => {
                        return idMap[id] || id
                    })
                })
            }
            if (node.group) {
                node.group = idMap[node.group] || node.group
            }
            if (node.page) {
                node.page = idMap[node.page] || node.page
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
