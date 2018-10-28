const patternLib = require("./src/pattern_lib.js");
const {readUserInput} = require("./src/pattern_util.js");
const {generateRectangle} = patternLib;

const main =  function(){
  let userInputs = readUserInput(process.argv);
  let rectangle = generateRectangle(userInputs);
  console.log(rectangle); 
}

main();
