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
  },
  {
    id: 51,
    type: "noun",
    question: "The company made a significant ______ in its strategy.",
    choices: ["change", "changing", "changed", "changeable"],
    answer: "change",
    translation: "その会社は戦略に大きな変更を加えた",
    comment: "a + 形容詞の後は名詞"
  },
  {
    id: 52,
    type: "adverb",
    question: "Employees must respond ______ to all inquiries.",
    choices: ["prompt", "promptly", "prompting", "promptness"],
    answer: "promptly",
    translation: "従業員はすべての問い合わせに迅速に対応しなければならない",
    comment: "動詞を修飾 → 副詞"
  },
  {
    id: 53,
    type: "adjective",
    question: "The manager gave a very ______ explanation.",
    choices: ["clear", "clearly", "clarity", "clearing"],
    answer: "clear",
    translation: "マネージャーはとても分かりやすい説明をした",
    comment: "very の後は形容詞"
  },
  {
    id: 54,
    type: "verb",
    question: "The report was ______ by the director.",
    choices: ["approve", "approving", "approved", "approval"],
    answer: "approved",
    translation: "その報告書は部長によって承認された",
    comment: "be動詞 + 過去分詞（受動態）"
  },
  {
    id: 55,
    type: "adjective",
    question: "We are looking for a highly ______ candidate.",
    choices: ["motivate", "motivating", "motivated", "motivation"],
    answer: "motivated",
    translation: "私たちは非常に意欲的な候補者を探している",
    comment: "人の状態 → ed"
  },

  {
    id: 56,
    type: "noun",
    question: "There has been a steady ______ in sales.",
    choices: ["increase", "increasing", "increased", "increasingly"],
    answer: "increase",
    translation: "売上は着実に増加している",
    comment: "a + 形容詞の後 → 名詞"
  },
  {
    id: 57,
    type: "adverb",
    question: "She spoke ______ during the meeting.",
    choices: ["confidence", "confident", "confidently", "confidential"],
    answer: "confidently",
    translation: "彼女は会議中自信を持って話した",
    comment: "動詞 spoke を修飾 → 副詞"
  },
  {
    id: 58,
    type: "noun",
    question: "The manager expressed his ______ about the issue.",
    choices: ["concern", "concerned", "concerning", "concerns"],
    answer: "concern",
    translation: "マネージャーはその問題について懸念を示した",
    comment: "his の後は名詞"
  },
  {
    id: 59,
    type: "adjective",
    question: "The report provides ______ information.",
    choices: ["value", "valuable", "valuably", "valuation"],
    answer: "valuable",
    translation: "その報告書は有益な情報を提供する",
    comment: "名詞 information を修飾 → 形容詞"
  },
  {
    id: 60,
    type: "adverb",
    question: "The task was completed ______.",
    choices: ["success", "successful", "successfully", "succeed"],
    answer: "successfully",
    translation: "その作業は無事に完了した",
    comment: "動詞を修飾 → 副詞"
  },

  {
    id: 61,
    type: "noun",
    question: "She has experience in project ______.",
    choices: ["manage", "manager", "management", "manageable"],
    answer: "management",
    translation: "彼女はプロジェクト管理の経験がある",
    comment: "in の後は名詞"
  },
  {
    id: 62,
    type: "adjective",
    question: "The CEO made a very ______ decision.",
    choices: ["controversy", "controversial", "controversially", "controvert"],
    answer: "controversial",
    translation: "CEOは非常に物議を醸す決定をした",
    comment: "decision を修飾 → 形容詞"
  },
  {
    id: 63,
    type: "adjective",
    question: "The results were quite ______.",
    choices: ["impress", "impressed", "impressive", "impression"],
    answer: "impressive",
    translation: "結果は非常に印象的だった",
    comment: "be動詞の後 → 形容詞"
  },
  {
    id: 64,
    type: "noun",
    question: "We appreciate your prompt ______.",
    choices: ["respond", "response", "responsive", "responding"],
    answer: "response",
    translation: "迅速な対応に感謝します",
    comment: "your の後 → 名詞"
  },
  {
    id: 65,
    type: "noun",
    question: "The company seeks employees with strong communication ______.",
    choices: ["skill", "skills", "skilled", "skillful"],
    answer: "skills",
    translation: "その会社は優れたコミュニケーション能力を持つ従業員を求めている",
    comment: "能力系は複数形が自然"
  },

  {
    id: 66,
    type: "noun",
    question: "The sudden ______ of the flight caused confusion.",
    choices: ["cancel", "cancellation", "canceled", "canceling"],
    answer: "cancellation",
    translation: "突然のフライトのキャンセルが混乱を引き起こした",
    comment: "the + 名詞"
  },
  {
    id: 67,
    type: "adverb",
    question: "The instructions were ______ written.",
    choices: ["clear", "clearly", "clarity", "clearing"],
    answer: "clearly",
    translation: "指示は明確に書かれていた",
    comment: "written を修飾 → 副詞"
  },
  {
    id: 68,
    type: "noun",
    question: "There is a strong ______ that sales will rise.",
    choices: ["likely", "likelihood", "liken", "alike"],
    answer: "likelihood",
    translation: "売上が上がる可能性が高い",
    comment: "a + 形容詞の後 → 名詞"
  },
  {
    id: 69,
    type: "verb",
    question: "The new system will ______ efficiency.",
    choices: ["improvement", "improve", "improving", "improved"],
    answer: "improve",
    translation: "新しいシステムは効率を改善するだろう",
    comment: "will の後 → 動詞原形"
  },
  {
    id: 70,
    type: "adjective",
    question: "The company faced serious ______ problems.",
    choices: ["finance", "financial", "financially", "financing"],
    answer: "financial",
    translation: "会社は深刻な財政問題に直面した",
    comment: "名詞を修飾 → 形容詞"
  },
  {
    id: 101,
    type: "noun",
    question: "The company announced the ______ of a new product.",
    choices: ["launch", "launching", "launched", "launches"],
    answer: "launch",
    translation: "その会社は新製品の発売を発表した",
    comment: "the + 名詞"
  },
  {
    id: 102,
    type: "adverb",
    question: "The task was completed ______ despite difficulties.",
    choices: ["success", "successful", "successfully", "succeed"],
    answer: "successfully",
    translation: "困難にもかかわらず作業は成功裏に完了した",
    comment: "動詞 completed を修飾 → 副詞"
  },
  {
    id: 103,
    type: "adjective",
    question: "The manager gave a very ______ response.",
    choices: ["help", "helpful", "helpfully", "helpfulness"],
    answer: "helpful",
    translation: "マネージャーは非常に役立つ返答をした",
    comment: "名詞 response を修飾"
  },
  {
    id: 104,
    type: "verb",
    question: "The company plans to ______ its services next year.",
    choices: ["expand", "expansion", "expanding", "expanded"],
    answer: "expand",
    translation: "その会社は来年サービスを拡大する予定だ",
    comment: "to の後 → 動詞原形"
  },
  {
    id: 105,
    type: "adjective",
    question: "The results were quite ______.",
    choices: ["satisfy", "satisfied", "satisfactory", "satisfactorily"],
    answer: "satisfactory",
    translation: "結果はかなり満足のいくものだった",
    comment: "be動詞の後 → 形容詞"
  },

  {
    id: 106,
    type: "noun",
    question: "There has been a rapid ______ in demand.",
    choices: ["grow", "growth", "growing", "grown"],
    answer: "growth",
    translation: "需要が急速に増加している",
    comment: "a + 形容詞 + 名詞"
  },
  {
    id: 107,
    type: "adverb",
    question: "Employees must act ______ in emergencies.",
    choices: ["quick", "quickly", "quickness", "quicken"],
    answer: "quickly",
    translation: "従業員は緊急時に迅速に行動しなければならない",
    comment: "動詞 act を修飾"
  },
  {
    id: 108,
    type: "adjective",
    question: "The company faces serious ______ issues.",
    choices: ["finance", "financial", "financially", "financing"],
    answer: "financial",
    translation: "会社は深刻な財務問題に直面している",
    comment: "名詞を修飾"
  },
  {
    id: 109,
    type: "noun",
    question: "We appreciate your prompt ______.",
    choices: ["respond", "response", "responsive", "responding"],
    answer: "response",
    translation: "迅速な対応に感謝します",
    comment: "your の後 → 名詞"
  },
  {
    id: 110,
    type: "verb",
    question: "The new system will ______ efficiency.",
    choices: ["improve", "improvement", "improving", "improved"],
    answer: "improve",
    translation: "新システムは効率を向上させるだろう",
    comment: "will の後 → 動詞原形"
  },

  {
    id: 111,
    type: "adjective",
    question: "The presentation was very ______.",
    choices: ["interest", "interesting", "interested", "interestingly"],
    answer: "interesting",
    translation: "プレゼンはとても興味深かった",
    comment: "モノの性質 → ing"
  },
  {
    id: 112,
    type: "noun",
    question: "The manager made an important ______.",
    choices: ["decide", "decision", "deciding", "decisive"],
    answer: "decision",
    translation: "マネージャーは重要な決定をした",
    comment: "a + 形容詞 + 名詞"
  },
  {
    id: 113,
    type: "adverb",
    question: "The issue was handled very ______.",
    choices: ["careful", "carefully", "care", "caring"],
    answer: "carefully",
    translation: "問題は非常に慎重に扱われた",
    comment: "動詞を修飾"
  },
  {
    id: 114,
    type: "noun",
    question: "There is little ______ that the plan will fail.",
    choices: ["doubt", "doubtful", "doubting", "doubted"],
    answer: "doubt",
    translation: "その計画が失敗する可能性はほとんどない",
    comment: "little + 名詞"
  },
  {
    id: 115,
    type: "adjective",
    question: "The instructions were easy to ______.",
    choices: ["follow", "following", "followed", "follows"],
    answer: "follow",
    translation: "その指示は従いやすかった",
    comment: "to の後 → 動詞原形"
  },

  {
    id: 116,
    type: "noun",
    question: "The company showed significant ______.",
    choices: ["grow", "growth", "growing", "grown"],
    answer: "growth",
    translation: "会社は著しい成長を見せた",
    comment: "形容詞の後 → 名詞"
  },
  {
    id: 117,
    type: "adverb",
    question: "The report was written ______.",
    choices: ["clear", "clearly", "clarity", "clearing"],
    answer: "clearly",
    translation: "報告書は明確に書かれていた",
    comment: "動詞を修飾"
  },
  {
    id: 118,
    type: "adjective",
    question: "The company is seeking ______ candidates.",
    choices: ["experience", "experienced", "experiencefully", "experiencing"],
    answer: "experienced",
    translation: "会社は経験豊富な候補者を探している",
    comment: "人の状態 → ed"
  },
  {
    id: 119,
    type: "noun",
    question: "The sudden ______ caused confusion.",
    choices: ["cancel", "cancellation", "canceling", "canceled"],
    answer: "cancellation",
    translation: "突然のキャンセルが混乱を引き起こした",
    comment: "the + 名詞"
  },
  {
    id: 120,
    type: "verb",
    question: "The company aims to ______ its market share.",
    choices: ["increase", "increasing", "increased", "increasingly"],
    answer: "increase",
    translation: "会社は市場シェアを拡大することを目指している",
    comment: "to の後 → 動詞原形"
  },

  {
    id: 121,
    type: "adjective",
    question: "The results were extremely ______.",
    choices: ["impress", "impressive", "impressed", "impression"],
    answer: "impressive",
    translation: "結果は非常に印象的だった",
    comment: "be動詞の後 → 形容詞"
  },
  {
    id: 122,
    type: "adverb",
    question: "Employees must respond ______ to emails.",
    choices: ["quick", "quickly", "quickness", "quicken"],
    answer: "quickly",
    translation: "従業員はメールに迅速に対応しなければならない",
    comment: "動詞を修飾"
  },
  {
    id: 123,
    type: "noun",
    question: "The company is known for its high ______.",
    choices: ["quality", "qualify", "qualified", "qualifying"],
    answer: "quality",
    translation: "その会社は高品質で知られている",
    comment: "its の後 → 名詞"
  },
  {
    id: 124,
    type: "adjective",
    question: "The manager gave a highly ______ speech.",
    choices: ["motivate", "motivating", "motivated", "motivation"],
    answer: "motivating",
    translation: "マネージャーは非常にやる気を起こさせるスピーチをした",
    comment: "モノ → ing"
  },
  {
    id: 125,
    type: "noun",
    question: "There has been a noticeable ______.",
    choices: ["improve", "improvement", "improving", "improved"],
    answer: "improvement",
    translation: "顕著な改善があった",
    comment: "a の後 → 名詞"
  },

  {
    id: 126,
    type: "adverb",
    question: "The task was ______ completed.",
    choices: ["quick", "quickly", "quickness", "quicken"],
    answer: "quickly",
    translation: "作業は迅速に完了した",
    comment: "completed を修飾"
  },
  {
    id: 127,
    type: "adjective",
    question: "The company is facing ______ competition.",
    choices: ["intense", "intensely", "intensity", "intensify"],
    answer: "intense",
    translation: "会社は激しい競争に直面している",
    comment: "名詞を修飾"
  },
  {
    id: 128,
    type: "noun",
    question: "The manager provided a clear ______.",
    choices: ["explain", "explanation", "explaining", "explained"],
    answer: "explanation",
    translation: "マネージャーは明確な説明をした",
    comment: "a + 形容詞 + 名詞"
  },
  {
    id: 129,
    type: "verb",
    question: "The company will ______ new employees.",
    choices: ["hire", "hiring", "hired", "hires"],
    answer: "hire",
    translation: "会社は新しい従業員を雇うだろう",
    comment: "will の後 → 動詞原形"
  },
  {
    id: 130,
    type: "adjective",
    question: "The results were quite ______.",
    choices: ["surprise", "surprising", "surprised", "surprisingly"],
    answer: "surprising",
    translation: "結果はかなり驚くべきものだった",
    comment: "モノ → ing"
  },

  {
    id: 131,
    type: "noun",
    question: "The company showed great ______ in sales.",
    choices: ["increase", "increasing", "increased", "increasingly"],
    answer: "increase",
    translation: "会社は売上の大きな増加を示した",
    comment: "great の後 → 名詞"
  },
  {
    id: 132,
    type: "adverb",
    question: "The issue was ______ resolved.",
    choices: ["quick", "quickly", "quickness", "quicken"],
    answer: "quickly",
    translation: "問題は迅速に解決された",
    comment: "動詞を修飾"
  },
  {
    id: 133,
    type: "adjective",
    question: "The manager is a highly ______ individual.",
    choices: ["motivate", "motivated", "motivating", "motivation"],
    answer: "motivated",
    translation: "マネージャーは非常に意欲的な人物だ",
    comment: "人 → ed"
  },
  {
    id: 134,
    type: "noun",
    question: "The company made a significant ______.",
    choices: ["expand", "expansion", "expanding", "expanded"],
    answer: "expansion",
    translation: "会社は大きな拡大を行った",
    comment: "a + 形容詞 + 名詞"
  },
  {
    id: 135,
    type: "verb",
    question: "The system will ______ data automatically.",
    choices: ["process", "processing", "processed", "processes"],
    answer: "process",
    translation: "システムは自動的にデータを処理する",
    comment: "will の後 → 動詞原形"
  },

  {
    id: 136,
    type: "adjective",
    question: "The presentation was very ______.",
    choices: ["confuse", "confusing", "confused", "confusion"],
    answer: "confusing",
    translation: "プレゼンはとても分かりにくかった",
    comment: "モノ → ing"
  },
  {
    id: 137,
    type: "adverb",
    question: "Employees must work ______ to meet deadlines.",
    choices: ["hard", "hardly", "hardness", "harden"],
    answer: "hard",
    translation: "従業員は締め切りに間に合うよう一生懸命働かなければならない",
    comment: "hard = 副詞（-lyでない例）"
  },
  {
    id: 138,
    type: "noun",
    question: "There is a growing ______ for skilled workers.",
    choices: ["demand", "demanding", "demanded", "demands"],
    answer: "demand",
    translation: "熟練労働者の需要が高まっている",
    comment: "a + 形容詞 + 名詞"
  },
  {
    id: 139,
    type: "verb",
    question: "The company plans to ______ its operations.",
    choices: ["expand", "expansion", "expanding", "expanded"],
    answer: "expand",
    translation: "会社は事業を拡大する予定だ",
    comment: "to の後 → 動詞原形"
  },
  {
    id: 140,
    type: "adjective",
    question: "The results were extremely ______.",
    choices: ["satisfy", "satisfied", "satisfying", "satisfaction"],
    answer: "satisfying",
    translation: "結果は非常に満足のいくものだった",
    comment: "モノ → ing"
  },

  {
    id: 141,
    type: "noun",
    question: "The company showed steady ______.",
    choices: ["grow", "growth", "growing", "grown"],
    answer: "growth",
    translation: "会社は安定した成長を見せた",
    comment: "形容詞の後 → 名詞"
  },
  {
    id: 142,
    type: "adverb",
    question: "The report was written ______.",
    choices: ["clear", "clearly", "clarity", "clearing"],
    answer: "clearly",
    translation: "報告書は明確に書かれていた",
    comment: "動詞を修飾"
  },
  {
    id: 143,
    type: "adjective",
    question: "The manager gave a ______ explanation.",
    choices: ["detail", "detailed", "detailly", "detailing"],
    answer: "detailed",
    translation: "マネージャーは詳細な説明をした",
    comment: "名詞を修飾"
  },
  {
    id: 144,
    type: "noun",
    question: "The sudden ______ surprised everyone.",
    choices: ["arrive", "arrival", "arriving", "arrived"],
    answer: "arrival",
    translation: "突然の到着が皆を驚かせた",
    comment: "the + 名詞"
  },
  {
    id: 145,
    type: "verb",
    question: "The system will ______ errors automatically.",
    choices: ["detect", "detection", "detecting", "detected"],
    answer: "detect",
    translation: "システムは自動的にエラーを検出する",
    comment: "will の後 → 動詞原形"
  },

  {
    id: 146,
    type: "adjective",
    question: "The movie was very ______.",
    choices: ["interest", "interesting", "interested", "interestingly"],
    answer: "interesting",
    translation: "その映画はとても面白かった",
    comment: "モノ → ing"
  },
  {
    id: 147,
    type: "adverb",
    question: "Employees must respond ______ to requests.",
    choices: ["prompt", "promptly", "promptness", "prompting"],
    answer: "promptly",
    translation: "従業員は要請に迅速に対応しなければならない",
    comment: "動詞を修飾"
  },
  {
    id: 148,
    type: "noun",
    question: "The company made an important ______.",
    choices: ["decide", "decision", "deciding", "decisive"],
    answer: "decision",
    translation: "会社は重要な決定を下した",
    comment: "a + 形容詞 + 名詞"
  },
  {
    id: 149,
    type: "adjective",
    question: "The manager is a highly ______ person.",
    choices: ["motivate", "motivated", "motivating", "motivation"],
    answer: "motivated",
    translation: "マネージャーは非常に意欲的な人物だ",
    comment: "人 → ed"
  },
  {
    id: 150,
    type: "noun",
    question: "There has been a noticeable ______ in performance.",
    choices: ["improve", "improvement", "improving", "improved"],
    answer: "improvement",
    translation: "業績に顕著な改善があった",
    comment: "a + 形容詞 + 名詞"
  }
]