
function checkAnswers() {

    let score = 0;
    let result = 0;

    let quiz = document.forms.quiz.elements;

    let answer1 = quiz.job.value;
        if (answer1 === "medical") {
            score = score + 1;
        }
        else if (answer1 === "stem") {
            score = score + 2;
        }
        else if (answer1 === "arts") {
            score = score + 3;
        }
        else {
            score = score + 4;
        }

        let answer2 = quiz.breed.value;
        if (answer2 === "dachshund") {
            score = score + 1;
        }
        else if (answer2 === "husky") {
            score = score + 2;
        }
        else if (answer2 === "labrador") {
            score = score + 3;
        }
        else {
            score = score + 4;
        }

        let answer3 = quiz.hobby.value;
        if (answer3 === "fiction") {
            score = score + 1;
        }
        else if (answer3 === "handsy") {
            score = score + 2;
        }
        else if (answer3 === "exercise") {
            score = score + 3;
        }
        else {
            score = score + 4;
        }

        let answer4 = quiz.movie.value;
        if (answer4 === "hp") {
            score = score + 1;
        }
        else if (answer4 === "lotr") {
            score = score + 2;
        }
        else if (answer4 === "hobbit") {
            score = score + 3;
        }
        else {
            score = score + 4;
        }

        let answer5 = quiz.hogwarts.value;

        if (answer5 === "gryffindor") {
            score = score + 1;
        }
        else if (answer5 === "hufflepuff") {
            score = score + 2;
        }
        else if (answer5 === "ravenclaw") {
            score = score + 3;
        }
        else {
            score = score + 4;
        }

        // RESULT:
        if (score < 5) {
            result = "Animal Crossing";
        }
        else if (score < 8) {
            result = "Hogwarts Legacy";
        }
        else if (score <12) {
            result = "The Last of Us: Part II";
        }
        else {
            result = "Dark Souls";
        }

        alert(`The Game you should play next is ${result}`);
}