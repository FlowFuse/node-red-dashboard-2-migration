const should = require('should') // eslint-disable-line
const MigrateDashboard = require('../index.js')
const utils = require('../utils')

// load test flows
const basicLayoutBefore = require('./flows/basic-layout-before.json')
const basicLayoutAfter = require('./flows/basic-layout-after.json')

describe('Dashboard Migration Script', function () {
    const migratedFlow = MigrateDashboard.migrate(basicLayoutBefore)
    describe('UI Page:', function () {
        const base = utils.getByType(migratedFlow, 'ui-base')[0]
        const theme = utils.getByType(migratedFlow, 'ui-theme')[0]
        const page = utils.getByType(migratedFlow, 'ui-page')[0]

        const page1 = utils.getByType(basicLayoutAfter, 'ui-page')[0]
        it('should set .type correctly ', function () {
            // check type
            page.type.should.equal('ui-page')
        })

        // modified properties
        it('should set .visible correctly ', function () {
            page.visible.should.equal(page1.visible)
        })
        it('should set .disabled correctly ', function () {
            page.disabled.should.equal(page1.disabled)
        })

        // shouldn't have changed
        it('should set .name correctly ', function () {
            page.name.should.equal(page1.name)
        })
        it('should set .path correctly ', function () {
            page.path.should.equal(page1.path)
        })
        it('should set .icon correctly ', function () {
            page.icon.should.equal(page1.icon)
        })

        // insert defaults
        it('should set .ui correctly ', function () {
            page.ui.should.equal(base.id)
        })
        it('should set .theme correctly ', function () {
            page.theme.should.equal(theme.id)
        })
        it('should set .order correctly ', function () {
            page.order.should.equal(page1.order)
        })
        it('should set .layout correctly ', function () {
            page.layout.should.equal(page1.layout)
        })
        it('should set .className correctly ', function () {
            page.className.should.equal(page1.className)
        })
    })

    describe('UI Group:', function () {
        const group = utils.getByType(migratedFlow, 'ui-group')[0]
        const group1 = utils.getByType(basicLayoutAfter, 'ui-group')[0]
        const page = utils.getByType(migratedFlow, 'ui-page')[0]

        it('should set .type correctly ', function () {
            // check type
            group.type.should.equal('ui-group')
        })

        // modified properties
        it('should set .page correctly ', function () {
            group.page.should.equal(page.id)
        })
        it('should set .showTitle correctly ', function () {
            group.showTitle.should.equal(group1.showTitle)
        })

        // shouldn't have changed
        it('should set .name correctly ', function () {
            group.name.should.equal(group1.name)
        })
        it('should set .order correctly ', function () {
            group.order.should.equal(group1.order)
        })
        it('should set .className correctly ', function () {
            group.className.should.equal(group1.className)
        })

        // inserted defaults
        it('should set .height correctly ', function () {
            group.height.should.equal(group1.height)
        })
        it('should set .visible correctly ', function () {
            group.visible.should.equal(group1.visible)
        })
        it('should set .disabled correctly ', function () {
            group.disabled.should.equal(group1.disabled)
        })
    })

    describe('UI Text:', function () {
        const text = utils.getByType(migratedFlow, 'ui-text')[0]
        const text1 = utils.getByType(basicLayoutAfter, 'ui-text')[0]

        const excludeFromChecks = ['id', 'group']
        Object.keys(text).forEach((prop) => {
            if (!excludeFromChecks.includes(prop)) {
                it('should set ' + prop + ' correctly ', function () {
                    // check type
                    if (Array.isArray(text[prop])) {
                        text[prop].length.should.equal(text1[prop].length)
                    } else {
                        text[prop].should.equal(text1[prop])
                    }
                })
            }
        })
    })

    describe('UI Form:', function () {
        const form = utils.getByType(migratedFlow, 'ui-form')[0]
        const form1 = utils.getByType(basicLayoutAfter, 'ui-form')[0]

        const excludeFromChecks = ['id', 'group']
        Object.keys(form).forEach((prop) => {
            if (!excludeFromChecks.includes(prop)) {
                it('should set ' + prop + ' correctly ', function () {
                    form[prop].should.eql(form1[prop])
                })
            }
        })

        // new properties
        it('should set .resetOnSubmit correctly ', function () {
            form.resetOnSubmit.should.equal(form1.resetOnSubmit)
        })
    })

    describe('Unsupported UI Nodes:', function () {
        it('should should be disabled in the NR Editor', function () {
            const button0 = utils.getByType(migratedFlow, 'ui_button')[0]
            const button1 = utils.getByType(basicLayoutAfter, 'ui_button')[0]
            button0.d.should.equal(button1.d)
        })
    })
})
