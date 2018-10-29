const patternUtil = require("./pattern_util.js");
const {repeat} = patternUtil;
const {generateLine} = patternUtil;
const {generateDiamondLine} = patternUtil;
const {justifyTriangleLine} = patternUtil;

const generateDiamond = function(height, fillerCharacter){
  let diamond = []; 
  let halfHeight = (height - 1)/2;
  for(let count=-halfHeight; count<=halfHeight; count++){
    let lineID = halfHeight - Math.abs(count);
    let line = generateDiamondLine(lineID, height, fillerCharacter, "*", "*");
    diamond.push(line);
  }
  return diamond;
}

const generateAngledDiamond = function(height){
  let diamond = [];
  let halfHeight = (height - 1)/2;
  let firstEdges = ["/","\\"];
  let secondEdges = ["\\","/"];
  for(let count = -halfHeight; count <= halfHeight; count++){
    let rowNumber = halfHeight + count;
    let lineID = halfHeight - Math.abs(count);
    let indexForEdges = Math.floor(rowNumber/(halfHeight + 1));
    let firstEdge = firstEdges[indexForEdges];
    let secondEdge = secondEdges[indexForEdges];
    let line = generateDiamondLine(lineID, height, " ", firstEdge, secondEdge);
    if(lineID == 0 || lineID == halfHeight){
      line = generateDiamondLine(lineID, height, " ", "*", "*");
    }
    diamond.push(line);
  }
  return diamond;
}

const generateFilledDiamond = function(height){
  let fillerCharacter = "*";
  let diamond = generateDiamond(height, fillerCharacter, "*"); 
  return diamond;
}

const generateHollowDiamond = function(height){
  let fillerCharacter = " ";
  let diamond = generateDiamond(height, fillerCharacter, "*"); 
  return diamond;
}

const generateFilledRectangle = function(width, height){
  let rectangle = [];
  for(let row = 0; row < height; row++){
    let line = repeat("*", width);
    rectangle.push(line);
  }
  return rectangle;
}

const generateAlternatingRectangle = function(width, height){
  let rectangle = [];
  let fillers = ["*", "-"];
  for(let row = 0; row < height; row++){
    let fillerToSelectFrom = row % 2;
    let filler = fillers[fillerToSelectFrom];
    let line = repeat(filler, width);
    rectangle.push(line);
  }
  return rectangle;
}

const generateHollowRectangle = function(width, height){
  let rectangle = [];
  for(let row = 0; row < height; row++){
    let line = "*" + repeat(" ", width - 2) + "*";
    if(row == 0 || row == (height - 1)){
      line = repeat("*", width);
    }
    rectangle.push(line);
  }
  return rectangle;
}

const createDiamond = function(patternSpecifications){
  let type = patternSpecifications.type;
  let height = patternSpecifications.height;
  if(height % 2 == 0){
    height--;
  }
  let diamond = generateFilledDiamond(height).join("\n");
  if(type == "hollow"){
    diamond = generateHollowDiamond(height).join("\n");
  } else if(type == "angled"){
    diamond = generateAngledDiamond(height).join("\n");
  }
  return diamond;
}

const generateRectangle = function(patternSpecifications){
  let type = patternSpecifications.type;
  let width = patternSpecifications.width;
  let height = patternSpecifications.height;
  let rectangleGenerators = {filled : generateFilledRectangle, 
    hollow : generateHollowRectangle,
    alternating : generateAlternatingRectangle};
  let rectangle = rectangleGenerators[type](width, height).join("\n");
  return rectangle;
}

const generateTriangle = function(height, alignment){
  let triangle = [];
  for(let lineLength=1; lineLength<=height; lineLength++){
    let spaces = repeat(" ", height - lineLength);
    let line = repeat("*", lineLength);
    let justifiedLine = justifyTriangleLine(spaces, line, alignment);
    triangle.push(justifiedLine);
  }
  return triangle;
}

const getTriangle = function(patternSpecifications){
  let alignment = patternSpecifications.type;
  let height = patternSpecifications.height;
  return generateTriangle(height, alignment).join("\n");
}

exports.generateRectangle = generateRectangle;
exports.getTriangle = getTriangle;
exports.createDiamond = createDiamond;
