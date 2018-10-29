const patternUtil = require("../src/pattern_util.js");
const assert = require("assert");
const {repeat} = patternUtil;
const {readUserInput} = patternUtil;
const {justifyTriangleLine} = patternUtil;
const {generateLine} = patternUtil;
const {generateDiamondLine} = patternUtil;

//-------------------------- Test repeat() function------------//

const testRepeat = function(character, times, expectedOutput){
  assert.equal(repeat(character, times), expectedOutput);
}

testRepeat("", 0, "");
testRepeat(" ", 0, "");
testRepeat("", 5, "");
testRepeat("a", 1, "a");
testRepeat("a", 5, "aaaaa");
testRepeat("*", 5, "*****");
testRepeat(" ", 5, "     ");
testRepeat("\n", 5, "\n\n\n\n\n");

//-------------------------- Test generateLine() function------------//

const testGenerateLine = function(firstEdgeChar, secondEdgeChar, filler, length, expectedOutput){
  assert.equal(generateLine(firstEdgeChar, secondEdgeChar, filler, length), expectedOutput);
}

testGenerateLine("", "", "", 0, "");
testGenerateLine("", "", "*", 0, "");
testGenerateLine("", "", "*", 2, "");
testGenerateLine("", "", "*", 3, "*");
testGenerateLine("*", "", "*", 3, "**");
testGenerateLine("*", "*", "*", 3, "***");
testGenerateLine("*", "*", " ", 3, "* *");
testGenerateLine("*", "*", " ", 5, "*   *");
testGenerateLine("/", "\\", " ", 5, "/   \\");

//-------------------------- Test generateDiamondLine() function------------//

const testGenerateDiamondLine = function(lineID, height, filler, firstEdge, secondEdge, expectedOutput){
  assert.equal(generateDiamondLine(lineID, height, filler, firstEdge, secondEdge), expectedOutput);
}

testGenerateDiamondLine(0, 0, " ", "*", "*", "*");
testGenerateDiamondLine(0, 5, " ", "*", "*", "  *  ");
testGenerateDiamondLine(1, 5, " ", "*", "*", " * * ");
testGenerateDiamondLine(2, 5, " ", "*", "*", "*   *");
testGenerateDiamondLine(4, 9, " ", "*", "*", "*       *");

//-------------------------- Test readUserInput() function------------//
const testReadUserInput = function(inputArgs, expectedOutput){
  assert.deepEqual(readUserInput(inputArgs), expectedOutput);
}

let inputArgs = ["node", "somefile.js", "filled", "20", "7"];
let expectedOutput = {type : "filled", width : 20, height : 7}
testReadUserInput(inputArgs, expectedOutput);

inputArgs = ["node", "somefile.js", "hollow", "5", "5"];
expectedOutput = {type : "hollow", width : 5, height : 5}
testReadUserInput(inputArgs, expectedOutput);

inputArgs = ["node", "somefile.js", "alternating", "7", "1"];
expectedOutput = {type : "alternating", width : 7, height : 1}
testReadUserInput(inputArgs, expectedOutput);

inputArgs = ["node", "somefile.js", "left", "7"];
expectedOutput = {type : "left", width : 7, height : 7}
testReadUserInput(inputArgs, expectedOutput);

inputArgs = ["node", "somefile.js", "right", "7"];
expectedOutput = {type : "right", width : 7, height : 7}
testReadUserInput(inputArgs, expectedOutput);

inputArgs = ["node", "somefile.js", "filled", "9"];
expectedOutput = {type : "filled", width : 9, height : 9}
testReadUserInput(inputArgs, expectedOutput);

//-------------------------- Test readUserInput() function------------//

const testJustifyTriangleLine = function(spaces, fillers, type, expectedOutput){
  assert(justifyTriangleLine(spaces, fillers, type), expectedOutput);
}

testJustifyTriangleLine("   ","*", "right", "   *");
testJustifyTriangleLine("   ","*", "left", "*   ");
testJustifyTriangleLine("   ","***", "right", "   ***");
testJustifyTriangleLine("   ","***", "left", "***   ");
testJustifyTriangleLine("   ","******", "right", "   ******");

console.log("Test passed for pattern_util.js");
