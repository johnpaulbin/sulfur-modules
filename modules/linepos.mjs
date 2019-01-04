export default {
  "setpoint" : function (params) {
    sulfur.vars["linepos_" + params[0]] = sulfur.lineNumber;
  },
  "go2point" : function (params) {
    sulfur.lineNumber = sulfur.vars["linepos_" + params[0]];
  },
  "go2line" : function (params) {
    var newlinenum = Number(params[0]);
    sulfur.lineLog(newlinenum);
    if (isNaN(newlinenum)) {
      sulfur.lineLog(params[0] + " is not a number. Skipping command.");
      return;
    }
    sulfur.lineNumber = newlinenum;
    sulfur.lineLog("Changed to line " + newlinenum - 1); //Always change to newlinenum - 1 as will increase 1 after command is run
  }
}
