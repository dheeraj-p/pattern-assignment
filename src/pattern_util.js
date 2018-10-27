const repeat = function (symbol, length){
  let line = "";
  for(let count=0; count<length; count++){
    line += symbol;
  }
  return line;
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


exports.generateDiamondLine = generateDiamondLine;
exports.generateLine = generateLine;
exports.repeat = repeat;
