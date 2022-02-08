
  
'use strict';

function checkValidAnswers(myAnswers) {
    for(let i=0; i<myAnswers.length; i++) {
        if((myAnswers[i] != "yes")&&(myAnswers[i] != "no")) { 
            myAnswers[i] = "invalid"; 
        }
    }
    return myAnswers;
}
//Ask the user to enter his/her name as input.
var name = prompt("Please enter your name: ");

//Ask the user to enter his/her gender as input. The answer should be either (male or female).
var gender = prompt("Please enter your gender (male or female): ");



while((gender != "male")&&(gender != "female")&&(gender != "")) {                       
    alert("You have to select one of them (male/female) or leave the field empty!");    
    gender = prompt("Please enter your gender (male or female): ");                     
}                                                                                       

//determine how to call the user
var state;
if (gender == "male") { state = "Mr. "; } 
else if (gender == "female") { state = "Ms. "; } 
else {
    state = "";
    alert("Please make sure you have selected your gender!");
}

//Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
var age = prompt("Enter your age remeber to write it as integer: ");
while (age <= 0) {
    alert("you have to enter a positive integer number !");
    var age = prompt("Please enter your age (must be positive integer): ");
}



//Ask the user to confirm if he wants to skip the welcoming message
var confirmation = confirm("Do you want to skip welcoming message ?");



// Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms
//  if the user is female, and if the gender input is not correct alert the welcoming message without
//   the title,according to the confirmation.
if (confirmation) { alert("Welcoming message has been skipped !") } 
else { alert(`welcome ${state + name},`) }

//////////// Three questions Task06
let questions = ["Do you have a job ?", "Where do you live ?", "What is your favorite dish?"];
let answers = [];
for(let j=1; j<=3; j++) {
    answers.push(prompt(`Question number(${j}): ${questions[j-1]} ?`));
}

let validAnswers = checkValidAnswers(answers);
console.log(validAnswers);

alert("Done!!!!! BRAVO!!!!!!");



function setColor(btn, color) {
    var count = 1;
    var property = document.getElementById(btn);
    if (count == 0) {
      property.style.backgroundColor = "#FFFFFF";
      count = 1;
    } else {
      property.style.backgroundColor = "#7FFF00";
      count = 0;
    }
  }


