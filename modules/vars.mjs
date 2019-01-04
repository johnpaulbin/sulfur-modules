export default {
  "open" : function (params) {
    open(decodeURIComponent(params[0]));
  },
  "popup" : function (params) {
    alert(decodeURIComponent(params[0]));
  },
  "ask" : function (params) {
    sulfur.vars.answer = prompt(decodeURIComponent(params[0]));
  }
}
