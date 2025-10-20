import React, { useState, useCallback } from "react";
import Home from "../Home";
import Question from "../Question";
import OrderQuestion from "../OrderQuestion";
import Results from "../Results";
import quizData from "../../quizData"; // Importation des données

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // -1 pour la page d'accueil
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [orderedOptions, setOrderedOptions] = useState([]);
  const [answers, setAnswers] = useState(() =>
    Array.from({ length: quizData.length }, () => []),
  );

  const handleHome = useCallback(() => {
    setCurrentQuestion(-1);
    setSelectedOptions([]);
    setOrderedOptions([]);
    setAnswers(Array.from({ length: quizData.length }, () => []));
  }, []);

  const handleOptionClick = useCallback((option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((opt) => opt !== option)
        : [...prev, option],
    );
  }, []);

  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const items = Array.from(orderedOptions);
      const [moved] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, moved);

      setOrderedOptions(items);
    },
    [orderedOptions],
  );

  const saveAnswer = useCallback(
    (index) => {
      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[index] =
          quizData[currentQuestion].type === "multiple-choice"
            ? selectedOptions
            : orderedOptions;
        return newAnswers;
      });
    },
    [currentQuestion, orderedOptions, selectedOptions],
  );

  const handleNext = useCallback(() => {
    saveAnswer(currentQuestion);

    setSelectedOptions([]);
    setOrderedOptions(
      quizData[currentQuestion + 1]?.type === "order"
        ? quizData[currentQuestion + 1].options
        : [],
    );

    setCurrentQuestion((prev) => prev + 1);
  }, [currentQuestion, saveAnswer]);

  const handlePrev = useCallback(() => {
    saveAnswer(currentQuestion);

    if (currentQuestion > 0) {
      setSelectedOptions(answers[currentQuestion - 1] || []);
      setOrderedOptions(answers[currentQuestion - 1] || []);
      setCurrentQuestion((prev) => prev - 1);
    } else {
      handleHome();
    }
  }, [currentQuestion, answers, saveAnswer, handleHome]);

  const handleSubmit = useCallback(() => {
    saveAnswer(currentQuestion);
    setCurrentQuestion(quizData.length);
  }, [currentQuestion, saveAnswer]);

  const handleStart = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setOrderedOptions(quizData[0]?.type === "order" ? quizData[0].options : []);
  }, []);

  return (
    <div className="quiz">
      {currentQuestion === -1 ? (
        <Home onStart={handleStart} />
      ) : currentQuestion < quizData.length ? (
        <>
          {quizData[currentQuestion].type === "multiple-choice" ? (
            <Question
              question={quizData[currentQuestion].question}
              options={quizData[currentQuestion].options}
              selectedOptions={selectedOptions}
              handleOptionClick={handleOptionClick}
            />
          ) : (
            <OrderQuestion
              question={quizData[currentQuestion].question}
              orderedOptions={
                orderedOptions.length
                  ? orderedOptions
                  : quizData[currentQuestion].options
              }
              handleDragEnd={handleDragEnd}
            />
          )}
          <div className="navigation">
            <button onClick={handlePrev}>
              {currentQuestion === 0 ? "Home" : "Previous"}
            </button>
            {currentQuestion < quizData.length - 1 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button onClick={handleSubmit} className="submit-button">
                Finish
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <Results answers={answers} quizData={quizData} />
          <div className="navigation">
            <button onClick={handleHome}>Home</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
