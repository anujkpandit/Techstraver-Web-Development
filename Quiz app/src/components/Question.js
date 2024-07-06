import React from 'react';

const Question = ({ questionIndex, question, userAnswer, handleAnswerOptionClick }) => {
  return (
    <div className='question-section'>
      <div className='question-text'>{question.question}</div>
      <div className='answer-section'>
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className={userAnswer === answer ? 'selected' : ''}
            onClick={() => handleAnswerOptionClick(questionIndex, answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
