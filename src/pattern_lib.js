const patternUtil = require("./pattern_util.js");
const {repeat} = patternUtil;
const {generateLine} = patternUtil;
const {generateDiamondLine} = patternUtil;

const generateDiamond = function(height, fillerCharacter){
  let diamond = ""; 
  let separator = "";
  let halfHeight = (height - 1)/2;
  for(let rowNumber=0; rowNumber<height; rowNumber++){
    let lineID = rowNumber;
    if(rowNumber > halfHeight){
      lineID = height - rowNumber - 1;
    }
    diamond += separator + generateDiamondLine(lineID, height, fillerCharacter, "*", "*");
    separator = "\n";
  }
  return diamond;
}

const generateAngledDiamond = function(height){
  let diamond = "";
  let separator = "";
  let halfHeight = (height - 1)/2;
  for(let rowNumber = 0; rowNumber < height; rowNumber++){
    let lineID = rowNumber;
    let firstEdge = "/";
    let secondEdge = "\\";
    
    if(rowNumber > halfHeight){
      lineID = height - rowNumber - 1;
      firstEdge = "\\";
      secondEdge = "/";
    }
    let line = generateDiamondLine(lineID, height, " ", firstEdge, secondEdge);
    if(lineID == 0 || lineID == halfHeight){
      line = generateDiamondLine(lineID, height, " ", "*", "*");
    }
    diamond += separator + line;
    separator = "\n";
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
  let rectangle = "";
  let separator = "";
  for(let row = 0; row < height; row++){
    let line = repeat("*", width);
    if(row % 2 == 1){
      line = repeat("-", width);
    }
    rectangle += separator + line;
    separator = "\n";
  }
  return rectangle;
}

const generateHollowRectangle = function(width, height){
  let rectangle = "";
  let separator = "";
  for(let row = 0; row < height; row++){
    let line = "*" + repeat(" ", width - 2) + "*";
    if(row == 0 || row == (height - 1)){
      line = repeat("*", width);
    }
    rectangle += separator  + line;
    separator = "\n";
  }
  return rectangle;
}

const generateLeftTriangle = function(height, filler){
  let triangle = [];
  for(let lineLength=1; lineLength<=height; lineLength++){
    let line = repeat(filler, lineLength);
    triangle.push(line);
  }
  return triangle;
}

const generateRightTriangle = function(height, filler){
  let triangle = [];
  for(let lineLength=1; lineLength<=height; lineLength++){
    let spaces = repeat(" ", height - lineLength);
    let line = spaces + repeat(filler, lineLength);
    triangle.push(line);
  }
  return triangle;
}

const createDiamond = function(patternSpecifications){
  let type = patternSpecifications.type;
  let height = patternSpecifications.height;
  if(height % 2 == 0){
    height--;
  }
  let diamond = generateFilledDiamond(height);
  if(type == "hollow"){
    diamond = generateHollowDiamond(height);
  } else if(type == "angled"){
    diamond = generateAngledDiamond(height);
  }
  return diamond;
}

const generateRectangle = function(patternSpecifications){
  let type = patternSpecifications.type;
  let width = patternSpecifications.width;
  let height = patternSpecifications.height;
  let rectangle = generateFilledRectangle(width, height).join("\n");
  if(type == "hollow"){
    rectangle = generateHollowRectangle(width, height);
  } else if(type == "alternating"){
    rectangle = generateAlternatingRectangle(width, height); 
  }
  return rectangle;
}

const generateTriangle = function(patternSpecifications){
  let alignment = patternSpecifications.type;
  let height = patternSpecifications.height;
  let isLeftAligned = (alignment == "left");
  let isRightAligned = (alignment == "right");

  let triangle = generateLeftTriangle(height, "*").join("\n");
  if(isRightAligned){
    triangle = generateRightTriangle(height, "*").join("\n");
  } 
  return triangle;
}

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.createDiamond = createDiamond;
