let currentQuestion = 0;
let score = 0;
let questions = [
    {
        "question": "La Terre est plate.",
        "options": ["Vrai", "Faux"],
        "answer": "Faux"
    },
    {
        "question": "Qui a peint la Joconde ?",
        "options": ["Léonard de Vinci", "Pablo Picasso", "Vincent van Gogh"],
        "answer": "Léonard de Vinci"
    },
    {
        "question": "Quel est le plus grand océan du monde ?",
        "options": ["Océan Atlantique", "Océan Arctique", "Océan Indien", "Océan Pacifique"],
        "answer": "Océan Pacifique"
    },
    {
        "question": "Quel est le pays le plus peuplé au monde ?",
        "options": ["Inde", "Chine", "États-Unis", "Russie"],
        "answer": "Chine"
    },
    {
        "question": "Qui a écrit 'Le Petit Prince' ?",
        "options": ["J.K. Rowling", "Antoine de Saint-Exupéry", "Albert Camus", "Victor Hugo"],
        "answer": "Antoine de Saint-Exupéry"
    },
    {
        "question": "Quel est le plus grand désert du monde ?",
        "options": ["Désert du Sahara", "Désert du Kalahari", "Désert de Gobi", "Désert de l'Antarctique"],
        "answer": "Désert de l'Antarctique"
    },
    {
        "question": "Quelle est la capitale de l'Australie ?",
        "options": ["Melbourne", "Sydney", "Canberra", "Perth"],
        "answer": "Canberra"
    },
    {
        "question": "Qui a inventé la théorie de la relativité ?",
        "options": ["Isaac Newton", "Albert Einstein", "Galilée", "Stephen Hawking"],
        "answer": "Albert Einstein"
    },
    {
        "question": "Combien de continents y a-t-il dans le monde ?",
        "options": ["Cinq", "Six", "Sept", "Huit"],
        "answer": "Sept"
    },
    {
        "question": "Quel est l'animal terrestre le plus rapide ?",
        "options": ["Guepard", "Lion", "Leopard", "Tigre"],
        "answer": "Guepard"
    },
    {
        "question": "La lune est plus grande que la Terre.",
        "options": ["Vrai", "Faux"],
        "answer": "Faux"
    },
    {
        "question": "La Tour Eiffel se trouve à Londres.",
        "options": ["Vrai", "Faux"],
        "answer": "Faux"
    },
    {
        "question": "L'eau bout à 100 degrés Celsius.",
        "options": ["Vrai", "Faux"],
        "answer": "Vrai"
    },
    {
        "question": "Les éléphants peuvent sauter.",
        "options": ["Vrai", "Faux"],
        "answer": "Faux"
    },
    {
        "question": "La banane est un fruit.",
        "options": ["Vrai", "Faux"],
        "answer": "Vrai"
    },
    {
        "question": "Qui a inventé la gravité ?",
        "options": ["Isaac Newton", "Albert Einstein", "Galilée", "Stephen Hawking"],
        "answer": "Isaac Newton"
    },
    {
        "question": "Combien de côtés a un triangle ?",
        "options": ["Deux", "Trois", "Quatre", "Cinq"],
        "answer": "Trois"
    },
    {
        "question": "L'année a 365 jours.",
        "options": ["Vrai", "Faux"],
        "answer": "Vrai"
    },
    {
        "question": "Quel est le plus grand océan du monde ?",
        "options": ["Océan Atlantique", "Océan Arctique", "Océan Indien", "Océan Pacifique"],
        "answer": "Océan Pacifique"
    },
        {
        "question": "Combien de planètes dans le système solaire ?",
        "options": ["Six", "Sept", "Huit", "Neuf"],
        "answer": "Huit"
    }
];

function displayQuestion() {
    const container = document.querySelector(".container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const progressElement = document.getElementById("progress");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    container.style.opacity = "1";
    container.style.transform = "scale(1)";

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    feedbackElement.textContent = "";
    progressElement.textContent = `Question ${currentQuestion + 1} sur ${questions.length}`;
    
    if (currentQuestion === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Terminer";
    } else {
        nextButton.textContent = "Suivant";
    }
}
function checkAnswer(selectedOption) {
    const feedbackElement = document.getElementById("feedback");

    if (selectedOption === questions[currentQuestion].answer) {
        feedbackElement.textContent = "BRAVO Bonne réponse!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "Mauvaise réponse! changez de reponsse svp";
        feedbackElement.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        const container = document.querySelector(".container");
        container.style.opacity = "0";
        container.style.transform = "scale(0.8)";
        setTimeout(displayQuestion, 300);
    } else {
        endQuiz();
    }
}

function prevQuestion() {
    currentQuestion--;
    const container = document.querySelector(".container");
    container.style.opacity = "0";
    container.style.transform = "scale(0.8)";
    setTimeout(displayQuestion, 300);
}

function endQuiz() {
    const container = document.querySelector(".container");
    container.style.opacity = "0";
    container.style.transform = "scale(0.8)";
    setTimeout(() => {
        container.innerHTML = `<h2>Votre score est : ${score}/${questions.length}</h2>`;
        container.style.opacity = "1";
        container.style.transform = "scale(1)";
    }, 300);
}

displayQuestion();




