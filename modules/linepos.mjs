export default {
  "setpoint" : function (params) {
    sulfur.vars["linepos_" + params[0]] = sulfur.lineNumber;
  },
  "go2point" : function (params) {
    sulfur.lineNumber = sulfur.vars["linepos_" + params[0]];
  }
}
