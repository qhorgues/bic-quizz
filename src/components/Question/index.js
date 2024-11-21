import React from 'react';

const Question = ({ question, options, selectedOptions, handleOptionClick }) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li 
            key={index} 
            className={`option ${selectedOptions.includes(option) ? 'selected' : ''}`} 
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
