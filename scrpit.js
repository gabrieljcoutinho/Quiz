let questions = [
    { question: "Qual é a capital da França?", options: ["Londres", "Paris", "Berlim", "Roma"], answer: "Paris", difficulty: "facil" },
    { question: "Quanto é 5 + 3?", options: ["5", "8", "12", "15"], answer: "8", difficulty: "facil" },
    { question: "Quem escreveu 'Dom Quixote'?", options: ["Shakespeare", "Machado de Assis", "Miguel de Cervantes", "Monteiro Lobato"], answer: "Miguel de Cervantes", difficulty: "medio" },
    { question: "Qual é o maior planeta do sistema solar?", options: ["Terra", "Marte", "Júpiter", "Vênus"], answer: "Júpiter", difficulty: "facil" },
    { question: "Quem pintou a Mona Lisa?", options: ["Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci", difficulty: "medio" },
    { question: "Em que ano o Brasil foi descoberto?", options: ["1498", "1500", "1600", "1700"], answer: "1500", difficulty: "medio" },
    { question: "Qual é o elemento químico mais abundante na crosta terrestre?", options: ["Oxigênio", "Silício", "Alumínio", "Ferro"], answer: "Oxigênio", difficulty: "medio" },
    { question: "Quem foi o primeiro homem a pisar na Lua?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"], answer: "Neil Armstrong", difficulty: "medio" },
    { question: "Qual é o rio mais longo do mundo?", options: ["Amazonas", "Nilo", "Mississipi", "Yangtzé"], answer: "Amazonas", difficulty: "medio" },
    { question: "Quem é o autor de 'O Pequeno Príncipe'?", options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "George Orwell", "Machado de Assis"], answer: "Antoine de Saint-Exupéry", difficulty: "medio" },
    {question: "Qual é a fórmula química da água?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O", difficulty: "medio" },
    {question: "qual filossofo disse: o homeme é bom mais a sociedade o corrompe", options: ["Jean-Jacques Rousseau", "Karl Marx", "Friedrich Nietzsche", "Platão"], answer: "Jean-Jacques Rousseau", difficulty: "dificil" },
    {question: "Qual é a capital do Japão?", options: ["Tóquio", "Seul", "Pequim", "Bangcoc"], answer: "Tóquio", difficulty: "facil" },
    {question: "Qual é o maior oceano do mundo?", options: ["Atlântico", "Índico", "Ártico", "Pacífico"], answer: "Pacífico", difficulty: "facil" },
    {question: "Quem descobriu a penicilina?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Albert Einstein"], answer: "Alexander Fleming", difficulty: "medio" },
    {question: "Qual é a capital da Itália?", options: ["Roma", "Milão", "Veneza", "Florença"], answer: "Roma", difficulty: "facil" },
    {question: "Qual é o maior mamífero do mundo?", options: ["Elefante", "Baleia Azul", "Girafa", "Tubarão"], answer: "Baleia Azul", difficulty: "facil" },
    {question: "Quem pintou o teto da Capela Sistina?", options: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Caravaggio"], answer: "Michelangelo", difficulty: "medio" },
    { question: "Qual a montanha mais alta do mundo?", options: ["Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Everest", difficulty: "medio" },
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas", "Juscelino Kubitschek", "Marechal Deodoro da Fonseca", "Café Filho"], answer: "Marechal Deodoro da Fonseca", difficulty: "medio" },
    { question: "Qual a fórmula química do gás carbônico?", options: ["CO2", "H2O", "O2", "N2"], answer: "CO2", difficulty: "facil" },
    { question: "Quem escreveu 'Cem Anos de Solidão'?", options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Isabel Allende"], answer: "Gabriel García Márquez", difficulty: "dificil" },
    { question: "Qual a velocidade da luz no vácuo (aproximadamente)?", options: ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "50.000 km/s"], answer: "300.000 km/s", difficulty: "medio" },
    { question: "Qual a capital da Argentina?", options: ["Buenos Aires", "Córdoba", "Rosário", "Mendoza"], answer: "Buenos Aires", difficulty: "facil" },
    { question: "Quem desenvolveu a teoria da relatividade?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileu Galilei"], answer: "Albert Einstein", difficulty: "medio" },
    { question: "Qual o símbolo químico do ouro?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au", difficulty: "facil" },
    { question: "Quem dirigiu o filme 'O Poderoso Chefão'?", options: ["Martin Scorsese", "Quentin Tarantino", "Francis Ford Coppola", "Steven Spielberg"], answer: "Francis Ford Coppola", difficulty: "medio" },
    { question: "Qual a maior floresta tropical do mundo?", options: ["Amazônia", "Congo", "Sundaland", "Valdiviana"], answer: "Amazônia", difficulty: "facil" },
    { question: "Quem pintou 'A Noite Estrelada'?", options: ["Claude Monet", "Vincent van Gogh", "Pierre-Auguste Renoir", "Edgar Degas"], answer: "Vincent van Gogh", difficulty: "medio" },
    { question: "Qual o nome da primeira espaçonave tripulada a pousar na Lua?", options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Challenger"], answer: "Apollo 11", difficulty: "medio" }
];

questions = questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let selectedButton = null;
const nextButton = document.querySelector(".next-btn");
const neonIndicator = document.querySelector(".neon-indicator");
let correctStreak = 0; // Contador de acertos seguidos
let questionValue = 100; // Valor inicial de cada questão
const resultDiv = document.getElementById("result"); // Pegar a div de resultado

function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    selectedAnswer = null;
    selectedButton = null;
    nextButton.disabled = true;

    neonIndicator.innerText = `${currentQuestion + 1}`;
    neonIndicator.style.display = 'flex';
    neonIndicator.style.justifyContent = 'center';
    neonIndicator.style.alignItems = 'center';
    neonIndicator.style.fontSize = '1.2em';
    neonIndicator.style.color = '#fff';
    neonIndicator.style.textShadow = '0 0 5px rgba(15, 240, 252, 1)';

    // Mostra o valor da questão atual com um efeito
    const questionValueDisplay = document.createElement('p');
    questionValueDisplay.innerText = `Valor da questão: +${questionValue} pontos`;
    questionValueDisplay.style.marginBottom = '5px';
    questionValueDisplay.style.color = '#b3e5fc'; // Um azul mais claro e vibrante
    questionValueDisplay.style.fontWeight = 'bold';
    questionValueDisplay.style.textShadow = '0 0 3px #b3e5fc';
    quizDiv.appendChild(questionValueDisplay);

    // Mostra a dificuldade da questão com a cor correspondente e um efeito sutil
    const difficultyDisplay = document.createElement('p');
    const difficultyText = `Nível: ${questions[currentQuestion].difficulty}`;
    difficultyDisplay.innerText = difficultyText;
    difficultyDisplay.style.marginBottom = '10px';
    difficultyDisplay.style.fontSize = '0.9em';
    difficultyDisplay.style.fontWeight = 'bold';
    difficultyDisplay.style.textShadow = '0 0 2px #333'; // Sombra suave para destacar
    if (questions[currentQuestion].difficulty === "facil") {
        difficultyDisplay.style.color = '#a7ffeb'; // Verde claro vibrante
        difficultyDisplay.style.textShadow = '0 0 3px #a7ffeb';
    } else if (questions[currentQuestion].difficulty === "medio") {
        difficultyDisplay.style.color = '#ffd180'; // Laranja suave e quente
        difficultyDisplay.style.textShadow = '0 0 3px #ffd180';
    } else if (questions[currentQuestion].difficulty === "dificil") {
        difficultyDisplay.style.color = '#ff8a80'; // Vermelho suave e intenso
        difficultyDisplay.style.textShadow = '0 0 3px #ff8a80';
    }
    quizDiv.appendChild(difficultyDisplay);

    let questionObj = questions[currentQuestion];
    let questionElem = document.createElement("div");
    questionElem.classList.add("question");
    questionElem.innerText = questionObj.question;
    quizDiv.appendChild(questionElem);

    let optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    const shuffledOptions = [...questionObj.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectAnswer(btn, option);
        optionsDiv.appendChild(btn);
    });

    quizDiv.appendChild(optionsDiv);
}

function selectAnswer(button, selected) {
    document.querySelectorAll(".options button").forEach(btn => {
        btn.classList.remove("selected");
        // Adiciona um leve efeito de "pulsar" nos botões não selecionados
        btn.style.transform = 'scale(1)';
    });
    button.classList.add("selected");
    button.style.transform = 'scale(1.05)'; // Leve destaque ao selecionar
    selectedAnswer = selected;
    selectedButton = button;
    nextButton.disabled = false;
}

function nextQuestion() {
    if (selectedButton) {
        nextButton.disabled = true;
        document.querySelectorAll(".options button").forEach(btn => {
            btn.disabled = true;
            btn.style.transform = 'scale(1)'; // Reset do efeito de seleção
        });
        const isCorrect = (selectedAnswer === questions[currentQuestion].answer);
        if (isCorrect) {
            selectedButton.classList.add("correct");
            // Adiciona um feedback visual imediato para resposta correta
            selectedButton.classList.add("animate-correct");
            setTimeout(() => selectedButton.classList.remove("animate-correct"), 1000);
            score += questionValue;
            correctStreak++;
            // Verifica se a sequência de acertos chegou a um múltiplo de 4
            if (correctStreak % 4 === 0 && correctStreak > 0) {
                questionValue *= 2; // Dobra o valor da próxima questão
                // Feedback visual para o bônus
                resultDiv.innerText = "Sequência de 4 acertos! Próxima questão vale o dobro!";
                resultDiv.classList.add("bonus-text");
                setTimeout(() => resultDiv.classList.remove("bonus-text"), 2000);
            } else {
                resultDiv.innerText = "Resposta Correta!";
                resultDiv.classList.add("correct-feedback");
                setTimeout(() => resultDiv.classList.remove("correct-feedback"), 1500);
            }
        } else {
            selectedButton.classList.add("wrong");
            // Adiciona um feedback visual imediato para resposta incorreta
            selectedButton.classList.add("animate-wrong");
            setTimeout(() => selectedButton.classList.remove("animate-wrong"), 1000);
            document.querySelectorAll(".options button").forEach(btn => {
                if (btn.innerText === questions[currentQuestion].answer) {
                    btn.classList.add("correct");
                    btn.classList.add("animate-correct-answer"); // Destaca a resposta correta
                    setTimeout(() => btn.classList.remove("animate-correct-answer"), 1000);
                }
            });
            correctStreak = 0; // Reseta a sequência de acertos
            questionValue = 100; // Volta o valor da questão para 100
            resultDiv.innerText = "Resposta Incorreta!";
            resultDiv.classList.add("wrong-feedback");
            setTimeout(() => resultDiv.classList.remove("wrong-feedback"), 1500);
        }
        setTimeout(() => {
            resultDiv.innerText = ""; // Limpa o feedback
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion();
            } else {
                document.getElementById("quiz").innerHTML = "Fim do quiz!";
                document.getElementById("result").innerText = `Pontuação total: ${score}`;
                document.getElementById("result").classList.add("final-score"); // Estilo para a pontuação final
                nextButton.style.display = 'none';
                neonIndicator.style.display = 'none';
            }
        }, 2000); // Aumentei um pouco o tempo para o feedback ser mais notável
    }
}

loadQuestion();