import React, { useState } from 'react';
import Home from '../Home';
import Question from '../Question';
import OrderQuestion from '../OrderQuestion';
import Results from '../Results';
import quizData from '../../quizData'; // Importation des données

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // -1 pour la page d'accueil
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [orderedOptions, setOrderedOptions] = useState([]);
  const [answers, setAnswers] = useState(Array(quizData.length).fill([]));

  const handleOptionClick = (option) => {
    setSelectedOptions(prev =>
      prev.includes(option) ? prev.filter(opt => opt !== option) : [...prev, option]
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newOrderedOptions = Array.from(orderedOptions.length ? orderedOptions : quizData[currentQuestion].options);
    const [removed] = newOrderedOptions.splice(result.source.index, 1);
    newOrderedOptions.splice(result.destination.index, 0, removed);

    setOrderedOptions(newOrderedOptions);
  };

  const handleNext = () => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = quizData[currentQuestion].type === 'multiple-choice' ? selectedOptions : orderedOptions;
      return newAnswers;
    });
    setSelectedOptions([]);
    setOrderedOptions(quizData[currentQuestion + 1]?.type === 'order' ? quizData[currentQuestion + 1].options : []);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = quizData[currentQuestion].type === 'multiple-choice' ? selectedOptions : orderedOptions;
        return newAnswers;
      });
      setSelectedOptions(answers[currentQuestion - 1] || []);
      setOrderedOptions(answers[currentQuestion - 1] || []);
      setCurrentQuestion(currentQuestion - 1);
    } else {
      handleHome();
    }
  };

  const handleSubmit = () => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = quizData[currentQuestion].type === 'multiple-choice' ? selectedOptions : orderedOptions;
      return newAnswers;
    });
    setCurrentQuestion(quizData.length);
  };

  const handleStart = () => {
    setCurrentQuestion(0);
  };

  const handleHome = () => {
    setCurrentQuestion(-1);
    setSelectedOptions([]);
    setOrderedOptions([]);
    setAnswers(Array(quizData.length).fill([])); // Réinitialise les réponses
  };

  return (
    <div className="quiz">
      {currentQuestion === -1 ? (
        <Home onStart={handleStart} />
      ) : currentQuestion < quizData.length ? (
        <>
          {quizData[currentQuestion].type === 'multiple-choice' ? (
            <Question
              question={quizData[currentQuestion].question}
              options={quizData[currentQuestion].options}
              selectedOptions={selectedOptions}
              handleOptionClick={handleOptionClick}
            />
          ) : (
            <OrderQuestion
              question={quizData[currentQuestion].question}
              orderedOptions={orderedOptions.length ? orderedOptions : quizData[currentQuestion].options}
              handleDragEnd={handleDragEnd}
            />
          )}
          <div className="navigation">
            <button onClick={handlePrev}>
              {currentQuestion === 0 ? 'Accueil' : 'Précédent'}
            </button>
            {currentQuestion < quizData.length - 1 ?
              <button onClick={handleNext}>Suivant</button> :
              <button onClick={handleSubmit} className="submit-button">Terminer</button>}
          </div>
        </>
      ) : (
        <>
          <Results answers={answers} quizData={quizData} />
          <div className="navigation">
            <button onClick={handleHome}>Accueil</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
