// German Family Vocabulary Dataset
// Each item includes: german (with article), russian, transcription, example, explanation
const vocabulary = [
    {
        german: "die Mutter",
        article: "die",
        word: "Mutter",
        russian: "мама",
        transcription: "[ˈmʊtɐ]",
        example: "Meine Mutter kocht sehr gut.",
        explanation: "Die Mutter — мать или мама. Артикль die указывает на женский род."
    },
    {
        german: "der Vater",
        article: "der",
        word: "Vater",
        russian: "папа",
        transcription: "[ˈfaːtɐ]",
        example: "Mein Vater ist Ingenieur.",
        explanation: "Der Vater — отец или папа. Артикль der указывает на мужской род."
    },
    {
        german: "die Eltern",
        article: "die",
        word: "Eltern",
        russian: "родители",
        transcription: "[ˈɛltɐn]",
        example: "Meine Eltern wohnen in Berlin.",
        explanation: "Die Eltern — родители (оба). Во множественном числе всегда die."
    },
    {
        german: "die Schwester",
        article: "die",
        word: "Schwester",
        russian: "сестра",
        transcription: "[ˈʃvɛstɐ]",
        example: "Meine Schwester studiert Medizin.",
        explanation: "Die Schwester — сестра. Артикль die, как и у большинства женских родственников."
    },
    {
        german: "der Bruder",
        article: "der",
        word: "Bruder",
        russian: "брат",
        transcription: "[ˈbruːdɐ]",
        example: "Mein Bruder spielt Fußball.",
        explanation: "Der Bruder — брат. Артикль der, как у большинства мужских родственников."
    },
    {
        german: "die Geschwister",
        article: "die",
        word: "Geschwister",
        russian: "братья и сёстры",
        transcription: "[ɡəˈʃvɪstɐ]",
        example: "Ich habe drei Geschwister.",
        explanation: "Die Geschwister — братья и сёстры вместе. Интересное собирательное существительное."
    },
    {
        german: "der Sohn",
        article: "der",
        word: "Sohn",
        russian: "сын",
        transcription: "[zoːn]",
        example: "Unser Sohn geht zur Schule.",
        explanation: "Der Sohn — сын. Обратите внимание на произношение [zoːn], буква h не читается."
    },
    {
        german: "die Tochter",
        article: "die",
        word: "Tochter",
        russian: "дочь",
        transcription: "[ˈtɔxtɐ]",
        example: "Ihre Tochter lernt Klavier spielen.",
        explanation: "Die Tochter — дочь. Сочетание ch читается как [x], похоже на русское 'х'."
    },
    {
        german: "die Kinder",
        article: "die",
        word: "Kinder",
        russian: "дети",
        transcription: "[ˈkɪndɐ]",
        example: "Die Kinder spielen im Garten.",
        explanation: "Die Kinder — дети. Множественное число от das Kind (ребёнок)."
    },
    {
        german: "der Mann",
        article: "der",
        word: "Mann",
        russian: "муж",
        transcription: "[man]",
        example: "Ihr Mann arbeitet im Büro.",
        explanation: "Der Mann — муж (супруг) или мужчина. Двойное n читается как одинарное."
    },
    {
        german: "die Frau",
        article: "die",
        word: "Frau",
        russian: "жена",
        transcription: "[fʁaʊ]",
        example: "Seine Frau ist Lehrerin.",
        explanation: "Die Frau — жена (супруга) или женщина. Сочетание au читается как [aʊ]."
    },
    {
        german: "die Großeltern",
        article: "die",
        word: "Großeltern",
        russian: "бабушка и дедушка",
        transcription: "[ˈɡʁoːsˌɛltɐn]",
        example: "Meine Großeltern leben auf dem Land.",
        explanation: "Die Großeltern — бабушка и дедушка вместе. Groß- означает 'большой' в смысле старшего поколения."
    },
    {
        german: "die Großmutter",
        article: "die",
        word: "Großmutter",
        russian: "бабушка",
        transcription: "[ˈɡʁoːsˌmʊtɐ]",
        example: "Meine Großmutter backt leckeren Kuchen.",
        explanation: "Die Großmutter — бабушка. Дословно 'большая мать'. ß читается как [s]."
    },
    {
        german: "der Großvater",
        article: "der",
        word: "Großvater",
        russian: "дедушка",
        transcription: "[ˈɡʁoːsˌfaːtɐ]",
        example: "Mein Großvater erzählt interessante Geschichten.",
        explanation: "Der Großvater — дедушка. Дословно 'большой отец'."
    },
    {
        german: "die Tante",
        article: "die",
        word: "Tante",
        russian: "тётя",
        transcription: "[ˈtantə]",
        example: "Meine Tante arbeitet als Ärztin.",
        explanation: "Die Tante — тётя. Заимствованное слово, похожее на русское."
    },
    {
        german: "der Onkel",
        article: "der",
        word: "Onkel",
        russian: "дядя",
        transcription: "[ˈɔŋkl̩]",
        example: "Mein Onkel reist gern.",
        explanation: "Der Onkel — дядя. Обратите внимание на произношение: [ˈɔŋkl̩], буква e не произносится."
    },
    {
        german: "der Cousin / die Cousine",
        article: "der/die",
        word: "Cousin/Cousine",
        russian: "двоюродный брат / сестра",
        transcription: "[kuˈzɛ̃] / [kuˈziːnə]",
        example: "Mein Cousin wohnt in Hamburg.",
        explanation: "Cousin — двоюродный брат (мужской род), Cousine — двоюродная сестра (женский род)."
    }
];

// Game State Variables
let currentWordIndex = 0;
let score = 0;
let gameActive = false;
let currentOptions = [];
let correctAnswer = "";

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const germanWordEl = document.getElementById('german-word');
const articleBadgeEl = document.getElementById('article-badge');
const transcriptionEl = document.getElementById('transcription');
const exampleSentenceEl = document.getElementById('example-sentence');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const correctAnswerEl = document.getElementById('correct-answer');
const explanationEl = document.getElementById('explanation');
const feedbackTranscriptionEl = document.getElementById('feedback-transcription');
const nextBtn = document.getElementById('next-btn');
const progressTextEl = document.getElementById('progress-text');
const progressFillEl = document.getElementById('progress-fill');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');
const scorePercentageEl = document.getElementById('score-percentage');
const correctCountEl = document.getElementById('correct-count');
const resultMessageEl = document.getElementById('result-message');

// Initialize the Game
function initGame() {
    // Reset game state
    currentWordIndex = 0;
    score = 0;
    gameActive = true;
    
    // Reset UI
    scoreEl.textContent = "0";
    updateProgress();
    
    // Show first word
    showWord();
    
    // Switch screens
    startScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    console.log("Game initialized with", vocabulary.length, "words");
}

// Display Current Word
function showWord() {
    const currentWord = vocabulary[currentWordIndex];
    
    // Update German word display
    germanWordEl.textContent = currentWord.word;
    articleBadgeEl.textContent = currentWord.article;
    
    // Update transcription and example
    transcriptionEl.textContent = currentWord.transcription;
    exampleSentenceEl.textContent = currentWord.example;
    
    // Hide feedback area
    feedbackArea.classList.add('hidden');
    
    // Generate answer options
    generateOptions(currentWord);
    
    // Update progress
    updateProgress();
}

// Generate 3 Answer Options (1 correct + 2 random wrong)
function generateOptions(currentWord) {
    // Clear previous options
    optionsContainer.innerHTML = '';
    currentOptions = [];
    correctAnswer = currentWord.russian;
    
    // Add correct answer
    currentOptions.push(currentWord.russian);
    
    // Add 2 random wrong answers from other words
    const wrongOptions = vocabulary
        .filter(item => item.russian !== currentWord.russian)
        .map(item => item.russian);
    
    // Shuffle wrong options and pick 2
    shuffleArray(wrongOptions);
    currentOptions.push(wrongOptions[0], wrongOptions[1]);
    
    // Shuffle all options
    shuffleArray(currentOptions);
    
    // Create option buttons
    currentOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${index + 1}. ${option}`;
        button.dataset.answer = option;
        
        // Add click event listener
        button.addEventListener('click', () => checkAnswer(option));
        
        optionsContainer.appendChild(button);
    });
}

// Check User's Answer
function checkAnswer(selectedAnswer) {
    const currentWord = vocabulary[currentWordIndex];
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Disable all option buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        
        // Mark correct and wrong answers
        if (btn.dataset.answer === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.dataset.answer === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Update score if correct
    if (isCorrect) {
        score++;
        scoreEl.textContent = score;
        
        // Show success feedback
        feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        feedbackIcon.className = 'feedback-icon correct';
        feedbackTitle.textContent = 'Правильно!';
        feedbackTitle.style.color = '#4caf50';
    } else {
        // Show error feedback
        feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
        feedbackIcon.className = 'feedback-icon wrong';
        feedbackTitle.textContent = 'Неправильно';
        feedbackTitle.style.color = '#f44336';
    }
    
    // Show correct answer and explanation
    correctAnswerEl.textContent = `${currentWord.german} = ${currentWord.russian}`;
    explanationEl.textContent = currentWord.explanation;
    feedbackTranscriptionEl.textContent = currentWord.transcription;
    
    // Show feedback area
    feedbackArea.classList.remove('hidden');
    
    // Scroll to feedback area on mobile
    if (window.innerWidth < 768) {
        feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Move to Next Word
function nextWord() {
    currentWordIndex++;
    
    if (currentWordIndex < vocabulary.length) {
        showWord();
    } else {
        finishGame();
    }
}

// Update Progress Bar and Counter
function updateProgress() {
    const progressPercentage = ((currentWordIndex + 1) / vocabulary.length) * 100;
    
    // Update progress text
    progressTextEl.textContent = `Слово ${currentWordIndex + 1} из ${vocabulary.length}`;
    
    // Update progress bar with animation
    progressFillEl.style.width = `${progressPercentage}%`;
    
    // Log progress to console
    console.log(`Progress: ${currentWordIndex + 1}/${vocabulary.length} (${Math.round(progressPercentage)}%)`);
}

// Finish Game and Show Results
function finishGame() {
    const percentage = Math.round((score / vocabulary.length) * 100);
    
    // Update final score display
    finalScoreEl.textContent = `${score}/${vocabulary.length}`;
    scorePercentageEl.textContent = `${percentage}%`;
    correctCountEl.textContent = score;
    
    // Set result message based on score
    let message = "";
    if (percentage === 100) {
        message = "Идеально! Ты отлично знаешь немецкие названия членов семьи! 🎉";
    } else if (percentage >= 80) {
        message = "Отлично! Ты хорошо знаешь немецкие названия членов семьи! 👍";
    } else if (percentage >= 60) {
        message = "Хорошо! Ты знаешь основные немецкие названия членов семьи! 👏";
    } else if (percentage >= 40) {
        message = "Неплохо! Есть что повторить, но ты на верном пути! 💪";
    } else {
        message = "Есть над чем поработать! Повтори слова и попробуй снова! 📚";
    }
    
    resultMessageEl.textContent = message;
    
    // Switch to results screen
    gameScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Log results to console
    console.log(`Game finished! Score: ${score}/${vocabulary.length} (${percentage}%)`);
}

// Utility Functions

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get a random subset of array
function getRandomSubset(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Event Listeners

// Start game button
startBtn.addEventListener('click', initGame);

// Restart game button
restartBtn.addEventListener('click', initGame);

// Next word button
nextBtn.addEventListener('click', nextWord);

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (!gameActive) return;
    
    // Number keys 1-3 for answer selection
    if (event.key >= '1' && event.key <= '3') {
        const index = parseInt(event.key) - 1;
        const buttons = document.querySelectorAll('.option-btn');
        
        if (buttons[index] && !buttons[index].disabled) {
            buttons[index].click();
        }
    }
    
    // Space or Enter for next word (when feedback is visible)
    if ((event.key === ' ' || event.key === 'Enter') && !feedbackArea.classList.contains('hidden')) {
        event.preventDefault();
        nextWord();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Log initialization
    console.log("German Family Members Game loaded successfully");
    console.log("Vocabulary size:", vocabulary.length);
    console.log("Ready to start learning!");
    
    // Add animation to start button
    startBtn.addEventListener('mouseenter', () => {
        startBtn.style.transform = 'scale(1.05)';
    });
    
    startBtn.addEventListener('mouseleave', () => {
        startBtn.style.transform = 'scale(1)';
    });
});
