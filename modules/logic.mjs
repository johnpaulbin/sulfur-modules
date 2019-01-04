export default {
  "if" : function (params) {
    var condition = decodeURIComponent(params[0]);
    var conditionValue = sulfur.logic.condition(condition);
    //2nd Param is invert
    conditionValue = (params[1] === "invert") ? !conditionValue : conditionValue;
    sulfur.lineLog("Condition " + condition + " is " + conditionValue);
    if (!conditionValue) {
      //Skip next line if not true
      sulfur.lineNumber++;
    }
  }
}
