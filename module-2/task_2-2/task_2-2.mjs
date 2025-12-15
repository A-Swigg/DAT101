"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1_1 = 2 + 3 * 2 - 4 * 6;
const part1_2 = 2 + 3 * (2 - 4) * 6;

printOut("dette er svaret uten parentes:");
printOut("2 + 3 * 2 - 4 * 6");
printOut(part1_1);
printOut("dette er svaret med parentes rundt 2 og 4:");
printOut("2 + 3 * 2 - 4 * 6");
printOut(part1_2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//1m  = 1000mm
//1cm = 10mm
//1inch =25.4
const meter = 25;
const cm = 34;
const meterconvert = meter * 1000;
const cmconvert = cm * 10;
const part2addition = meterconvert + cmconvert;
const inch = part2addition / 25.4;
const part2 = inch.toFixed(2);
printOut(part2);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Put your code below here!*/
//1 day  = 1440 min
//1 hour= 60 minutes
//1 seconds = 0.01666667 minutes
const day = 3;
const hour= 12;
const minutes= 14;
const seconds= 45; 
const dayconvert = day * 1440;
const hourconvert = hour * 60;
const secondconvert = seconds * 0.01666667;
const part3addition = dayconvert + hourconvert + secondconvert + minutes;
const part3 = part3addition.toFixed(2);
printOut(part3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//1 day  = 1440 min
//1 hour= 60 minutes
//1 seconds = 0.01666667 minutes
const minutterdel4 =  6322.52
const dayspart4 = Math.floor(minutterdel4 / 1440);
const minuttrester = minutterdel4 % 1440;
const timer = Math.floor(minuttrester / 60);
const minuttmodulus = Math.floor(minuttrester % 60);
const sekunder = Math.round((minuttrester % 1) * 60);  
 
printOut(`${minutterdel4} minutter er ${dayspart4} dager ${timer} timer ${minuttmodulus} minutter ${sekunder} sekunder`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dollar=54;
const nokRate= 76;
const usdRate= 8.6;

const usdPerNok = usdRate / nokRate;
const nokperUSD = nokRate / usdRate;

const noktousdwhole = Math.round(nokRate * usdPerNok);
const usdToNokWhole = Math.round(dollar * nokperUSD);

printOut(`${nokRate} NOK = ${noktousdwhole} USD`);
printOut(`${dollar} USD = ${usdToNokWhole} NOK`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p6string = "There is much between heaven and earth that we do not understand.";
const p6s1 = p6string.length;
const p6s2 = p6string.charAt(18);
const p6s3 = p6string.slice(34, 42);
const p6s4 = p6string.indexOf("earth");

printOut(p6s1);
printOut(p6s2);
printOut(p6s3);
printOut(p6s4);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (5 > 3)
    printOut("5 er større enn 3!");
else {
    printOut("5 er ikke større enn 3!");
}

if (7 == 7)
    printOut("7 is equal to 7");
else {
    printOut("7 is not equal to 7");
}

if ( "a" > "b")
    printOut("a er større enn b");
else {
    printOut("a er ikke større enn b");
}

if ("1"<"a")
    printOut("1 is less than a");
else {
    printOut("1 is not less than a");
}

if ("2500"<"abcd")
    printOut("");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const n1 = Number("254");
const n2 = Number("57.23");
const n3Parsed = parseInt("25 kroner", 10);

printOut(n1);
printOut(n2);
printOut(n3Parsed);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) + 1;
printOut(r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const daysLeft = totalDays % 7;
printOut(`${totalDays} dager er ${weeks} uker og ${daysLeft} dager`);

printOut(newLine);