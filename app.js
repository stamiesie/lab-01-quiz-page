// import functions and grab DOM elements
const quizButton = document.getElementById("quiz-button");
const hiddenDiv = document.getElementById("hidden-div");
// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    alert("Welcome to the Ocicat quiz!");

    const confirmation = confirm("Do you want to proceed?");

    if (!confirmation) return;

    let rightAnswers = 0;

    const firstName = prompt("What is your first name?");
    const lastName = prompt("What is your last name?");


    const questionOne = prompt("Do Ocicats have spots");




});