const quizDB = [
    {
        question: "Q1: By which Javascript code is used?",
        a: "classes",
        b: "RMI",
        c: "Events",
        d: "Functions",
        ans: "ans4"
    },
    {
        question: "Q2: Which is not valid datatype in Js?",
        a: "float",
        b: "Number",
        c: "Underdefined",
        d: "Boolean",
        ans: "ans1"
    },
    {
        question: "Q3: javascript is an___language?",
        a: "Object-Based",
        b: "Procedural",
        c: "Object-Oriented",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q4: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Markup Language",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
   
loadQuestion();

const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
        answer = curAnsElem.id;
     }
    })
    return answer;
};
 

    const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked = false );
    }


submit.addEventListener('click', () => {
    const checkedAnswer = getcheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
       showScore.innerHTML = `
         <h3>You scored ${score}/${quizDB.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
         `;

         showScore.classList.remove('scoreArea');
    }
});
