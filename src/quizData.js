const quizData = [
    {
      type: 'multiple-choice',
      question: "How long do we usually dream each night ?",
      options: ["1 hours", "2 hours", "3 hours", "4 hours"],
      correctAnswers: ["2 hours"]
    },
    {
      type: 'order',
      question: "Arrange sleep cycle stage in correct order",
      options: [
        { id: '1', content: "Vivid dreaming" },
        { id: '2', content: "The lightest stage of sleep"},
        { id: '3', content: "Deep sleep" },
        { id: '4', content: "Light sleep" }
      ],
      correctOrder: [
        { id: '2', content: "The lightest stage of sleep"},
        { id: '4', content: "Light sleep" },
        { id: '3', content: "Deep sleep" },
        { id: '1', content: "Vivid dreaming" }
      ]
    },
    {
      type: 'multiple-choice',
      question: "What is the deep sleep time for one cycle ?",
      options: ["20 - 40 min", "10 - 25 min", "15 - 30 min", "45 - 60 min"],
      correctAnswers: ["20 - 40 min"]
    },
    {
      type: 'multiple-choice',
      question: "What is the recommanded sleep time ?",
      options: ["6 hours", "7 hours", "7.30 hours", "8 hours", ],
      correctAnswers: ["8 hours"]
    },
    {
      type: 'multiple-choice',
      question: "What are the many causes of nightmares ?",
      options: ["Drug", "Fear", "Heartbreak", "Stress", "Illness", "Not eating enougt", "Alcoholism", "Traumatism"],
      correctAnswers:  ["Drug", "Fear", "Stress", "Illness", "Traumatism"]
    },
    {
      type: 'multiple-choice',
      question: "What are the consequences of a bad night sleep ?",
      options: ["Anxiety", "Smarter", "Stress", "Traumatism", "More focused", "Risk of cardiovascular problems"],
      correctAnswers: ["Anxiety", "Stress", "Risk of cardiovascular problems"],
    }
    // Ajoute plus de questions ici
  ];

export default quizData;