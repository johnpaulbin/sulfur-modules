export {
  "open" : function (params) {
    window.open(decodeURIComponent(params[0]));
  },
  "popup" : function (params) {
    alert(decodeURIComponent(params[0]));
  }
}
