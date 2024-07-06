import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const quizQuestions = {
    general: [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Rome", "Berlin"],
            correct: "Paris"
        },
        {
            question: "What is 2 + 2?",
            answers: ["3", "4", "5", "6"],
            correct: "4"
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: ["Earth", "Jupiter", "Mars", "Saturn"],
            correct: "Jupiter"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for water?",
            answers: ["O2", "H2O", "CO2", "NaCl"],
            correct: "H2O"
        },
        {
            question: "How many bones are in the human body?",
            answers: ["206", "208", "210", "212"],
            correct: "206"
        },
        {
            question: "What planet is known as the Red Planet?",
            answers: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Mars"
        }
    ]
};


const Quiz = () => {
    const [category, setCategory] = useState('general');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleAnswerOptionClick = (questionIndex, answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = answer;
        setUserAnswers(updatedAnswers);

        const isCorrect = answer === quizQuestions[category][questionIndex].correct;
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setScore(0);
        setShowScore(false);
        setUserAnswers([]);
    };

    const handleSubmit = () => {
        setShowScore(true);
    };

    return (
        <div className='app'>
            <h1>Quiz App</h1>
            <label>
                Select Category:
                <select onChange={handleCategoryChange} value={category}>
                    <option value="general">General Knowledge</option>
                    <option value="science">Science</option>
                </select>
            </label>
            <div className="quiz-section">
                {showScore ? (
                    <Score score={score} totalQuestions={quizQuestions[category].length} />
                ) : (
                    <div className="question-list">
                        {quizQuestions[category].map((question, index) => (
                            <Question
                                key={index}
                                questionIndex={index}
                                question={question}
                                userAnswer={userAnswers[index]}
                                handleAnswerOptionClick={handleAnswerOptionClick}
                            />
                        ))}
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;