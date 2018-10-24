const patternLib = require("./src/pattern_lib.js");
const {generateRectangle} = patternLib;

const main =  function(){
  let rectangleType = process.argv[2];
  let height = +process.argv[4];
  let width = +process.argv[3];
  let rectangle = generateRectangle(width, height, rectangleType);
  console.log(rectangle); 
}

main();
