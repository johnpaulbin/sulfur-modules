export default {
  "argv" : function (index) {
    sulfur.vars.argv = encodeURIComponent(process.argv[index]);
  },
  "debug" : {
    "log" : function (message) {
      console.log(message);
    }
  }
}
