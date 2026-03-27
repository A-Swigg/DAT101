"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  printOut(formatted);
}
printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function daysUntilRelease(releaseDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const utcRelease = Date.UTC(releaseDate.getFullYear(), releaseDate.getMonth(), releaseDate.getDate());
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const diffMs = utcRelease - utcToday;
  return Math.floor(diffMs / oneDay);
}
function announceReleaseCountdown() {
  const today = printTodaysDate();
  const releaseDate = new Date(2025, 4, 14); 
  const daysLeft = daysUntilRelease(releaseDate);
  const releaseFormatted = releaseDate.toLocaleDateString("no-NB", { year: "numeric", month: "long", day: "numeric" });
  if (daysLeft > 1) {
    printOut(`Det er ${daysLeft} dager igjen til 2XKO lanseres (${releaseFormatted}). Gjør deg klar for kamp!`);
  } else if (daysLeft === 1) {
    printOut(`Det er 1 dag igjen til 2XKO lanseres (${releaseFormatted}).`);
  } else if (daysLeft === 0) {
    printOut(`I dag er lanseringsdagen for 2XKO! Håper alle nerdene koser seg med league of legends B)`);
  } else {
    printOut(`2XKO ble lansert for ${Math.abs(daysLeft)} dager siden (${releaseFormatted}). Håper du koser deg med spillet!✝️🤯👽🧐`);
  }
}
announceReleaseCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleMetrics(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  printOut(`Sirkel med radius ${radius}:`);
  printOut(`Diameter: ${diameter}`);
  printOut(`Omkrets: ${circumference.toFixed(2)}`);
  printOut(`Areal: ${area.toFixed(2)}`);
}
printCircleMetrics(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`Create a function that receives the width and height of a rectangle in an object.<br>Print the circumference and area of the given rectangle.`);
function Part4CalculateRectangle(aRectangle) {
  const circumference = 2 * (aRectangle.width + aRectangle.height);
  const area = aRectangle.width * aRectangle.height;
  printOut(`For a rectangle with width ${aRectangle.width} and height ${aRectangle.height}:`);
  printOut(`
    <ul>
      <li>Circumference: ${circumference.toFixed(2)}</li>
      <li>Area: ${area.toFixed(2)}</li>
    </ul>
  `);
}
Part4CalculateRectangle({ width: 4, height: 7 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. <br>
Use three different numbers and print all three combinations as integers (no decimals). <br>
Design the function to take two parameters: first the temperature, then the temperature type/id. <br>
Use these parameters to convert to the other two temperature types and print them. Formula:<br>
<ul>
<li>Fahrenheit = (Kelvin − 273.15) × 9/5 + 32</li>
<li>Celsius = Kelvin − 273.15</li>
<li>Celsius = (Fahrenheit − 32) × 5/9</li>
</ul>
  `)
const ETempType = {
  Kelvin: 1,
  Celsius: 2,
  Fahrenheit: 3,
}

function Part5ConvertTemp(aTemp, aTempType){
  let kelvin = 0, celsius = 0, fahrenheit = 0;
  let tempTypeName = "";

  switch(aTempType){
    case ETempType.Kelvin:
      kelvin = aTemp;
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
      tempTypeName = "Kelvin";
    break;
    case ETempType.Celsius:
      celsius = aTemp;
      kelvin = celsius + 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      tempTypeName = "Celsius";
    break;
    case ETempType.Fahrenheit:
      fahrenheit = aTemp;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
      tempTypeName = "Fahrenheit";
    break;
  }
  printOut(`Convert from ${aTemp} ${tempTypeName}:`);
  printOut(`&nbsp;Kelvin: ${Math.round(kelvin)}`);
  printOut(`&nbsp;Celsius: ${celsius.toFixed(0)}`);
  printOut(`&nbsp;Fahrenheit: ${fahrenheit.toFixed(0)}`);
  printOut("");
}

Part5ConvertTemp(300, ETempType.Kelvin);
Part5ConvertTemp(26.85, ETempType.Celsius);
Part5ConvertTemp(80.33, ETempType.Fahrenheit);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut(`
Create a function that calculates the price without VAT (sales tax).<br>
The function needs two arguments,<br>
one for the price including VAT (gross amount) and one for the tax group in text:<br>
<ul>
<li>normal = 25%</li>
<li>food = 15%</li>
<li>hotel, transport, and cinema = 10%</li>
</ul>
The text argument should not be case-sensitive.<br>
If  the VAT group is not correct, the text "Unknown VAT group!" should be printed.<br>
The function must return the price without tax, i.e., the net price.<br>
Call the function four times with different gross amounts.<br>
One for each of the VAT groups (25, 15, and 10) and one with an unknown group for example "goblins".<br>
Tip: Use "NaN" to identify that an unknown VAT group is returned from the function.<br>
<strong>Formula: net = (100 * gross) / (vat + 100).</strong>
<br>
`);
function Part6Calculate(aGrossAmount, aTaxGroup) {
  const taxGroup = aTaxGroup.toLowerCase();
  let taxRate = 0;
  switch (taxGroup) {
    case "normal":
      taxRate = 25;
      break;
    case "food":
      taxRate = 15;
      break;
    case "hotel":
    case "transport":
    case "cinema":
      taxRate = 10;
      break;
    default:
      printOut("Error: Unknown tax group!");
      return;
  }
  const netAmount = (100 * aGrossAmount) / (taxRate + 100);
  printOut(`Gross amount: ${aGrossAmount.toFixed(2)}`);
  printOut(`Tax group: ${aTaxGroup}, Tax rate: ${taxRate}%`);
  printOut(`Net amount: ${netAmount.toFixed(2)}`);
  printOut("");
}

Part6Calculate(100, "Normal");
Part6Calculate(100, "Food");
Part6Calculate(100, "Hotel");
Part6Calculate(100, "Transport");
Part6Calculate(100, "Cinema");
Part6Calculate(100, "Car");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Create a function that takes 3 arguments and returns the following calculation:<br>
<strong>Speed = Distance / Time</strong><br>
If speed is missing, calculate speed.<br>
If time is missing, calculate time.<br>
If distance is missing, calculate the distance.<br>
If more than one parameter is missing, return NaN.
`);
function Part7CalculateSpeedDistanceTime(aDistance, aTime, aSpeed) {
  if (aSpeed === null) {
    // Calculate speed
    if( !aTime || aTime === 0 || !aDistance ) {
      printOut("Error: Time or Distance cannot be zero or null when calculating speed!");
      return NaN;
    }
    aSpeed = aDistance / aTime;
    printOut(`Calculated Speed: ${aSpeed.toFixed(2)} units/time`);
    return aSpeed;
  } else if (aTime === null) {
    // Calculate time
    if( !aSpeed || aSpeed === 0 || !aDistance ) {
      printOut("Error: Speed or Distance cannot be zero or null when calculating time!");
      return NaN;
    }
    aTime = aDistance / aSpeed;
    printOut(`Calculated Time: ${aTime.toFixed(2)} time units`);
    return aTime;
  } else if (aDistance === null) {
    // Calculate distance
    if( !aSpeed || !aTime) {
      printOut("Error: Speed or Time cannot be null when calculating distance!");
      return NaN;
    }
    aDistance = aSpeed * aTime;
    printOut(`Calculated Distance: ${aDistance.toFixed(2)} units`);
    return aDistance;
  }
}
Part7CalculateSpeedDistanceTime(100, 2, null); // Calculate speed
Part7CalculateSpeedDistanceTime(100, null, 50); // Calculate time
Part7CalculateSpeedDistanceTime(null, 2, 50); // Calculate distance
Part7CalculateSpeedDistanceTime(null, null, 50); // Error case
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Create a function that takes four parameters and returns a result.<br>
Parameter one: A text string. Parameter two: Value for the maximum size of the text string.<br>
Parameter three: Text character. Parameter four: Consecutive insertion of characters (boolean value).<br>
Take the text parameter; if it's smaller than the maximum, make it larger with the specified character, either before or after, using the given boolean value.<br>
Have the function return the new string and print it out.`);
printOut(newLine);
function Part8AdjustString(aText, aMaxSize, aChar, aInsertAtEnd) {
  let adjustedText = aText;
  let length = aText.length;
  while (length < aMaxSize) {
    if (aInsertAtEnd) {
      adjustedText += aChar;
    } else {
      adjustedText = aChar + adjustedText;
    }
    length++;
  }
  printOut(`Adjusted String: "${adjustedText}"`);
  return adjustedText;
}
Part8AdjustString("Hello", 30, "*", true); // Insert at end
Part8AdjustString("World", 25, "#", false); // Insert at beginning
Part8AdjustString("This is a right aligned text.", 50, "&nbsp;", false); // Right align with spaces
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
From mathematics, we have the following expression:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 +  2 =  3<br>             
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 +  5 +  6 =  7 +  8<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9 + 10 + 11 + 12 = 13 + 14 + 15<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24<br>
&nbsp;25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35<br>
Create a function or functions that can test this expression for 200 lines.<br>
If the test fails, print out where the two sides are not equal and stop the loop.<br>
If all 200 lines are OK, print "Maths fun!".
`);
printOut(newLine);
function Part9TestMathExpression(aLines) {
  let currentNumber = 1;
  for (let line = 1; line <= aLines; line++) {
    let leftSum = 0;
    let rightSum = 0;
    // Calculate left side, one more number than right side
    for (let i = 0; i < line + 1; i++) {
      leftSum += currentNumber++;
    }
    // Calculate right side
    for (let i = 0; i < line; i++) {
      rightSum += currentNumber++;
    }
    if (leftSum !== rightSum) {
      printOut(`Test failed at line ${line}: Left sum (${leftSum}) != Right sum (${rightSum})`);
      return;
    }
  }
  printOut("Maths fun!");
}

Part9TestMathExpression(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(`
Recursive function. Create a function that calculates the factorial of a given number.<br>
Factorial of 5 = 5 * 4 * 3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.<br>
Have the function call itself to calculate the result and print the final answer.<br>
Print the result of each intermediate multiplication step as well.
<br>
`);
let Part10IntermediateSteps = "";
let Part10Step = 0;
function Part10Factorial(aNumber) {
  if (aNumber <= 1) {
    return 1;
  } else {
    const result = aNumber * Part10Factorial(aNumber - 1);
    Part10Step++;
    Part10IntermediateSteps += `Step ${Part10Step}: ${aNumber} * Factorial(${aNumber - 1}) = ${result}<br>`;
    return result;
  }
}
const numberForFactorial = 5;
const factorialResult = Part10Factorial(numberForFactorial);
printOut(`Factorial of ${numberForFactorial} is ${factorialResult}`);
printOut("Intermediate Steps:<br>" + Part10IntermediateSteps);
printOut(newLine);
