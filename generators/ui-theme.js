const utils = require('../utils')

module.exports = function () {
    const id = utils.generateId()

    return {
        id,
        type: 'ui-theme',
        name: 'Default Theme',
        colors: {
            surface: '#ffffff',
            primary: '#0094CE',
            bgPage: '#eeeeee',
            groupBg: '#ffffff',
            groupOutline: '#cccccc'
        },
        sizes: {
            pagePadding: '12px',
            groupGap: '12px',
            groupBorderRadius: '4px',
            widgetGap: '12px'
        }
    }
}
