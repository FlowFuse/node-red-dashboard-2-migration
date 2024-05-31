module.exports = {
    getById (flow, id) {
        return flow.find(node => node.id === id)
    },
    getByType (flow, type) {
        return flow.filter(node => node.type === type)
    },
    generateId () {
        const bytes = []
        for (let i = 0; i < 8; i++) {
            bytes.push(Math.round(0xff * Math.random()).toString(16).padStart(2, '0'))
        }
        return bytes.join('')
    }
}
