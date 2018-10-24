const assert = require("assert");
const patternLib = require("../src/pattern_lib.js");
const {generateRectangle} = patternLib;
const {generateTriangle} = patternLib;
const {createDiamond} = patternLib;

//-------------------------------- Test cases for rectangle pattern -------------------------//

const testRectangle = function(width, height, type, expectedOutput){
  assert.equal(generateRectangle(width, height , type), expectedOutput);
}

//----------------------------- Filled Rectangle ------------------------------//
{
  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle(20, 7, "filled", expectedOutput_20_7);

  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle(5, 5, "filled", expectedOutput_5_5);

  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "**";

  testRectangle(2, 2, "filled", expectedOutput_2_2);

  let expectedOutput_2_3 = "**\n";
  expectedOutput_2_3 +=    "**\n";
  expectedOutput_2_3 +=    "**";

  testRectangle(2, 3, "filled", expectedOutput_2_3);
}

//----------------------------- Hollow Rectangle ------------------------------//
{
  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*   *\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle(5, 5, "hollow", expectedOutput_5_5);

  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "*                  *\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle(20, 7, "hollow", expectedOutput_20_7);
  
  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "**";

  testRectangle(2, 2, "hollow", expectedOutput_2_2);
}

//----------------------------- Alternating line Rectangle ------------------------------//
{
  let expectedOutput_2_2 =  "**\n";
  expectedOutput_2_2 +=     "--";

  testRectangle(2, 2, "alternating", expectedOutput_2_2);

  let expectedOutput_5_5 = "*****\n";
  expectedOutput_5_5 +=    "-----\n";
  expectedOutput_5_5 +=    "*****\n";
  expectedOutput_5_5 +=    "-----\n";
  expectedOutput_5_5 +=    "*****";

  testRectangle(5, 5, "alternating", expectedOutput_5_5);

  let expectedOutput_20_7 = "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************\n";
  expectedOutput_20_7 +=    "--------------------\n";
  expectedOutput_20_7 +=    "********************";

  testRectangle(20, 7, "alternating", expectedOutput_20_7);

  let expectedOutput_3_3 =  "***\n";
  expectedOutput_3_3 +=     "---\n";
  expectedOutput_3_3 +=     "***";

  testRectangle(3, 3, "alternating", expectedOutput_3_3);
}

//-------------------------------- Test cases for rectangle pattern -------------------------//

const testDiamond = function (height, type, expectedOutput){
  assert.equal(createDiamond(height, type), expectedOutput);
}

//----------------------------- Filled Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " *** \n";
  expectedOutput_5 +=    "*****\n";
  expectedOutput_5 +=    " *** \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond(5, "filled", expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "***\n";
  expectedOutput_3 +=    " * ";

  testDiamond(3, "filled", expectedOutput_3);
  
  let expectedOutput_4 = " * \n";
  expectedOutput_4 +=    "***\n";
  expectedOutput_4 +=    " * ";

  testDiamond(4, "filled", expectedOutput_4);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  ***  \n";
  expectedOutput_7 +=    " ***** \n";
  expectedOutput_7 +=    "*******\n";
  expectedOutput_7 +=    " ***** \n";
  expectedOutput_7 +=    "  ***  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond(7, "filled", expectedOutput_7);
}

//----------------------------- Hollow Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " * * \n";
  expectedOutput_5 +=    "*   *\n";
  expectedOutput_5 +=    " * * \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond(5, "hollow", expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "* *\n";
  expectedOutput_3 +=    " * ";

  testDiamond(3, "hollow", expectedOutput_3);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  * *  \n";
  expectedOutput_7 +=    " *   * \n";
  expectedOutput_7 +=    "*     *\n";
  expectedOutput_7 +=    " *   * \n";
  expectedOutput_7 +=    "  * *  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond(7, "hollow", expectedOutput_7);
}

//----------------------------- Angled Diamond ------------------------------//
{
  let expectedOutput_5 = "  *  \n";
  expectedOutput_5 +=    " / \\ \n";
  expectedOutput_5 +=    "*   *\n";
  expectedOutput_5 +=    " \\ / \n";
  expectedOutput_5 +=    "  *  ";

  testDiamond(5, "angled", expectedOutput_5);

  let expectedOutput_3 = " * \n";
  expectedOutput_3 +=    "* *\n";
  expectedOutput_3 +=    " * ";

  testDiamond(3, "angled", expectedOutput_3);

  let expectedOutput_7 = "   *   \n";
  expectedOutput_7 +=    "  / \\  \n";
  expectedOutput_7 +=    " /   \\ \n";
  expectedOutput_7 +=    "*     *\n";
  expectedOutput_7 +=    " \\   / \n";
  expectedOutput_7 +=    "  \\ /  \n";
  expectedOutput_7 +=    "   *   ";

  testDiamond(7, "angled", expectedOutput_7);
}

//-------------------------------- Test cases for triangle pattern -------------------------//

const testTriangle = function(height, type, expectedOutput){
  assert.equal(generateTriangle(height, type, "*"), expectedOutput);
}

//----------------------------- Left Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = "*\n";
  expectedOutput_3 +=    "**\n";
  expectedOutput_3 +=    "***";

  testTriangle(3, "left", expectedOutput_3);

  let expectedOutput_4 = "*\n";
  expectedOutput_4 +=    "**\n";
  expectedOutput_4 +=    "***\n";
  expectedOutput_4 +=    "****";

  testTriangle(4, "left", expectedOutput_4);

  let expectedOutput_5 = "*\n";
  expectedOutput_5 +=    "**\n";
  expectedOutput_5 +=    "***\n";
  expectedOutput_5 +=    "****\n";
  expectedOutput_5 +=    "*****";

  testTriangle(5, "left", expectedOutput_5);

  let expectedOutput_6 = "*\n";
  expectedOutput_6 +=    "**\n";
  expectedOutput_6 +=    "***\n";
  expectedOutput_6 +=    "****\n";
  expectedOutput_6 +=    "*****\n";
  expectedOutput_6 +=    "******";

  testTriangle(6, "left", expectedOutput_6);
}

//----------------------------- Right Triangle Pattern ------------------------------//
{
  let expectedOutput_3 = "  *\n";
  expectedOutput_3 +=    " **\n";
  expectedOutput_3 +=    "***";

  testTriangle(3, "right", expectedOutput_3);

  let expectedOutput_4 = "   *\n";
  expectedOutput_4 +=    "  **\n";
  expectedOutput_4 +=    " ***\n";
  expectedOutput_4 +=    "****";

  testTriangle(4, "right", expectedOutput_4);

  let expectedOutput_5 = "    *\n";
  expectedOutput_5 +=    "   **\n";
  expectedOutput_5 +=    "  ***\n";
  expectedOutput_5 +=    " ****\n";
  expectedOutput_5 +=    "*****";

  testTriangle(5, "right", expectedOutput_5);

  let expectedOutput_6 = "     *\n";
  expectedOutput_6 +=    "    **\n";
  expectedOutput_6 +=    "   ***\n";
  expectedOutput_6 +=    "  ****\n";
  expectedOutput_6 +=    " *****\n";
  expectedOutput_6 +=    "******";

  testTriangle(6, "right", expectedOutput_6);
}
