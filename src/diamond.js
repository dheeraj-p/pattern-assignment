const main = function(){
  const fillerCharacter = "*";
  let height = +process.argv[3];
  const diamondType = process.argv[2];
  if(height % 2 == 0){
    height--;
  }
  let diamond = formFilledDiamond(height);
  if(diamondType == "hollow"){
    diamond = formHollowDiamond(height);
  } else if(diamondType == "angled"){
    diamond = formAngledDiamond(height);
  }
  console.log(diamond);
}

const repeatString = function(fillerCharacter, length){
  let line = "";
  for(let count=0; count<length; count++){
    line += fillerCharacter;
  }
  return line;
}

const generateLine = function(firstEdgeCharacter, secondEdgeCharacter, fillerCharacter, length){
  let line = firstEdgeCharacter;
  line += repeatString(fillerCharacter, length - 2);
  if(length > 1){
    line += secondEdgeCharacter;
  }
  return line;
}

const generateDiamondLine = function(lineID, height, fillerCharacter, firstEdgeCharacter, secondEdgeCharacter){
  let line = "";
  let spacesNeeded = (height - 1)/2 - lineID;
  let spaces = repeatString(" ", spacesNeeded);
  let lineLength = lineID * 2 + 1;
  let fillerCharacters = generateLine(firstEdgeCharacter, secondEdgeCharacter, fillerCharacter, lineLength);
  line += spaces + fillerCharacters + spaces; 
  return line;
}

const formDiamond = function(height, fillerCharacter){
  let diamond = ""; 
  let halfHeight = (height - 1)/2;
  for(let rowNumber=0; rowNumber<height; rowNumber++){
    let lineID = rowNumber;
    if(rowNumber > halfHeight){
      lineID = height - rowNumber - 1;
    }
    diamond += generateDiamondLine(lineID, height, fillerCharacter, "*", "*") + "\n";
  }
  return diamond;
}

const formAngledDiamond = function(height){
  let diamond = "";
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
    let line = generateDiamondLine(lineID, height, " ", firstEdge, secondEdge) + "\n";
    if(lineID == 0 || lineID == halfHeight){
      line = generateDiamondLine(lineID, height, " ", "*", "*") + "\n";
    }
    diamond += line;
  }
  return diamond;
}

const formFilledDiamond = function(height){
  let fillerCharacter = "*";
  let diamond = formDiamond(height, fillerCharacter, "*"); 
  return diamond;
}

const formHollowDiamond = function(height){
  let fillerCharacter = " ";
  let diamond = formDiamond(height, fillerCharacter, "*"); 
  return diamond;
}

main();
