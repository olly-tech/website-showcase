function finishFunction() {
    alert("Congratulations, you finished the quiz!");
}

function checkAnswers() {
    let score = 0;
    quiz = document.forms.Quiz.elements;
    answer1 = quiz.bear.value;
    if (answer1 == "black") {
        score++;
    }
    answer2 = quiz.beets.value;
    if (answer2 == "battlestar") {
        score++;
    }
    answer3 = quiz.ducks.value;
    if (answer3 == 20) {
        score++;
    }
    alert(`Well done! Your score was ${score}`);
}

function woo() {
    const sound1 = document.getElementById('gnomeWoo1');
    const sound2 = document.getElementById('gnomeWoo2');
    const sound3 = document.getElementById('gnomeWoo3');

    let gnomeNumber = Math.floor(Math.random() * 3) + 1;

    if (gnomeNumber == 1) {
        sound1.play();
        let gnomeNumber = Math.floor(Math.random() * 3) + 1;
    }
    else if (gnomeNumber == 2) {
        sound2.play();
        let gnomeNumber = Math.floor(Math.random() * 3) + 1;
    }
    else if (gnomeNumber == 3) {
        sound3.play();
        let gnomeNumber = Math.floor(Math.random() * 3) + 1;
    }
}