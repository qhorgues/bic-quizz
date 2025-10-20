import React from "react";

const Home = ({ onStart }) => {
  return (
    <div className="home">
      <h1>Welcome to the Bic Quizz</h1>
      <button onClick={onStart}>Start quiz</button>
    </div>
  );
};

export default Home;
