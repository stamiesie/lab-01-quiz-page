
import { countsAsAYes } from './counts-as-a-yes.js'

const quizButton = document.getElementById("quiz-button");
const finalScore = document.getElementById("final-score");


quizButton.addEventListener('click', () => {
    alert("Welcome to the Ocicat quiz!");

    const confirmation = confirm("Do you want to proceed?");

    if (!confirmation) return;

    let rightAnswers = 0;

    const firstName = prompt("What is your first name?");
    const lastName = prompt("What is your last name?");

    const questionOne = prompt("Do Ocicats have spots");

    if (countsAsAYes(questionOne)) rightAnswers++;

    const questionTwo = prompt("Do Ocicats get along with other cats");

    if (countsAsAYes(questionTwo)) rightAnswers++;

    const questionThree = prompt("Can Ocicats fly?");

    if (!countsAsAYes(questionThree)) rightAnswers++;

    const quizResults = `Thanks for taking the quiz ${firstName} ${lastName}.  You scored ${rightAnswers} out of 3!`;

    finalScore.textContent = quizResults;

});