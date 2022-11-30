import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Results = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.confirm("Are you sure you want to back to home?") === true) {
      navigate("/");
    }
  };

  return (
    <div className="results">
      <h1 className="header">Quiz results</h1>
      <h2>
        Total score: <span className="score">{location.state.results.score}</span>
      </h2>
      <h3>Wrong answer: </h3>
      {location.state.results.wrong_answer.map((answer, index) => (
        <div key={index}>
          <p>
            <b>{answer.question}</b>
          </p>
          <p className="answer">
            <b>Your answer:</b>
            <span className="wrong-answer">
              {" "}
              {answer.answer || "No answer"}
            </span>
          </p>
          <p className="answer">
            <b>Correct answer:</b>
            <span className="correct-answer">
              {" " + answer.correct_answer}
            </span>
          </p>
        </div>
      ))}
      <Button variant="primary" onClick={handleBack}>
        Back to Home
      </Button>
    </div>
  );
};

export default Results;
