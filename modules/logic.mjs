export default {
  "if" : function (params) {
    var conditionValue = sulfur.logic.condition(decodeURIComponent(sulfur.vars[params[0]]));
    //2nd Param is invert
    conditionValue = (params[1] === "invert") ? !conditionValue : conditionValue;
    sulfur.lineLog("Condition " + decodeURIComponent(sulfur.vars[params[0]]) + " is " + conditionValue);
    if (!conditionValue) {
      //Skip next line if not true
      sulfur.lineNumber++;
    }
  }
}
