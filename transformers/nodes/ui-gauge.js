module.exports = function (node, baseId, themeId) {
    node.type = 'ui-gauge'

    // update properties
    node.units=node.label;
    node.segments=[]
    node.segments[0]={}
    node.segments[0].from=node.min;
    node.segments[0].colors=node.colors[0];
    node.segments[1]={}
    node.segments[1].from=node.seg1;
    node.segments[1].color=node.colors[1];
    node.segments[2]={}
    node.segments[2].from=node.seg2;
    node.segments[2].color=node.colors[2];
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
      const index_suf = index_pre+9;
      const result_suf = str.substring(index_suf, );
      node.suffix=result_suf;
    } else {
      node.prefix=""
      node.suffix=""
    }; 

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
