import React, { useState } from 'react';
import Question from '../Question';
import Results from '../Results';
import Home from '../Home';


const quizData = [
  {
    question: "Question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswers: ["Option 2", "Option 3"]
  },
  {
    question: "Question 2",
    options: ["Banane", "pomme"],
    correctAnswers: ["Banane"]
  },
  {
    question: "Question 3",
    options: ["Caramel", "Chocolat"],
    correctAnswers: ["Chocolat"]
  }
  // Ajoute plus de questions ici
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // -1 pour la page d'accueil
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState(Array(quizData.length).fill([]));

  const handleOptionClick = (option) => {
    setSelectedOptions(prev =>
      prev.includes(option) ? prev.filter(opt => opt !== option) : [...prev, option]
    );
  };

  const handleNext = () => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = selectedOptions;
      return newAnswers;
    });
    setSelectedOptions(answers[currentQuestion + 1] || []);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = selectedOptions;
        return newAnswers;
      });
      setSelectedOptions(answers[currentQuestion - 1] || []);
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setCurrentQuestion(-1); // Retour à la page d'accueil
    }
  };

  const handleSubmit = () => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = selectedOptions;
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
    setAnswers(Array(quizData.length).fill([])); // Réinitialise les réponses
  };

  return (
    <div className="quiz">
      {currentQuestion === -1 ? (
        <Home onStart={handleStart} />
      ) : currentQuestion < quizData.length ? (
        <>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
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
