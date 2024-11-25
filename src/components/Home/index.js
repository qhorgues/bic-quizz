import React from 'react';

const Home = ({ onStart }) => {
  return (
    <div className="home">
      <h1>Welcome to the Dreams and Sleeps Quiz</h1>
      <button onClick={onStart}>Start quiz</button>
    </div>
  );
}

export default Home;
