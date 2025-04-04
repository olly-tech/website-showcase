function checkAnswers() {
    let quiz = document.forms.quiz.elements;

    if (!quiz.colour.value || !quiz.animal.value || !quiz.music.value || !quiz.dress.value || !quiz.book.value) {
        alert("Please answer all questions before submitting!");
        return;
    }

    let score = 0;
    let result = "";

    let answer1 = quiz.colour.value;
    if (answer1 === "black") score += 0;
    else if (answer1 === "white") score += 1;
    else if (answer1 === "red") score += 2;
    else if (answer1 === "purple") score += 3;
    else score += 4;

    let answer2 = quiz.animal.value;
    if (answer2 === "spider") score += 0;
    else if (answer2 === "cat") score += 1;
    else if (answer2 === "wolf") score += 2;
    else if (answer2 === "bat") score += 3;
    else score += 4;

    let answer3 = quiz.music.value;
    if (answer3 === "gothic") score += 0;
    else if (answer3 === "pop") score += 1;
    else if (answer3 === "rock") score += 2;
    else if (answer3 === "metal") score += 3;
    else score += 4;

    let answer4 = quiz.dress.value;
    if (answer4 === "allblack") score += 0;
    else if (answer4 === "casual") score += 1;
    else if (answer4 === "edgy") score += 2;
    else if (answer4 === "flowy") score += 3;
    else score += 4;

    let answer5 = quiz.book.value;
    if (answer5 === "gothiclit") score += 0;
    else if (answer5 === "nonfic") score += 1;
    else if (answer5 === "horror") score += 2;
    else if (answer5 === "romance") score += 3;
    else score += 4;

    // Adjusted scoring ranges
    if (score < 6) {
        result = "Witchy Goth";
    } else if (score < 10) {
        result = "Casual/Lazy Goth";
    } else if (score < 14) {
        result = "Industrial Goth";
    } else if (score < 18) {
        result = "Romantic Goth";
    } else {
        result = "Trad Goth";
    }

    alert(`We think that you are a ${result}! :D`);
}
