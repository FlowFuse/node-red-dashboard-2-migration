        //Add Comment Node 
        const utils = require('../utils')

    module.exports = function () {      
        const comment_id = utils.generateId()
        const commentNode = {
            "id": comment_id,
            "type": "comment",
            "z": "",
            "name": "Migration Log",
            "info": "",
            "x": 10,
            "y": 100,
            "wires": []
        }
        return commentNode
    }
