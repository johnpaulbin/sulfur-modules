export default {
  "setvar" : function (params) {
    sulfur.vars[params[0]] = decodeURIComponent(params[1]);
    //If is number, don't set as string
    sulfur.vars[params[0]] = isNaN(sulfur.vars[params[0]]) ? sulfur.vars[params[0]] : Number(sulfur.vars[params[0]]);
  },
  "add" : function (params) {
    /*sulfur.vars[params[0]] = decodeURIComponent(params[1]);
    //If is number, don't set as string
    sulfur.vars[params[0]] = isNaN(sulfur.vars[params[0]]) ? sulfur.vars[params[0]] : Number(sulfur.vars[params[0]]);*/
    //Check if variable and param is number
    if (typeof(sulfur.vars[params[0]]) === "number" && !isNaN(params[1])) {
      //Both are numbers (Valid)
      sulfur.lineLog("Valid addition");
      sulfur.vars[params[0]] = sulfur.vars[params[0]] + Number(params[1]);
    }
  }
}
