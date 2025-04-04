

//define scoring function
function checkAnswers(){
    // set the score, at 0
    let score = 0;
    let result = 0;

    //assign the quiz elements to the quiz variable
    let quiz = document.forms.quiz.elements;
    
    //assign the score for question 1 to the answer1 variable
    let answer1 = quiz.colour.value;

    //assign the score value
    if(answer1 === "orange"){
        score = score + 1;
    }
    else if (answer1 === "yellow") {
        score = score + 2;
    }
    else if (answer1 === "green") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the score for question 2 to the answer2 variable
    let answer2 = quiz.season.value;

    //assign the score value
    if(answer2 === "spring"){
        score = score + 1;
    }
    else if (answer2 === "summer") {
        score = score + 2;
    }
    else if (answer2 === "autumn") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the score for question 3 to the answer3 variable
    let answer3 = quiz.music.value;

    //assign the score value
    if(answer3 === "pop"){
        score = score + 1;
    }
    else if (answer3 === "rock") {
        score = score + 2;
    }
    else if (answer3 === "hip-hop") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //assign the score for question 4 to the answer4 variable
    let answer4 = quiz.animal.value;

    //assign the score value
    if(answer4 === "spring"){
        score = score + 1;
    }
    else if (answer4 === "summer") {
        score = score + 2;
    }
    else if (answer4 === "autumn") {
        score = score + 3;
    }
    else {
        score = score + 4;
    }

    //determine result from score
    if (score < 6){
        result = "Tomato"
    }

    else if (score < 10){
        result = "Pumpkin"
    }

    else if (score <= 13){
        result = "Onion"
    }

    else {
        result = "Aubergine"
    }

// Wait for 3 seconds (3000 milliseconds) before redirecting
setTimeout(() => {
    // Redirect to a new page based on the result
    if (result === "Tomato") {
        window.location.href = "tomato.html";
    } else if (result === "Pumpkin") {
        window.location.href = "pumpkin.html";
    } else if (result === "Onion") {
        window.location.href = "onion.html";
    } else if (result === "Aubergine") {
        window.location.href = "aubergine.html";
    }
}, 1500);

}
