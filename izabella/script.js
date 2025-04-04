function checkAnswers(event) {
    event.preventDefault();
    let score = 0;
    let result = "";
    let imageUrl = "";

    let quiz = document.forms.quiz.elements;

    function getValue(name) {
        return quiz[name] ? quiz[name].value : null;
    }

    let answer1 = getValue("want");
    let answer2 = getValue("reason");
    let answer3 = getValue("tried_quit");
    let answer4 = getValue("think_about_quit");
    let answer5 = getValue("plan_quit");
    let answer6 = getValue("biggest_challenge");
    let answer7 = getValue("support");
    let answer8 = getValue("uncomfortable");

    if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6 || !answer7 || !answer8) {
        alert("Please answer all questions before submitting.");
        return;
    }

    if (answer1 === "1_3") {
        score += 1; 
    } else if (answer1 === "4_6") {
        score += 2;
    } else if (answer1 === "7_8") {
        score += 3;
    } else {
        score += 4;
    }

    if (answer2 === "health") {
        score += 4;
    } else if (answer2 === "family_friends") {
        score += 2;
    } else if (answer2 === "expensive") {
        score += 3;
    } else {
        score += 1;
    }

    if (answer3 === "never") {
        score += 1;
    } else if (answer3 === "once") {
        score += 2;
    } else if (answer3 === "multiple") {
        score += 3;
    } else {
        score += 4;
    }

    if (answer4 === "anxious") {
        score += 1;
    } else if (answer4 === "neutral") {
        score += 2;
    } else if (answer4 === "hopeful") {
        score += 3;
    } else {
        score += 4;
    }

    if (answer5 === "no_plan") {
        score += 1;
    } else if (answer5 === "no_action") {
        score += 2;
    } else if (answer5 === "plan_not_started") {
        score += 3;
    } else {
        score += 4;
    }

    if (answer6 === "withdrawal") {
        score += 1;
    } else if (answer6 === "stress_emotions") {
        score += 2;
    } else if (answer6 === "social_situation") {
        score += 4;
    } else {
        score += 3;
    }

    if (answer7 === "prefer_alone") {
        score += 1;
    } else if (answer7 === "not_tried") {
        score += 2;
    } else if (answer7 === "methods") {
        score += 3;
    } else {
        score += 4;
    }

    if (answer8 === "fine_with") {
        score += 1;
    } else if (answer8 === "sometimes") {
        score += 2;
    } else if (answer8 === "fell_judged") {
        score += 3;
    } else {
        score += 4;
    }

    if (score <= 10) {
        result = "You may not be ready to quit yet, but learning more about the benefits of quitting could help.";
        imageUrl = "https://www.workitdaily.com/media-library/image.jpg?id=19295670&width=980&quality=85";
    } else if (score <= 15) {
        result = "You’re thinking about quitting, but you might need more motivation and a solid plan.";
        imageUrl = "img/cig.jpg";
    } else if (score <= 20) {
        result = "You’re determined to quit and just need the right strategy and support.";
        imageUrl = "img/breaking.jpg";
    } else {
        result = "You’re fully committed and ready to take action—go for it!";
        imageUrl = "img/cigarret.jpg";
    }

    document.getElementById("result").innerText = `Your result: ${result}`;
    document.getElementById("resultImage").src = imageUrl;
    document.getElementById("resultImage").style.display = "block"; 
    document.getElementById("resultImage").classList.add("show");

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

document.getElementById("submitBtn").addEventListener("click", checkAnswers);
