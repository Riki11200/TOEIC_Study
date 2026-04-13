// script.js

let currentIndex = 0;
let history = [];
let historyIndex = -1;
let answered = false;

let stats = JSON.parse(localStorage.getItem("TOEIC_STATS")) || {
  total: 0,
  correct: 0,
  answers: {},
};
let questionStats =
  JSON.parse(localStorage.getItem("TOEIC_QUESTION_STATS")) || {};
let wrongList = JSON.parse(localStorage.getItem("TOEIC_WRONG")) || [];

// 初期表示
window.onload = () => {
  history = [currentIndex];
  historyIndex = 0;
  showQuestion();
};

function showQuestion() {
  answered = false;
  updateQuestionStatsUI();
  updateStatsUI();

  const q = questions[currentIndex];

  document.getElementById("question").textContent =
    q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice;

    btn.onclick = () => {
      // すでに回答済みなら無効
      if (answered) return;
      answered = true;

      const isCorrect = choice === q.answer;

      // --- stats ---
      stats.total++;
      if (isCorrect) stats.correct++;

      // --- 問題別統計 ---
      if (!questionStats[q.id]) {
        questionStats[q.id] = { correct: 0, total: 0 };
      }

      questionStats[q.id].total++;
      if (isCorrect) {
        questionStats[q.id].correct++;
      }

      // --- 間違えたらリスト追加 ---
      if (!isCorrect) {
        if (!wrongList.includes(q.id)) {
          wrongList.push(q.id);
        }
      }

      // 🔥 色付け
      const buttons = document.querySelectorAll("#choices button");

      buttons.forEach((b) => {
        if (b.textContent === q.answer) {
          b.style.backgroundColor = "lightgreen"; // 正解
        } else if (b === btn) {
          b.style.backgroundColor = "salmon"; // 自分の選択
        }

        // 🔒 全ボタン無効化
        b.disabled = true;
      });

      saveAll();
      updateQuestionStatsUI();
      document.getElementById("answer").style.display = "block";
    };

    choicesDiv.appendChild(btn);
  });

  document.getElementById("answer").style.display = "none";
  document.getElementById("answer").textContent = "答え: " + q.answer;

  document.getElementById("translation").textContent = "";
}
function showAnswer() {
  document.getElementById("answer").style.display = "block";
  btn.classList.add("correct");
}

function saveStats() {
  localStorage.setItem("TOEIC_STATS", JSON.stringify(stats));
}

function nextQuestion() {
  if (historyIndex < history.length - 1) {
    historyIndex++;
    currentIndex = history[historyIndex];
  } else {
    let next;
    do {
      next = Math.floor(Math.random() * questions.length);
    } while (next === currentIndex);

    currentIndex = next;

    history.push(currentIndex);
    historyIndex = history.length - 1;
  }

  showQuestion();
}

function prevQuestion() {
  if (historyIndex > 0) {
    historyIndex--;
    currentIndex = history[historyIndex];
    showQuestion();
  } else {
    alert("これ以上戻れません");
  }
}

function showTranslation() {
  const q = questions[currentIndex];
  document.getElementById("translation").textContent = q.translation;
  document.getElementById("comment").textContent = q.comment;
}

function updateStatsUI() {
  const rate =
    stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);

  document.getElementById("stats").textContent =
    `解答数: ${stats.total} / 正解率: ${rate}%`;
}

function saveAll() {
  localStorage.setItem("TOEIC_STATS", JSON.stringify(stats));
  localStorage.setItem("TOEIC_QUESTION_STATS", JSON.stringify(questionStats));
  localStorage.setItem("TOEIC_WRONG", JSON.stringify(wrongList));
}

function getQuestionRate(id) {
  const q = questionStats[id];
  if (!q || q.total === 0) return 0;

  return Math.round((q.correct / q.total) * 100);
}

function wrongModeNext() {
  if (wrongList.length === 0) {
    alert("間違えた問題はありません");
    return;
  }

  currentIndex = wrongList[Math.floor(Math.random() * wrongList.length)];

  showQuestion();
}

function removeFromWrong() {
  const id = questions[currentIndex].id;

  wrongList = wrongList.filter((qid) => qid !== id);

  saveAll();

  alert("克服済みにしました！");
}

function updateQuestionStatsUI() {
  const q = questions[currentIndex];
  const rate = getQuestionRate(q.id);

  document.getElementById("questionStats").textContent =
    `この問題の正答率: ${rate}%`;
}

function clearAllData() {
  if (!confirm("本当に全部消す？")) return;

  localStorage.removeItem("TOEIC_STATS");
  localStorage.removeItem("TOEIC_QUESTION_STATS");
  localStorage.removeItem("TOEIC_WRONG");

  stats = { total: 0, correct: 0, answers: {} };
  questionStats = {};
  wrongList = [];

  alert("リセット完了");
  updateStatsUI();
  updateQuestionStatsUI();
}
