// script.js

let currentIndex = 0;
let history = [];
let historyIndex = -1;

let stats = JSON.parse(localStorage.getItem("TOEIC_STATS")) || {
  total: 0,
  correct: 0,
  answers: {},
};

// 初期表示
window.onload = () => {
  showQuestion();
};

function showQuestion() {
  updateStatsUI();

  const q = questions[currentIndex];

  document.getElementById("question").textContent =
    `[${q.type}] (${q.type || "unknown"}) : ${q.question}`;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = () => {
      stats.total++;

      const isCorrect = choice === q.answer;

      if (isCorrect) {
        stats.correct++;
        btn.style.backgroundColor = "lightgreen";
      } else {
        btn.style.backgroundColor = "salmon";
      }

      // 問題IDごとに記録
      stats.answers[q.id] = isCorrect;

      saveStats();

      updateStatsUI();
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

function saveStats() {
  localStorage.setItem("TOEIC_STATS", JSON.stringify(stats));
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
  document.getElementById("comment").textContent = q.comment || "";
}

function updateStatsUI() {
  const rate =
    stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);

  document.getElementById("stats").textContent =
    `解答数: ${stats.total} / 正解率: ${rate}%`;
}
