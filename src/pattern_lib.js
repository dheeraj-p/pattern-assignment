const repeat = function (symbol, length){
  let line = "";
  for(let count=0; count<length; count++){
    line += symbol;
  }
  return line;
}
const generateFilledRectangle = function(width, height){
  let rectangle = "";
  let separator = "";
  for(let row = 0; row < height; row++){
    rectangle += separator + repeat("*", width);
    separator = "\n";
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
  let triangle = "";
  for(let lineLength=1; lineLength<height; lineLength++){
    triangle += repeat(filler, lineLength) + "\n";
  }
  triangle += repeat(filler, height);
  return triangle;
}

const generateRightTriangle = function(height, filler){
  let triangle = "";
  for(let lineLength=1; lineLength<height; lineLength++){
    triangle += repeat(" ", height - lineLength);
    triangle += repeat(filler, lineLength) + "\n";
  }
  triangle += repeat(filler, height);
  return triangle;
}

const generateLine = function(firstEdgeCharacter, secondEdgeCharacter, fillerCharacter, length){
  let line = firstEdgeCharacter;
  line += repeat(fillerCharacter, length - 2);
  if(length > 1){
    line += secondEdgeCharacter;
  }
  return line;
}

const generateDiamondLine = function(lineID, height, fillerCharacter, firstEdgeCharacter, secondEdgeCharacter){
  let line = "";
  let spacesNeeded = (height - 1)/2 - lineID;
  let spaces = repeat(" ", spacesNeeded);
  let lineLength = lineID * 2 + 1;
  let fillerCharacters = generateLine(firstEdgeCharacter, secondEdgeCharacter, fillerCharacter, lineLength);
  line += spaces + fillerCharacters + spaces; 
  return line;
}

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

const createDiamond = function(height, type){
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

const generateRectangle = function(width, height, type){
  let rectangle = generateFilledRectangle(width, height);
  if(type == "hollow"){
    rectangle = generateHollowRectangle(width, height);
  } else if(type == "alternating"){
    rectangle = generateAlternatingRectangle(width, height); 
  }
  return rectangle;
}

const generateTriangle = function(height, alignment, filler){
  let isLeftAligned = (alignment == "left");
  let isRightAligned = (alignment == "right");

  let triangle = generateLeftTriangle(height, filler);
  if(isRightAligned){
    triangle = generateRightTriangle(height, filler);
  } 
  return triangle;
}

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.createDiamond = createDiamond;
