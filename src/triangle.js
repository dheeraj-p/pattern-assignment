const main = function(){
  let triangleAlignment = process.argv[2];
  let height = +process.argv[3];
  let filler = "*";

  let isLeftAligned = (triangleAlignment == "left");
  let isRightAligned = (triangleAlignment == "right");

  let triangle = drawLeftTriangle(height, filler);
  if(isRightAligned){
    triangle = drawRightTriangle(height, filler);
  } 
  console.log(triangle);
}

const generateLine = function (symbol, length){
  let line = "";
  for(let count=0; count<length; count++){
    line += symbol;
  }
  return line;
}

const drawLeftTriangle = function(height, filler){
  let triangle = "";
  for(let lineLength=1; lineLength<height; lineLength++){
    triangle += generateLine(filler, lineLength) + "\n";
  }
  triangle += generateLine(filler, height);
  return triangle;
}

const drawRightTriangle = function(height, filler){
  let triangle = "";
  for(let lineLength=1; lineLength<height; lineLength++){
    triangle += generateLine(" ", height - lineLength);
    triangle += generateLine(filler, lineLength) + "\n";
  }
  triangle += generateLine(filler, height);
  return triangle;
}

main();
