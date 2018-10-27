const patternUtil = require("../src/pattern_util.js");
const assert = require("assert");
const {repeat} = patternUtil;
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

//-------------------------- Test generateLine() function------------//

const testGenerateDiamondLine = function(lineID, height, filler, firstEdge, secondEdge, expectedOutput){
  assert.equal(generateDiamondLine(lineID, height, filler, firstEdge, secondEdge), expectedOutput);
}

testGenerateDiamondLine(0, 0, " ", "*", "*", "*");
testGenerateDiamondLine(0, 5, " ", "*", "*", "  *  ");
testGenerateDiamondLine(1, 5, " ", "*", "*", " * * ");
testGenerateDiamondLine(2, 5, " ", "*", "*", "*   *");
testGenerateDiamondLine(4, 9, " ", "*", "*", "*       *");
