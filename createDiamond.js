const patternLib = require("./src/pattern_lib.js");
const {readUserInput} = require("./src/pattern_util.js");
const {createDiamond} = patternLib;

const main = function(){
  let userInput = readUserInput(process.argv);
  let diamond = createDiamond(userInput);
  console.log(diamond);
}

main();
