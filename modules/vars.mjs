export default {
  "setvar" : function (params) {
    sulfur.vars[params[0]] = decodeURIComponent(params[1]);
    //If is number, don't set as string
    sulfur.vars[params[0]] = isNaN(sulfur.vars[params[0]]) ? sulfur.vars[params[0]] : Number(sulfur.vars[params[0]]);
  }
}
