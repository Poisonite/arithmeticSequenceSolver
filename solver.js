//These inital values are set outside of the loop function so that they don't get reset when the loop runs again
var counter = 1;
var temp = 4;
console.log("Arithmetic Sequence calculator for the number 4 if 1 is added to it 13 times"); // Adds context to the console

loop(); //Runs the function below, this only triggers once
function loop(){
    //Only increases the answer if the math has been run less than/equal to 13 times
    if(counter <= 12){
        var solve = temp + 1; // raises the value of temp by 1
        counter = counter + 1; //This is where the global var counter is raised by one so that the loop will finish when it exceeds the criteria
        temp = solve; //Changes the value of the global var temp to be the value of the var + 1 as calculated with the num var
        // console.log("temp: " + temp); //Debug line for temp answer var
        // console.log("counter: " + counter); //Debug line for counter var
        loop(); //repeats the above code in the if statement with the new counter and temp vars recorded
    }
    //If the counter is at 13 or above it takes the last recorded temp value and puts it to a new var which is displayed in a console
    else{
        var finalAns = temp; //New var to hold the last recorded data of the temp var
        console.log("The answer to this problem is: " + finalAns); //Outputs the final answer for the user to see
    }
}