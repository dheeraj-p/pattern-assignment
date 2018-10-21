const main =  function(){
  let rectangleType = process.argv[2];
  let height = +process.argv[4];
  let width = +process.argv[3];
  let rectangle = generateFilledRectangle(width, height);
  if(rectangleType == "hollow"){
    rectangle = generateHollowRectangle(width, height);
  } else if(rectangleType == "alternating"){
    rectangle = generateAlternatingRectangle(width, height); 
  }
   console.log(rectangle); 
}

const repeat = function(character, times){
  let result = "";
  for(let count = 0; count < times; count++){
    result += character;
  }
  return result;
}

const generateFilledRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height; row++){
    rectangle += repeat("*", width) + "\n";
  }
  return rectangle;
}

const generateAlternatingRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height; row++){
    let line = repeat("*", width) + "\n";
    if(row % 2 == 1){
      line = repeat("-", width) + "\n";
    }
    rectangle += line;
  }
  return rectangle;
}

const generateHollowRectangle = function(width, height){
  let rectangle = "";
  for(let row = 0; row < height; row++){
    let line = "*" + repeat(" ", width - 2) + "*";
    if(row == 0 || row == (height - 1)){
      line = repeat("*", width);
    }
    rectangle += line + "\n";
  }
  return rectangle;
}

main(); 
