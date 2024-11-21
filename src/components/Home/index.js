import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="home">
      <h1>Welcome to the Dreems and Sleeps Quiz</h1>
      <button onClick={onStart}>Commencer le quiz</button>
    </div>
  );
}

export default Home;
