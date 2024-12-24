module.exports = function (node, baseId, themeId) {
    node.type = 'ui-notification'

    // update properties
    if (node.position=="dialog"|| node.position == "prompt"){
    node.position="center center"
    node.allowConfirm=true
    node.allowDismiss=true
    node.confirmText=node.ok
    node.dismissText=node.cancel
    }else{
    node.allowConfirm=false
    node.allowDismiss=false
    node.confirmText=node.ok
    node.dismissText=node.cancel
    }
    if (node.highlight!=""){
        node.colorDefault=false
        node.color=node.highlight;   
    }else{
        node.colorDefault=true;
        node.color=null
    }
   
    // new properties
  
    node.ui=baseId;
    node.showCountdown=false

    // remove properties
    // NONE
    delete node.highlight
    delete node.topic
    delete node.sendall

    return node
}
