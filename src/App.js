import React from 'react';
import Quiz from './components/Quiz';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/dream_and_sleep/" element={<Quiz/>}/>
    </Routes>
  );
}

export default App;