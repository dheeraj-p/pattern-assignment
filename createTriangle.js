const patternLib = require("./src/pattern_lib.js");
const {readUserInput} = require("./src/pattern_util.js");
const {generateTriangle} = patternLib;

const main = function(){
  let userInput = readUserInput(process.argv);
  let triangle = generateTriangle(userInput);
  console.log(triangle);
}

main();
