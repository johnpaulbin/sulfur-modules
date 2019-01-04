export default {
  "setpoint" : function (params) {
    sulfur.vars["linepos_" + params[0]] = sulfur.lineNumber;
  },
  "go2point" : function (params) {
    sulfur.lineNumber = sulfur.vars["linepos_" + params[0]];
  },
  "go2line" : function (params) {
    var newlinenum = Number(params[0]);
    if (isNaN(newlinenum)) {
      sulfur.lineLog(sulfur.lineNumber, params[0] + " is not a number. Skipping command.");
      return;
    }
    sulfur.lineNumber = newlinenum;
  }
}
