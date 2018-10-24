const patternLib = require("./src/pattern_lib.js");
const {createDiamond} = patternLib;

const main = function(){
  let height = +process.argv[3];
  const diamondType = process.argv[2];
  let diamond = createDiamond(height, diamondType);
  console.log(diamond);
}

main();
