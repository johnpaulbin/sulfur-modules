export default {
  "setvar" : function (params) {
    sulfur.vars[params[0]] = decodeURIComponent(params[1]);
  }
}
