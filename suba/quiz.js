function checkAnswers(){
  
    // set the score to 0

    let score = 0;

    let result = 0;

    //assign the quiz element to the quiz variable

    let quiz = document.forms.quiz.elements;

    //assign the score for question1 to the answer1 variable

    let answer1 = quiz.play.value;

    // assign the score value

    if(answer1 === "da"){

        score = score + 1;
    }
   else if(answer1 === "sa"){
       score = score + 2;
   }
  else if(answer1 === "sd"){
    score = score + 3;

  }
  else {
     score = score + 4;
  }

  let answer2 = quiz.eye.value;

  // assign the score value

  if(answer2 === "da"){

      score = score + 1;
  }
 else if(answer2 === "sa"){
     score = score + 2;
 }
else if(answer2 === "sd"){
  score = score + 3;

}
else {
   score = score + 4;
}


let answer3 = quiz.emotion.value;

  // assign the score value

  if(answer3 === "da"){

      score = score + 1;
  }
 else if(answer3 === "sa"){
     score = score + 2;
 }
else if(answer3 === "sd"){
  score = score + 3;

}
else {
   score = score + 4;
}

let answer4 = quiz.hobby.value;

  // assign the score value

  if(answer4 === "da"){

      score = score + 1;
  }
 else if(answer4 === "sa"){
     score = score + 2;
 }
else if(answer4 === "sd"){
  score = score + 3;

}
else {
   score = score + 4;
}

let answer5 = quiz.pretend.value;

  // assign the score value

  if(answer4 === "da"){

      score = score + 1;
  }
 else if(answer4 === "sa"){
     score = score + 2;
 }
else if(answer4 === "sd"){
  score = score + 3;

}
else {
   score = score + 4;
}

 // determine result from score

 if(score <6 ){
    result = "Low likelihood of autism traits";
 }
 else if(score < 10){
    result = "Mild signs, monitoring suggested";
 }
 else if(score < 15){
    result = "Moderate signs, consider professional evaluation";
 }
 else{
    result = " High likelihood, professional assessment recommended";
 }
 //display the result as an alert

  alert(`The result is ${result}`);
}