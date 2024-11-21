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
      question: "Arrange these options in correct order",
      options: [
        { id: '1', content: "Option A" },
        { id: '2', content: "Option B" },
        { id: '3', content: "Option C" },
        { id: '4', content: "Option D" }
      ],
      correctOrder: [
        { id: '3', content: "Option C" },
        { id: '1', content: "Option A" },
        { id: '4', content: "Option D" },
        { id: '2', content: "Option B" }
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