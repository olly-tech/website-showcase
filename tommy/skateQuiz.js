

function submitButton () {

    let score = 0;
    let result = "";

    let quiz = document.forms.quiz.elements;
    const displayResult = document.getElementById('result');

    let answer1 = quiz.day.value;

    if (answer1 === "monday") {
        score = score + 1;
    }
    else if (answer1 === "tuesday") {
        score = score + 2;
    }
    else if (answer1 === "wedsnday") {
        score = score + 3;
    }
    else if (answer1 === "thursday") {
        score = score + 4;
    }
    else if (answer1 === "friday") {
        score = score + 5;
    }
    else if (answer1 === "saturday") {
        score = score + 6;
    }
    else if (answer1 === "sunday") {
        score = score + 9;;
    }
    

    console.log(score);

    let answer2 = quiz.cheese.value;

    if (answer2 === "brie") {
        score = score + 10;
    }
    else if (answer2 === "wensleydale") {
        score = score + 5;
    }
    else if (answer2 === "swiss") {
        score = score + 2;
    }
    else if (answer2 === "lactose-intolerant") {
        score = score + 12;
    }

    console.log(score);

    let answer3 = quiz.holiday.value;

    if (answer3 === "russia") {
        score = score + 1;
    }
    else if (answer3 === "siberia") {
        score = score + 7;
    }
    else if (answer3 === "  leningrad") {
        score = score + 5;
    }
    else if (answer3 === "smolensk") {
        score = score + 12;
    }
    else if (answer3 === "ussr") {
        score = score + 15;
    }

    console.log(score);

    let answer4 = quiz.bed.value;

    if (answer4 === "right") {
        score = score + 0;
    }
    else if (answer4 === "left") {
        score = score + 1;
    }

    console.log(score);

    console.log(score);
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);

    //dom manipulation for result

    if (score < 8) {
        result = "skate Lincoln Square";
    }
    else if (score < 16) {
        result = "skate Gooseside DIY before they tear it down and erect more office buildings and overpriced apartments";
    }
    else if (score < 20) {
        result = "skate projects (but try and sneak past the desk otherwise they try and make you pay)";
    }
    else {
        result = "skate Platfields, but make sure its day time";
    }

    displayResult.textContent = `You should ${result}`;
    console.log(result);
    displayResult.classList.remove('hidden');

}

