import React from 'react';

const Results = ({ answers, quizData }) => {
  const wordList = [
    "Restorative",
    "REM",
    "Consists of 9 characters",
    "Tranquility",
    "Serenity",
    "Sleep",
    "The word is in two words",
    "It's a word composed",
    "Nocturnal",
    "Quietude",
    "Repose",
    "Relaxation",
    "Unconscious",
    "Dreamless",
    "Stillness"
  ];
  

  const calculateScore = () => {
    let score = 0;
    let maxScore = 0;

    quizData.forEach((questionData, qIndex) => {
      if (questionData.type === 'multiple-choice') {
        questionData.options.forEach((option) => {
          if (answers[qIndex].includes(option)) {
            if (questionData.correctAnswers.includes(option)) {
              score += 1;
            } else {
              score -= 0.5;
            }
          }
        });
        maxScore += questionData.correctAnswers.length;
      } else if (questionData.type === 'order') {
        questionData.correctOrder.forEach((option, oIndex) => {
          if (answers[qIndex][oIndex] && answers[qIndex][oIndex].id === option.id) {
            score += 1;
          }
        });
        maxScore += questionData.correctOrder.length;
      }
    });

    return { score, maxScore };
  };

  const { score, maxScore } = calculateScore();
  const successRate = Math.max(0, (score / maxScore) * 100).toFixed(2);

  const getColor = (option, correctOrder, userOrder) => {
    const userIndex = userOrder.findIndex(o => o.id === option.id);
    const correctIndex = correctOrder.findIndex(o => o.id === option.id);
    return userIndex === correctIndex ? 'green' : 'red';
  };

  const getRandomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  };

  return (
    <div className="results">
      <h2>Results</h2>
      <p>Success rate : {successRate}%</p>
      {successRate > 50 && <p>The clue is: {getRandomWord()}</p>}
      {quizData.map((questionData, qIndex) => (
        <div key={qIndex} className="question-result">
          <h3>{questionData.question}</h3>
          <ul>
            {questionData.type === 'multiple-choice' ? (
              questionData.options.map((option, oIndex) => (
                <li
                  key={oIndex}
                  className={`option ${answers[qIndex].includes(option) ? (questionData.correctAnswers.includes(option) ? 'green' : 'red') : (questionData.correctAnswers.includes(option) ? 'yellow' : '')}`}
                >
                  {option}
                </li>
              ))
            ) : (
              questionData.correctOrder.map((option, oIndex) => (
                <li
                  key={option.id}
                  className={`draggable-option ${getColor(option, questionData.correctOrder, answers[qIndex])}`}
                >
                  {option.content}
                </li>
              ))
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Results;
