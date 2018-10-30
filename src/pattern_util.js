const repeat = function (symbol, length){
  let line = "";
  for(let count=0; count<length; count++){
    line += symbol;
  }
  let line = new Array(+length).fill(symbol)symbol.join("");
  return line;
}

const readUserInput = function(args){
  let patternType = args[2];
  let patternWidth = +args[3];
  let patternHeight = +args[4];
  if(isNaN(patternHeight)){
    patternHeight = patternWidth;
  }
  return {type : patternType, width: patternWidth, height : patternHeight};
};

const generateLine = function(firstEdgeCharacter, secondEdgeCharacter, fillerCharacter, length){
  let line = firstEdgeCharacter;
  line += repeat(fillerCharacter, length - 2);
  if(length > 1){
    line += secondEdgeCharacter;
  }
  return line;
}

const justifyTriangleLine = function(spaces, line, type){
  let justifiedLine = line + spaces;
  if(type == "right"){
    justifiedLine = spaces + line;
  }
  return justifiedLine;
}

const generateDiamondLine = function(lineID, height, fillerCharacter, firstEdgeCharacter, secondEdgeCharacter){
  let spacesNeeded = (height - 1)/2 - lineID;
  let spaces = repeat(" ", spacesNeeded);
  let lineLength = lineID * 2 + 1;
  let fillerCharacters = generateLine(firstEdgeCharacter, secondEdgeCharacter, fillerCharacter, lineLength);
  let line = spaces + fillerCharacters + spaces; 
  return line;
}

exports.readUserInput = readUserInput;
exports.generateDiamondLine = generateDiamondLine;
exports.generateLine = generateLine;
exports.justifyTriangleLine = justifyTriangleLine;
exports.repeat = repeat;
