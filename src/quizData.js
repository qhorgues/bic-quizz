const quizData = [
  {
    type: "multiple-choice",
    question: "What is the main operational model of BIC?",
    options: [
      "Mass production of disposable consumer goods",
      "Custom-made artisanal goods",
      "Luxury product manufacturing",
      "Subscription-based services",
    ],
    correctAnswers: ["Mass production of disposable consumer goods"],
  },
  {
    type: "order",
    question: "Arrange the creation of BIC products in chronological order",
    options: [
      { id: "1", content: "Razors" },
      { id: "2", content: "Lighters" },
      { id: "3", content: "Pens" },
      { id: "4", content: "Correction products" },
    ],
    correctOrder: [
      { id: "3", content: "Pens" },
      { id: "2", content: "Lighters" },
      { id: "1", content: "Razors" },
      { id: "4", content: "Correction products" },
    ],
  },
  {
    type: "multiple-choice",
    question:
      "How many one-way trips between Earth and Pluto would it take to equal the total distance traveled by the ink in all BIC pens sold?",
    options: ["10", "20", "40", "50", "100", "200"],
    correctAnswers: ["40"],
  },
  {
    type: "multiple-choice",
    question: "Which BIC product line(s) are the most profitable?",
    options: ["Blade excellence", "Human ressources", "Flame for life"],
    correctAnswers: ["Flame for life"],
  },
  {
    type: "multiple-choice",
    question: "Which of the following products are NOT manufactured by BIC?",
    options: [
      "Toothbrushes",
      "Disposable razors",
      "Lighters",
      "Ballpoint pens",
      "Perfume",
      "Correction fluid",
    ],
    correctAnswers: ["Toothbrushes", "Perfume"],
  },
  {
    type: "multiple-choice",
    question: "What is the name of the iconic BIC pen introduced in 1950?",
    options: ["BIC Original", "BIC Point", "BIC Cristal", "BIC Classic"],
    correctAnswers: ["BIC Cristal"],
  },
  {
    type: "multiple-choice",
    question: "Which markets does BIC NOT primarily target?",
    options: [
      "Luxury fashion",
      "Education",
      "Office supplies",
      "Personal care",
    ],
    correctAnswers: ["Luxury fashion"],
  },
];

export default quizData;
