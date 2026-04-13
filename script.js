// script.js

let currentIndex = 0;
let history = [];
let historyIndex = -1;

// 初期表示
window.onload = () => {
  showQuestion();
};

function showQuestion() {
  const q = questions[currentIndex];

  document.getElementById("question").textContent =
    `Q${q.id} (${q.type || "unknown"}) : ${q.question}`;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = () => {
      if (choice === q.answer) {
        btn.style.backgroundColor = "lightgreen";
      } else {
        btn.style.backgroundColor = "salmon";
      }
    };

    choicesDiv.appendChild(btn);
  });

  document.getElementById("answer").style.display = "none";
  document.getElementById("answer").textContent = "答え: " + q.answer;

  document.getElementById("translation").textContent = "";
}
function showAnswer() {
  document.getElementById("answer").style.display = "block";
}

function nextQuestion() {
  // 履歴の先に進める場合
  if (historyIndex < history.length - 1) {
    historyIndex++;
    currentIndex = history[historyIndex];
  } else {
    // 新しくランダム生成
    let next;
    do {
      next = Math.floor(Math.random() * questions.length);
    } while (next === currentIndex); // 同じ問題防止

    currentIndex = next;

    history.push(currentIndex);
    historyIndex++;
  }

  showQuestion();
}

function prevQuestion() {
  if (historyIndex > 0) {
    historyIndex--;
    currentIndex = history[historyIndex];
    showQuestion();
  }
}

function showTranslation() {
  const q = questions[currentIndex];
  document.getElementById("translation").textContent = q.translation;
}