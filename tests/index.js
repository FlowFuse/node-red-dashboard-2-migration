const assert = require('assert')
const MigrateDashboard = require('../index.js')

// load test flows
const basicLayoutBefore = require('./flows/basic-layout-before.json')
const basicLayoutAfter = require('./flows/basic-layout-after.json')

describe('Dashboard Migration Script', function () {
    it('accepts a flow.json', function () {
        const migratedFlow = MigrateDashboard.migrate(basicLayoutBefore)
        assert.deepEqual(migratedFlow, basicLayoutAfter)
    })
})
