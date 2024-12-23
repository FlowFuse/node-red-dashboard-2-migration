module.exports = function (node, baseId, themeId) {
    node.type = 'ui-gauge'

    // update properties
    node.units=node.label;
    node.segments[1].from=node.min;
    node.segments[1].colors=node.colors[1];
    node.segments[2].from=node.seg1;
    node.segments[2].color=node.colors[2];
    node.segments[3].from=node.seg2;
    node.segments[3].color=node.colors[3];
    switch (node.gtype) {
        case "gage": //gauge 
            node.gtype="gauge-half";
            break;
        case "wave": //level
            node.gtype="gauge-tank"
            break;
        default:
            node.gtype="gauge-34";
            break;
    }

    let str=node.format;
    const index_pre = str.indexOf("{{value}}");
    if (index_pre !== -1) {
      const result_pre = str.substring(0, index_pre);
        node.prefix=result_pre;
    } else {
      node.prefix=""
    } 
    const index_suf = str.indexOf("{{value}}");
    if (index_suf !== -1) {
      const result_suf = str.substring(index_suf+9, );
        node.suffix=result_suf;
    } else {
      node.suffix=""
    } 

    // new properties
    node.icon=""
    node.sizeThickness=16
    node.sizeGap=4
    node.sizeKeyThickness=8
    node.styleRounded=true
    node.styleGlow=false

    // remove properties
    delete node.seg1
    delete node.seg2
    delete node.colors
    delete node.format

    return node
}
