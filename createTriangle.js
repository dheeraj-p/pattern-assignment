const patternLib = require("./src/pattern_lib.js");
const {readUserInput} = require("./src/pattern_util.js");
const {getTriangle} = patternLib;

const main = function(){
  let userInput = readUserInput(process.argv);
  let triangle = getTriangle(userInput);
  console.log(triangle);
}

main();
