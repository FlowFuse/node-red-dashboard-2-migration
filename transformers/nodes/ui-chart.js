module.exports = function (node, baseId, themeId) {
    node.type = 'ui-chart'

    // update properties
    // NONE
    node.xAxisFormatType=node.xformat
    node.showLegend=node.legend
    // new properties  
    node.category="topic"
    node.categoryType="msg"
    node.xAxisLabel=""
    node.xAxisFormat=""
    node.xAxisProperty="",
    node.xAxisPropertyType="property"
    node.xAxisType="time"
    node.yAxisLabel="",
    node.yAxisProperty="",
    node.textColor=["#666666"]
    node.textColorDefault=true
    node.gridColor=["#e5e5e5"]
    node.gridColorDefault=true
    node.action="append"
    node.stackSeries=false
    node.pointShape="circle"
    node.pointRadius=4
 
    // remove properties
    delete node.dot
    delete node.useUTC
    delete node.useDifferentColor
    delete node.interpolate
    delete node.nodata
    delete node.cutout
    delete node.useOneColor
    delete node.outputs
    //remove old properties
    delete node.xformat
    delete node.legend

    return node
}

