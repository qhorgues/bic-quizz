import React from 'react';

const Results = ({ answers, quizData }) => {
  const getColor = (correctAnswers, selectedOptions, option) => {
    if (selectedOptions.includes(option) && correctAnswers.includes(option)) {
      return 'green';  // Correcte et cochée
    } else if (selectedOptions.includes(option)) {
      return 'red';  // Incorrecte et cochée
    } else if (correctAnswers.includes(option)) {
      return 'yellow';  // Correcte et non cochée
    } else {
      return ''; // Pas sélectionnée et incorrecte
    }
  };

  return (
    <div className="results">
      {quizData.map((questionData, qIndex) => (
        <div key={qIndex} className="question-result">
          <h3>{questionData.question}</h3>
          <ul>
            {questionData.options.map((option, oIndex) => (
              <li
                key={oIndex}
                className={`option ${getColor(questionData.correctAnswers, answers[qIndex], option)}`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Results;
