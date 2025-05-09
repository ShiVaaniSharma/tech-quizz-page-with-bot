// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Constants ---
    const MAX_QUESTIONS_PER_QUIZ = 12;

    // --- DOM Elements ---
    const quizSelectionSection = document.getElementById('quiz-selection-section');
    const quizListContainer = document.getElementById('quiz-list-container');

    const nameEntrySection = document.getElementById('name-entry-section');
    const selectedQuizTitleName = document.getElementById('selected-quiz-title-name');
    const playerNameInput = document.getElementById('player-name');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const backToSelectionBtn = document.getElementById('back-to-selection-btn');

    const quizAreaSection = document.getElementById('quiz-area-section');
    const quizTitlePlaying = document.getElementById('quiz-title-playing');
    const playerGreeting = document.getElementById('player-greeting');
    const displayPlayerName = document.getElementById('display-player-name');
    const progressBar = document.getElementById('progress-bar');
    const questionCounter = document.getElementById('question-counter');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const quitQuizBtn = document.getElementById('quit-quiz-btn');

    const resultsSection = document.getElementById('results-section');
    const resultsTitle = document.getElementById('results-title');
    const scoreDisplay = document.getElementById('score-display');
    const feedbackMessageEl = document.getElementById('feedback-message');
    const wrongAnswersContainer = document.getElementById('wrong-answers-container');
    const playAgainBtn = document.getElementById('play-again-btn');
    const chooseAnotherQuizBtn = document.getElementById('choose-another-quiz-btn');

    // --- State Variables ---
    let currentQuizData = null;
    let currentQuizId = null;
    let playerName = "";
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let questionsForCurrentSession = [];
    let selectedOptionButton = null;

    // --- Helper Functions ---
    function showSection(sectionElement) {
        document.querySelectorAll('main > section').forEach(sec => {
            sec.classList.remove('active-section');
            if (sec.classList.contains('overlay-section')) {
                sec.style.opacity = '0';
                sec.style.visibility = 'hidden';
            }
        });
        sectionElement.classList.add('active-section');
        if (sectionElement.classList.contains('overlay-section')) {
            sectionElement.style.opacity = '1';
            sectionElement.style.visibility = 'visible';
        }
    }

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // --- Initialization & Main Flow ---
    function initialize() {
        loadQuizSelectionScreen();
    }

    function loadQuizSelectionScreen() {
        quizListContainer.innerHTML = "";
        quizzes.forEach(quiz => {
            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.dataset.quizId = quiz.id; // Store quizId on the card itself

            // Create the "Click to Start" prompt
            const startPrompt = document.createElement('span');
            startPrompt.className = 'quiz-card-start-prompt';
            startPrompt.textContent = 'Click to Start';

            card.innerHTML = `
                <i class="${quiz.icon || 'fas fa-question-circle'}"></i>
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
            `; // Icon, title, description
            card.appendChild(startPrompt); // Add the "Click to Start" prompt

            card.addEventListener('click', () => promptForName(quiz.id)); // Event listener on the whole card
            quizListContainer.appendChild(card);
        });
        showSection(quizSelectionSection);
        playerNameInput.value = playerName; // Pre-fill name if already entered
    }

    function promptForName(quizId) {
        currentQuizId = quizId;
        currentQuizData = quizzes.find(q => q.id === quizId);
        if (!currentQuizData) {
            console.error("Quiz not found:", quizId);
            return;
        }
        selectedQuizTitleName.textContent = `Selected Quiz: ${currentQuizData.title}`;
        showSection(nameEntrySection);
        playerNameInput.focus();
    }

    startQuizBtn.addEventListener('click', () => {
        const enteredName = playerNameInput.value.trim();
        if (!enteredName) {
            alert("Please enter your name!");
            playerNameInput.focus();
            return;
        }
        playerName = enteredName;
        if (!currentQuizData) return;
        startGame();
    });

    backToSelectionBtn.addEventListener('click', () => {
        loadQuizSelectionScreen();
    });

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];

        const allQuestionsFromBank = currentQuizData.questions;
        if (!allQuestionsFromBank || allQuestionsFromBank.length === 0) {
            alert(`The '${currentQuizData.title}' quiz currently has no questions. Please add some or select another quiz.`);
            loadQuizSelectionScreen();
            return;
        }
        const shuffledBank = shuffleArray(allQuestionsFromBank);
        questionsForCurrentSession = shuffledBank.slice(0, MAX_QUESTIONS_PER_QUIZ);

        if (questionsForCurrentSession.length === 0) {
            alert(`Could not select questions for '${currentQuizData.title}'. Please check the question bank.`);
            loadQuizSelectionScreen();
            return;
        }

        quizTitlePlaying.textContent = currentQuizData.title;
        displayPlayerName.textContent = playerName;
        showSection(quizAreaSection);
        loadQuestion();
    }

    // --- loadQuestion, updateProgressBar, handleAnswerSelection, nextQuestionBtn listener, ---
    // --- quitQuizBtn listener, showResults, playAgainBtn listener, chooseAnotherQuizBtn listener ---
    // --- ARE ALL THE SAME as the previous version. No changes needed there. ---
    // --- For brevity, I am not pasting them again. Ensure you have them from the last good version. ---

    function loadQuestion() {
        selectedOptionButton = null;
        if (currentQuestionIndex < questionsForCurrentSession.length) {
            const question = questionsForCurrentSession[currentQuestionIndex];
            questionTextEl.textContent = question.questionText;
            optionsContainer.innerHTML = "";

            const shuffledOptions = shuffleArray([...question.options]);
            shuffledOptions.forEach(option => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option;
                button.addEventListener('click', () => handleAnswerSelection(button));
                optionsContainer.appendChild(button);
            });

            updateProgressBar();
            questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questionsForCurrentSession.length}`;
            nextQuestionBtn.textContent = "Next Question";
            nextQuestionBtn.style.display = "none";
        } else {
            showResults();
        }
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / questionsForCurrentSession.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function handleAnswerSelection(button) {
        if (selectedOptionButton) {
            selectedOptionButton.classList.remove('selected');
        }
        button.classList.add('selected');
        selectedOptionButton = button;

        nextQuestionBtn.style.display = "block";
        if (currentQuestionIndex === questionsForCurrentSession.length - 1) {
            nextQuestionBtn.textContent = "Show Results";
        }
    }

    nextQuestionBtn.addEventListener('click', () => {
        if (!selectedOptionButton) {
            alert("Please select an answer!");
            return;
        }

        const question = questionsForCurrentSession[currentQuestionIndex];
        const selectedText = selectedOptionButton.textContent;
        const isCorrect = selectedText === question.correctAnswer;

        if (isCorrect) {
            score++;
        }

        userAnswers.push({
            questionText: question.questionText,
            selectedAnswer: selectedText,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect
        });

        currentQuestionIndex++;
        loadQuestion();
    });

    quitQuizBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to quit? Your progress will be lost.")) {
            loadQuizSelectionScreen();
        }
    });

    function showResults() {
        progressBar.style.width = `100%`;
        resultsTitle.textContent = `Quiz Results for ${playerName}!`;
        scoreDisplay.textContent = `Your Score: ${score} / ${questionsForCurrentSession.length}`;

        let feedbackMessage = "";
        const percentage = questionsForCurrentSession.length > 0 ? (score / questionsForCurrentSession.length) * 100 : 0;

        if (questionsForCurrentSession.length === 0) {
            feedbackMessage = "No questions were presented in this quiz.";
            feedbackMessageEl.style.color = 'var(--text-color)';
        } else if (percentage === 100) {
            feedbackMessage = `🎉 Outstanding, ${playerName}! A perfect score! You're a true Tech Guru! 🌟`;
            feedbackMessageEl.style.color = 'var(--success-color)';
        } else if (percentage >= 75) {
            feedbackMessage = `👍 Excellent work, ${playerName}! Very impressive knowledge! ✨`;
            feedbackMessageEl.style.color = 'var(--success-color)';
        } else if (percentage >= 50) {
            feedbackMessage = `😃 Good job, ${playerName}! You're getting there. Keep learning! 📚`;
            feedbackMessageEl.style.color = 'var(--primary-color)';
        } else if (percentage > 0) {
            feedbackMessage = `🤔 Keep trying, ${playerName}! Every attempt is a step forward. Better luck next time! 💡`;
            feedbackMessageEl.style.color = 'var(--accent-color)';
        } else {
            feedbackMessage = `😕 Oh no, ${playerName}! It seems this was a tough one. Don't give up, review and try again! Better luck next time! 💪`;
            feedbackMessageEl.style.color = 'var(--error-color)';
        }
        feedbackMessageEl.innerHTML = feedbackMessage;

        wrongAnswersContainer.innerHTML = "";
        const wrong = userAnswers.filter(ans => !ans.isCorrect);
        if (wrong.length > 0) {
            wrong.forEach(ans => {
                const item = document.createElement('div');
                item.className = 'wrong-answer-item';
                item.innerHTML = `
                    <p><strong>Question:</strong> ${ans.questionText}</p>
                    <p><em style="color: var(--error-color);">Your Answer: ${ans.selectedAnswer}</em></p>
                    <p><strong style="color: var(--success-color);">Correct Answer: ${ans.correctAnswer}</strong></p>
                `;
                wrongAnswersContainer.appendChild(item);
            });
        } else if (questionsForCurrentSession.length > 0 && score === questionsForCurrentSession.length) {
            wrongAnswersContainer.innerHTML = "<p>Flawless Victory! You got all answers correct!</p>";
        } else if (questionsForCurrentSession.length > 0 && score < questionsForCurrentSession.length && score > 0) {
             wrongAnswersContainer.innerHTML = "<p>You made some mistakes, but good effort! Review above.</p>";
        } else if (questionsForCurrentSession.length > 0 && score === 0) {
             wrongAnswersContainer.innerHTML = "<p>All answers were incorrect this time. Review carefully!</p>";
        }
         else {
            wrongAnswersContainer.innerHTML = "<p>No questions were answered in this quiz.</p>";
        }
        showSection(resultsSection);
    }

    playAgainBtn.addEventListener('click', () => {
        if (currentQuizId && playerName) {
            startGame();
        } else {
            loadQuizSelectionScreen();
        }
    });

    chooseAnotherQuizBtn.addEventListener('click', () => {
        loadQuizSelectionScreen();
    });

    // --- Initial Load ---
    initialize();
});





// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ... (all your existing code for quiz logic) ...

    // --- Footer Year Update ---
    function updateFooterYear() {
        const currentYear = new Date().getFullYear();
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = currentYear;
        }
    }

    // --- Initial Load ---
    function initialize() {
        loadQuizSelectionScreen();
        updateFooterYear(); // Call it here
    }

    initialize(); // Make sure initialize is called
});













