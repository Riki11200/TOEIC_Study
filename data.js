// data.js

const questions = [
  {
    id: 1,
    type: "preposition",
    question: "She is responsible ___ preparing the financial report.",
    choices: ["to", "for", "with", "about"],
    answer: "for",
    translation: "彼女は財務報告の作成に責任がある"
  },
  {
    id: 2,
    type: "preposition",
    question: "The manager apologized ___ the delay.",
    choices: ["to", "for", "about", "with"],
    answer: "for",
    translation: "マネージャーは遅延について謝罪した"
  },
  {
    id: 3,
    type: "preposition",
    question: "We are interested ___ expanding our business overseas.",
    choices: ["in", "on", "at", "for"],
    answer: "in",
    translation: "私たちは海外展開に興味がある"
  },
  {
    id: 4,
    type: "preposition",
    question: "Please apply ___ the position by Friday.",
    choices: ["to", "at", "for", "in"],
    answer: "for",
    translation: "金曜日までにその職に応募してください"
  },
  {
    id: 5,
    type: "preposition",
    question: "The company will participate ___ the trade fair.",
    choices: ["at", "in", "on", "to"],
    answer: "in",
    translation: "その会社は展示会に参加する予定だ"
  },
  {
    id: 6,
    type: "preposition",
    question: "This software is capable ___ handling large amounts of data.",
    choices: ["to", "for", "of", "with"],
    answer: "of",
    translation: "このソフトは大量のデータを処理できる"
  },
  {
    id: 7,
    type: "preposition",
    question: "The meeting has been postponed ___ next Monday.",
    choices: ["until", "by", "at", "in"],
    answer: "until",
    translation: "会議は来週月曜日まで延期された"
  },
  {
    id: 8,
    type: "preposition",
    question: "He is in charge ___ customer support.",
    choices: ["for", "with", "of", "to"],
    answer: "of",
    translation: "彼はカスタマーサポートを担当している"
  },
  {
    id: 9,
    type: "preposition",
    question: "We are looking forward ___ hearing from you.",
    choices: ["for", "at", "to", "with"],
    answer: "to",
    translation: "あなたからの連絡を楽しみにしています"
  },
  {
    id: 10,
    type: "preposition",
    question: "The new policy will have an impact ___ employee morale.",
    choices: ["to", "in", "at", "on"],
    answer: "on",
    translation: "新しい方針は従業員の士気に影響を与える"
  },

  {
    id: 11,
    type: "preposition",
    question: "She is responsible ___ the marketing strategy.",
    choices: ["for", "in", "on", "of"],
    answer: "for",
    translation: "彼女はマーケティング戦略を担当している"
  },
  {
    id: 12,
    type: "preposition",
    question: "We participated ___ the annual conference.",
    choices: ["for", "in", "on", "with"],
    answer: "in",
    translation: "私たちは年次会議に参加した"
  },
  {
    id: 13,
    type: "preposition",
    question: "The results depend ___ customer feedback.",
    choices: ["on", "in", "for", "of"],
    answer: "on",
    translation: "結果は顧客のフィードバックに依存する"
  },
  {
    id: 14,
    type: "preposition",
    question: "He is capable ___ solving complex problems.",
    choices: ["of", "for", "to", "with"],
    answer: "of",
    translation: "彼は複雑な問題を解決できる"
  },
  {
    id: 15,
    type: "preposition",
    question: "I’m looking forward ___ meeting you.",
    choices: ["to", "for", "on", "in"],
    answer: "to",
    translation: "あなたに会うのを楽しみにしています"
  },
  {
    id: 16,
    type: "preposition",
    question: "This product has a strong impact ___ sales.",
    choices: ["on", "to", "in", "for"],
    answer: "on",
    translation: "この製品は売上に大きな影響を与える"
  },
  {
    id: 17,
    type: "preposition",
    question: "She provided the clients ___ detailed information.",
    choices: ["with", "to", "for", "of"],
    answer: "with",
    translation: "彼女は顧客に詳細な情報を提供した"
  },
  {
    id: 18,
    type: "preposition",
    question: "The team is satisfied ___ the outcome.",
    choices: ["with", "in", "on", "for"],
    answer: "with",
    translation: "チームは結果に満足している"
  },
  {
    id: 19,
    type: "preposition",
    question: "He succeeded ___ completing the project.",
    choices: ["in", "on", "for", "to"],
    answer: "in",
    translation: "彼はプロジェクトの完了に成功した"
  },
  {
    id: 20,
    type: "preposition",
    question: "She is in charge ___ human resources.",
    choices: ["of", "for", "to", "with"],
    answer: "of",
    translation: "彼女は人事を担当している"
  },

  {
    id: 21,
    type: "preposition",
    question: "Employees are encouraged to participate ___ training sessions.",
    choices: ["in", "on", "at", "for"],
    answer: "in",
    translation: "従業員は研修に参加するよう奨励されている"
  },
  {
    id: 22,
    type: "preposition",
    question: "The company is responsible ___ ensuring customer satisfaction.",
    choices: ["for", "to", "with", "about"],
    answer: "for",
    translation: "会社は顧客満足を確保する責任がある"
  },
  {
    id: 23,
    type: "preposition",
    question: "We apologize ___ any inconvenience caused.",
    choices: ["for", "about", "to", "with"],
    answer: "for",
    translation: "ご不便をおかけしたことをお詫びします"
  },
  {
    id: 24,
    type: "preposition",
    question: "The success depends ___ communication.",
    choices: ["on", "in", "for", "with"],
    answer: "on",
    translation: "成功はコミュニケーションにかかっている"
  },
  {
    id: 25,
    type: "preposition",
    question: "The manager is in charge ___ daily operations.",
    choices: ["of", "for", "with", "to"],
    answer: "of",
    translation: "マネージャーは日々の業務を担当している"
  },

  {
    id: 26,
    type: "preposition",
    question: "Customers are satisfied ___ our service.",
    choices: ["with", "in", "on", "for"],
    answer: "with",
    translation: "顧客は私たちのサービスに満足している"
  },
  {
    id: 27,
    type: "preposition",
    question: "The policy will have an impact ___ businesses.",
    choices: ["on", "to", "in", "for"],
    answer: "on",
    translation: "その政策は企業に影響を与える"
  },
  {
    id: 28,
    type: "preposition",
    question: "We look forward ___ working with you.",
    choices: ["to", "for", "on", "in"],
    answer: "to",
    translation: "あなたと働くのを楽しみにしています"
  },
  {
    id: 29,
    type: "preposition",
    question: "The company provides employees ___ training.",
    choices: ["with", "to", "for", "of"],
    answer: "with",
    translation: "会社は従業員に研修を提供する"
  },
  {
    id: 30,
    type: "preposition",
    question: "He succeeded ___ increasing sales.",
    choices: ["in", "on", "for", "to"],
    answer: "in",
    translation: "彼は売上向上に成功した"
  },

  {
    id: 31,
    type: "preposition",
    question: "The report is based ___ reliable data.",
    choices: ["on", "in", "at", "for"],
    answer: "on",
    translation: "その報告書は信頼できるデータに基づいている"
  },
  {
    id: 32,
    type: "preposition",
    question: "She is capable ___ handling pressure.",
    choices: ["of", "for", "to", "with"],
    answer: "of",
    translation: "彼女はプレッシャーに対処できる"
  },
  {
    id: 33,
    type: "preposition",
    question: "The team is engaged ___ development.",
    choices: ["in", "on", "at", "for"],
    answer: "in",
    translation: "チームは開発に従事している"
  },
  {
    id: 34,
    type: "preposition",
    question: "The meeting was postponed ___ Friday.",
    choices: ["until", "by", "at", "on"],
    answer: "until",
    translation: "会議は金曜日まで延期された"
  },
  {
    id: 35,
    type: "preposition",
    question: "We must focus ___ customer needs.",
    choices: ["on", "in", "at", "for"],
    answer: "on",
    translation: "顧客のニーズに集中しなければならない"
  },

  {
    id: 36,
    type: "preposition",
    question: "The company consists ___ several divisions.",
    choices: ["of", "in", "for", "with"],
    answer: "of",
    translation: "その会社はいくつかの部門で構成されている"
  },
  {
    id: 37,
    type: "preposition",
    question: "He responded ___ the request immediately.",
    choices: ["to", "for", "on", "with"],
    answer: "to",
    translation: "彼はその要求にすぐ対応した"
  },
  {
    id: 38,
    type: "preposition",
    question: "The project finished ahead ___ schedule.",
    choices: ["of", "in", "on", "for"],
    answer: "of",
    translation: "プロジェクトは予定より早く終わった"
  },
  {
    id: 39,
    type: "preposition",
    question: "She is aware ___ the risks.",
    choices: ["of", "for", "in", "on"],
    answer: "of",
    translation: "彼女はリスクを認識している"
  },
  {
    id: 40,
    type: "preposition",
    question: "The company is known ___ quality.",
    choices: ["for", "to", "with", "in"],
    answer: "for",
    translation: "その会社は品質で知られている"
  },

  {
    id: 41,
    type: "preposition",
    question: "We must deal ___ complaints quickly.",
    choices: ["with", "to", "for", "in"],
    answer: "with",
    translation: "苦情には迅速に対処しなければならない"
  },
  {
    id: 42,
    type: "preposition",
    question: "The changes will affect ___ profits.",
    choices: ["(no preposition)", "on", "to", "for"],
    answer: "(no preposition)",
    translation: "その変更は利益に影響を与える"
  },
  {
    id: 43,
    type: "preposition",
    question: "The manager discussed the issue ___ the team.",
    choices: ["(no preposition)", "about", "on", "with"],
    answer: "(no preposition)",
    translation: "マネージャーはその問題をチームと議論した"
  },
  {
    id: 44,
    type: "preposition",
    question: "She entered ___ the room quietly.",
    choices: ["(no preposition)", "into", "to", "in"],
    answer: "(no preposition)",
    translation: "彼女は静かに部屋に入った"
  },
  {
    id: 45,
    type: "preposition",
    question: "The company plans to expand ___ new markets.",
    choices: ["into", "in", "to", "on"],
    answer: "into",
    translation: "会社は新市場に進出する予定だ"
  },

  {
    id: 46,
    type: "preposition",
    question: "He is accustomed ___ working overtime.",
    choices: ["to", "for", "with", "in"],
    answer: "to",
    translation: "彼は残業に慣れている"
  },
  {
    id: 47,
    type: "preposition",
    question: "The strategy resulted ___ higher profits.",
    choices: ["in", "on", "for", "to"],
    answer: "in",
    translation: "その戦略は利益増加につながった"
  },
  {
    id: 48,
    type: "preposition",
    question: "The manager is pleased ___ the results.",
    choices: ["with", "on", "for", "in"],
    answer: "with",
    translation: "マネージャーは結果に満足している"
  },
  {
    id: 49,
    type: "preposition",
    question: "The company invested ___ new technology.",
    choices: ["in", "on", "for", "with"],
    answer: "in",
    translation: "会社は新技術に投資した"
  },
  {
    id: 50,
    type: "preposition",
    question: "Employees must comply ___ company rules.",
    choices: ["with", "to", "for", "on"],
    answer: "with",
    translation: "従業員は会社の規則に従わなければならない"
  }
];