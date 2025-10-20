import React from "react";
import Quiz from "./components/Quiz";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/bic-quizz/" element={<Quiz />} />
    </Routes>
  );
}

export default App;
