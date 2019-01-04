exports.open = function (params) {
  window.open(decodeURIComponent(params[0]));
};
exports.popup = function (params) {
  alert(decodeURIComponent(params[0]));
};
