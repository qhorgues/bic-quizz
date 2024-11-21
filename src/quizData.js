const quizData = [
    {
      type: 'multiple-choice',
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswers: ["Option 2", "Option 3"]
    },
    {
      type: 'multiple-choice',
      question: "Question 2",
      options: ["Banane", "pomme"],
      correctAnswers: ["Banane"]
    },
    {
      type: 'order',
      question: "Arrange sleep cycle stage in correct order",
      options: [
        { id: '1', content: "Vivid dreaming" },
        { id: '2', content: "Deep sleep" },
        { id: '3', content: "Light sleep" }
      ],
      correctOrder: [
        { id: '3', content: "Light sleep" },
        { id: '2', content: "Deep sleep" },
        { id: '1', content: "Vivid dreaming" }
      ]
    },
    {
      type: 'multiple-choice',
      question: "Question 3",
      options: ["Caramel", "Chocolat"],
      correctAnswers: ["Chocolat"]
    }
    // Ajoute plus de questions ici
  ];

export default quizData;