//Add Comment Node 
const utils = require('../utils')

    module.exports = function () {      
        const comment_id = utils.generateId()
        const commentNode = {
            "id": comment_id,
            "type": "comment",
            "z": "",
            "name": "Dashboard 1.0 to 2.0 - Migration Log",
            "info": "",
            "x": 10,
            "y": 100,
            "wires": []
        }
        return commentNode
    }
