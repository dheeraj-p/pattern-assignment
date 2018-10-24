const patternLib = require("./src/pattern_lib");
const {generateTriangle} = patternLib;

const main = function(){
  let triangleAlignment = process.argv[2];
  let height = +process.argv[3];
  let filler = "*";

  let triangle = generateTriangle(height, triangleAlignment, filler);
  console.log(triangle);
}

main();
