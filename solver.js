"use strict";
//These inital values are set outside of the loop function so that they don't get reset when the loop runs again
var counter = 1;
var startingNum = "";
var intervalNum = "";
var instructions = document.getElementById("instructions"); //short hand for this command
var opOutput = document.getElementById("opOutput");
var startingNum = "";
var intervalNum = "";
var intervalCount = "";
var operator;
console.log("Arithmetic Sequence calculator for user given data"); // Adds context to the console

initInstructions();
function initInstructions() {
    instructions.innerHTML = "Enter the requested numbers, then click the operator to use";
}

function dataCollect() {
    startingNum = parseFloat(document.getElementById("startingNum").value);
    intervalNum = parseFloat(document.getElementById("intervalNum").value);
    intervalCount = parseFloat((document.getElementById("intervalCount").value) - 1);
    console.log("startingNum: " + startingNum); //Debug line for startingNum var
    console.log("intervalNum: " + intervalNum); //Debug line for intervalNum var
    console.log("intervalCount: " + intervalCount); //Debug line for intervalCount var
    solveLoop();
}

function opEval(number) {
    operator = number;
    //if/elseIf statements to determine which operator should be used
    if (operator === 4) {
        opOutput.innerHTML = " / ";
        // opString = "/";
        // solveLoop();
    }
    else if (operator === 3) {
        opOutput.innerHTML = " X ";
        // opString = "*";
        // solveLoop();
    }
    else if (operator === 2) {
        opOutput.innerHTML = " - ";
        // opString = "-";
        // solveLoop();
    }
    else if (operator === 1) {
        opOutput.innerHTML = " + ";
        // opString = "+";
        // solveLoop();
    }
}

function solveLoop() {
    //Only increases the answer if the math has been run less than/equal to 13 times
    if (counter <= intervalCount) {
        if (operator === 1) {
            var solve = startingNum + intervalNum;
        }
        else if (operator === 2) {
            var solve = startingNum - intervalNum;
        }
        else if (operator === 3) {
            var solve = startingNum * intervalNum;
        }
        else if (operator === 4) {
            var solve = startingNum / intervalNum;
        }

        counter = counter + 1;
        startingNum = solve;
        console.log("counter" + counter);
        console.log("num" + startingNum);
        console.log("solve" + solve);
        solveLoop();

    }
    //If the counter is at the number allowed in intervalCount or above it takes the last recorded startingNum value and puts it to a new var
    else if (counter > intervalCount) {
        var finalAns = startingNum; //New var to hold the last recorded data of the temp var
        document.getElementById("answerOutput").innerHTML = finalAns;
        counter = 1;
        console.log("The answer to this problem is: " + finalAns); //Outputs the final answer for the user to see
    }
}






















// solveLoop(); //Runs the function below, this only triggers once
// function solveLoop(){
//     //Only increases the answer if the math has been run less than/equal to 13 times
//     if(counter <= 12){
//         var solve = temp + 1; // raises the value of temp by 1
//         counter = counter + 1; //This is where the global var counter is raised by one so that the loop will finish when it exceeds the criteria
//         temp = solve; //Changes the value of the global var temp to be the value of the var + 1 as calculated with the num var
//         // console.log("temp: " + temp); //Debug line for temp answer var
//         // console.log("counter: " + counter); //Debug line for counter var
//         solveLoop(); //repeats the above code in the if statement with the new counter and temp vars recorded
//     }
//     //If the counter is at 13 or above it takes the last recorded temp value and puts it to a new var which is displayed in a console
//     else{
//         var finalAns = temp; //New var to hold the last recorded data of the temp var
//         console.log("The answer to this problem is: " + finalAns); //Outputs the final answer for the user to see
//     }
// }