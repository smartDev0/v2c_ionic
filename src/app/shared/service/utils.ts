export const pages = {
    principal: 1,
    language:2,
    intensity:3,
    installationType:4,
    dynamic:5,
    program:6
}

export var  xah_obj_to_map = ( obj => {
    const mp = new Map;
    Object.keys ( obj ). forEach (k => { mp.set(k, obj[k]) });
    return mp;
  });