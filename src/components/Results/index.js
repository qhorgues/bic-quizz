import React from 'react';

const Results = ({ answers, quizData }) => {
  const getColor = (option, correctOrder, userOrder) => {
    const userIndex = userOrder.findIndex(o => o.id === option.id);
    const correctIndex = correctOrder.findIndex(o => o.id === option.id);
    return userIndex === correctIndex ? 'green' : 'red';
  };

  return (
    <div className="results">
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
