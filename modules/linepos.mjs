
export default {
  "setpoint" : function (params) {
    sulfur.vars["linepos_" + params[0]] = sulfur.lineNumber;
  },
  "go2point" : function (params) {
    var pointLine = sulfur.vars["linepos_" + params[0]];
    if (!pointLine) {
      sulfur.lineLog("Invalid Point");
      return;
    }
    sulfur.lineNumber = pointLine;
  },
  "go2line" : function (params) {
    var line = sulfur.num(params[0]);
    if (line) {
      if (line > 0 && line < sulfur.code.length + 1) {
        sulfur.lineNumber = line - 2;
        sulfur.lineLog("Moved to line " + line);
      } else {
        sulfur.lineLog(line + " is not a valid line");
      }
    } else {
      sulfur.lineLog(params[0] + " is not a number");
    }
  }
}
