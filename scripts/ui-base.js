const utils = require('../utils')

module.exports = function () {
    const id = utils.generateId()

    return {
        id,
        type: 'ui-base',
        name: 'My Dashboard',
        path: '/dashboard',
        includeClientData: true,
        acceptsClientConfig: [
            'ui-notification',
            'ui-control'
        ],
        showPathInSidebar: false,
        navigationStyle: 'default',
        titleBarStyle: 'default'
    }
}
