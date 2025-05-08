document.addEventListener('DOMContentLoaded', () => {
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
    const resultsPlayerName = document.getElementById('results-player-name');
    const scoreDisplay = document.getElementById('score-display');
    const feedbackMessageEl = document.getElementById('feedback-message');
    const wrongAnswersContainer = document.getElementById('wrong-answers-container');
    const playAgainBtn = document.getElementById('play-again-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');

    // --- State Variables ---
    let currentQuizData = null;
    let currentQuizId = null;
    let playerName = "";
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = []; // To store { questionText, selectedAnswer, correctAnswer, isCorrect }
    let shuffledQuestions = [];

    // --- Helper Functions ---
    function showSection(sectionElement) {
        document.querySelectorAll('main > section').forEach(sec => sec.classList.remove('active-section'));
        sectionElement.classList.add('active-section');
    }

    function shuffleArray(array) {
        // Fisher-Yates shuffle
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- Initialization ---
    function loadQuizSelection() {
        quizListContainer.innerHTML = ""; // Clear previous
        quizzes.forEach(quiz => {
            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.dataset.quizId = quiz.id;
            card.innerHTML = `
                <i class="${quiz.icon || 'fas fa-question-circle'}"></i>
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
            `;
            card.addEventListener('click', () => selectQuiz(quiz.id));
            quizListContainer.appendChild(card);
        });
        showSection(quizSelectionSection);
    }

    // --- Quiz Flow ---
    function selectQuiz(quizId) {
        currentQuizId = quizId;
        currentQuizData = quizzes.find(q => q.id === quizId);
        if (!currentQuizData) {
            console.error("Quiz not found:", quizId);
            return;
        }
        selectedQuizTitleName.textContent = currentQuizData.title;
        showSection(nameEntrySection);
        playerNameInput.focus();
    }

    startQuizBtn.addEventListener('click', () => {
        playerName = playerNameInput.value.trim();
        if (!playerName) {
            alert("Please enter your name!");
            playerNameInput.focus();
            return;
        }
        if (!currentQuizData) return;

        startGame();
    });

    backToSelectionBtn.addEventListener('click', () => {
        loadQuizSelection();
    });

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        shuffledQuestions = shuffleArray([...currentQuizData.questions]); // Shuffle a copy

        quizTitlePlaying.textContent = currentQuizData.title;
        displayPlayerName.textContent = playerName;
        showSection(quizAreaSection);
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < shuffledQuestions.length) {
            const question = shuffledQuestions[currentQuestionIndex];
            questionTextEl.textContent = question.questionText;
            optionsContainer.innerHTML = ""; // Clear previous options

            // Shuffle options as well for more randomness (optional)
            const shuffledOptions = shuffleArray([...question.options]);

            shuffledOptions.forEach(option => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option;
                button.addEventListener('click', () => selectAnswer(button, option, question.correctAnswer));
                optionsContainer.appendChild(button);
            });

            updateProgressBar();
            questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
            nextQuestionBtn.textContent = "Next Question";
            nextQuestionBtn.style.display = "none"; // Hide initially, show after an answer is selected
            // Disable options after selection to prevent re-selection
            optionsContainer.childNodes.forEach(btn => btn.disabled = false);

        } else {
            showResults();
        }
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function selectAnswer(selectedButton, selectedOption, correctAnswer) {
        // Disable all option buttons after one is clicked
        optionsContainer.childNodes.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn === selectedButton) {
                btn.classList.add('incorrect');
            }
        });

        selectedButton.classList.add('selected'); // Visually mark selected
        const isCorrect = selectedOption === correctAnswer;

        if (isCorrect) {
            score++;
        }

        userAnswers.push({
            questionText: shuffledQuestions[currentQuestionIndex].questionText,
            selectedAnswer: selectedOption,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect
        });

        nextQuestionBtn.style.display = "block"; // Show Next button
        if (currentQuestionIndex === shuffledQuestions.length - 1) {
            nextQuestionBtn.textContent = "Show Results";
        }
    }

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    quitQuizBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to quit? Your progress will be lost.")) {
            loadQuizSelection();
        }
    });

    // --- Results ---
    function showResults() {
        progressBar.style.width = `100%`; // Full progress at results
        resultsPlayerName.textContent = playerName;
        scoreDisplay.textContent = `Your Score: ${score} / ${shuffledQuestions.length}`;

        let feedbackMessage = "";
        const percentage = (score / shuffledQuestions.length) * 100;
        if (percentage === 100) {
            feedbackMessage = "🎉 Perfect Score! You're a Tech Guru! 🌟";
            feedbackMessageEl.style.color = 'var(--success-color)';
        } else if (percentage >= 75) {
            feedbackMessage = "👍 Excellent! Very impressive knowledge! ✨";
            feedbackMessageEl.style.color = 'var(--success-color)';
        } else if (percentage >= 50) {
            feedbackMessage = "😃 Good job! Keep learning and practicing! 📚";
            feedbackMessageEl.style.color = 'var(--primary-color)';
        } else {
            feedbackMessage = "🤔 Needs Improvement. Don't give up, review and try again! 💡";
            feedbackMessageEl.style.color = 'var(--error-color)';
        }
        feedbackMessageEl.textContent = feedbackMessage;


        wrongAnswersContainer.innerHTML = ""; // Clear previous
        const wrong = userAnswers.filter(ans => !ans.isCorrect);
        if (wrong.length > 0) {
            wrong.forEach(ans => {
                const item = document.createElement('div');
                item.className = 'wrong-answer-item';
                item.innerHTML = `
                    <p><strong>Question:</strong> ${ans.questionText}</p>
                    <p><em>Your Answer:</em> ${ans.selectedAnswer}</p>
                    <p><em>Correct Answer:</em> ${ans.correctAnswer}</p>
                `;
                wrongAnswersContainer.appendChild(item);
            });
        } else {
            wrongAnswersContainer.innerHTML = "<p>Congratulations! You got all answers correct!</p>";
        }

        showSection(resultsSection);
    }

    playAgainBtn.addEventListener('click', () => {
        if (currentQuizId) {
            selectQuiz(currentQuizId); // Re-selects current quiz, which goes to name entry
            // Or, if you want to skip name entry for "play again":
            // startGame(); // This would use the existing playerName
        }
    });

    backToHomeBtn.addEventListener('click', () => {
        loadQuizSelection();
    });


    // --- Initial Load ---
    loadQuizSelection();
});