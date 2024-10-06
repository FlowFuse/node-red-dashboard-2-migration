const generators = require('./generators')
const utils = require('./utils')

const transformerMap = require('./transformers/map.json')
const transformers = require('./transformers')

const MigrateDashboard = {
    migrate: function (flow) {
        const idMap = {} // map old IDs to new IDs so that we can update references to them

        const migratedFlow = []
    
        const comment_log = generators.generateCommentLog();

        let comment_string = "This is the comment log for the Node-Red Migration Page. As a rule of thumb, any node type that is listed in the README as \"Not Yet Supported\" could use help in migrating over. For more details please head to the [Github](https://github.com/FlowFuse/node-red-dashboard-2-migration) to help contribute. \n Any 1.0 nodes unable to successfully migrate are disabled to easily manually fix the issue. \n The following nodes were unable to automatically migrate: \n"

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
                // Develop String that will be added to Comment.
                let log_string =  "   - "+node.name+' Type:'+node.type + "\n"
                comment_string = comment_string + log_string
                node.d = true
            }

            // We don't have any particular migration logic for this node type
            // Not a Dashboard 1.0 node, we can just return it as is
            migratedFlow.push(node)
        })
        
        //Add Log to Comment Node then Node to flow.
        comment_log.info = comment_string
        migratedFlow.push(comment_log)

        // work smart, not hard
        let strJson = JSON.stringify(migratedFlow)
        // loop over idMap
        for (const key in idMap) {
            // replace all instances of the old ID with the new ID
            strJson = strJson.replaceAll(key, idMap[key])
        }
        return JSON.parse(strJson)
    }
}

if (typeof module === 'object' && module.exports) {
    module.exports = MigrateDashboard
} else if (typeof window === 'object') {
    window.MigrateDashboard = MigrateDashboard
} else {
    global.MigrateDashboard = MigrateDashboard
}
