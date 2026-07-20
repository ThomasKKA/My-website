// script.js


const questions = [
    {
        question: "Who was the first Pope of the Catholic Church?",
        image: "Images/4c1e57a5ea983cd90559f4d30acbdde9-st peter pope.jpg",
        options: ["St. Paul", "St. Peter", "St. John", "St. Augustine"],
        answer: "St. Peter"
    },
    {
        question: "How many Sacraments are there in the Catholic Church?",
        image: "Images/sacraments_of_the_catholic_church.png",
        options: ["5", "7", "10", "12"],
        answer: "7"
    },
    {
        question: "Which book is the first book of the Bible?",
        image: "Images/bible-king-james-version-authorized-kjv-1611-best-bible-for-kobo.jpg",
        options: ["Exodus", "Genesis", "Matthew", "Psalms"],
        answer: "Genesis"
    },
    {
        question: "What is the Eucharist?",
        image: "Images/illustration-of-the-seven-catholic-sacraments-e1726836985787.png",
        options: [
            "A prayer book",
            "The Body and Blood of Christ",
            "A church building",
            "A Bible verse"
        ],
        answer: "The Body and Blood of Christ"
    },
    {
        question: "Who is the mother of Jesus?",
        image: "Images/images.jpg",
        options: ["Elizabeth", "Martha", "Mary", "Ruth"],
        answer: "Mary"
    },
    {
        question: " In the stations of the cross, how many times did Jesus fall?",
        image: "Images/StationsOfTheCross_04_Main-640w.jpg",
        options: ["4", "1", "3", "6"],
        answer: "3"
    }
];

let currentQuestion = 0;
let score = 0;

// background start game
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quizContainer");
const startImage = document.getElementById("Start-Image");
const text = document.getElementById("Background-Text");
const reStartbtn = document.getElementById("ReStart-Button");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const img = document.getElementById("question-image");


/*sounds Effect*/
const correctSound = new Audio("Sounds/freesound_community-correct-choice-43861.mp3");
const wrongSound = new Audio("Sounds/gta-ctw-wrong-buzzer-sound.mp3");
const congrats = new Audio("Sounds/correcto_Xgyp04B.mp3");
const backgroundMusic = new Audio("Sounds/hauntsync-habemus-papam-catholic-pipe-organ-tribute-339173.mp3");
backgroundMusic.volume = 0.2; // 20% volume
const startGame = new Audio("Sounds/Video Project.mp3");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;


    img.src = q.image;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", selectOption);
        optionsEl.appendChild(button);

    });
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));

        [questions[i], questions[random]] = [questions[random], questions[i]];
    }
}

function selectOption(e) {
    const selected = e.target.textContent;
    const correct = questions[currentQuestion].answer;

    if (selected === correct) {
        score++;
        e.target.style.backgroundColor = "green";
        correctSound.play();
    } else {
        e.target.style.backgroundColor = "red";
        wrongSound.play();

        // show correct answer
        Array.from(optionsEl.children).forEach(btn => {
            if (btn.textContent === correct) btn.style.backgroundColor = "green";
        });
    }

    // disable all buttons after selecting
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}





nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
      
    } else {
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = "";
        scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
        let result = score / questions.length;
        //pause the music 
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; 
        if (result >= 0.5) {
          
            congrats.play();
        }
       


        nextBtn.style.display = "none";
        reStartbtn.style.display = "block";
        text.style.display = "none";  
    }
});
console.log(startBtn);
startBtn.addEventListener("click", () => {
    startGame.play();
    backgroundMusic.play();
    backgroundMusic.loop = true;
    startBtn.style.display = "none";
     text.style.display = "none"; 
    startImage.style.display = "none";
    quizContainer.style.display = "block";
    shuffleQuestions();
    loadQuestion();

});



reStartbtn.addEventListener("click", () => {

    // Reset quiz
    currentQuestion = 0;
    score = 0;

    // Hide quiz
    quizContainer.style.display = "none";

   

    // Show start screen
    startBtn.style.display = "block";
    text.style.display = "block";   
    startImage.style.display = "block";
    // Hide restart button
    reStartbtn.style.display = "none";

    // Reset score
    scoreEl.textContent = "";

    // Show next button again for next game
    nextBtn.style.display = "block";

});
/*loadQuestion();*/