import React, { useState } from 'react';
import { questions } from '../data/questions';

interface QuizScreenProps {
    onFinish: (score: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onFinish }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (isYes: boolean) => {
        // Yes (isYes=true) adds 1 point (Problem/Change detected)
        // No (isYes=false) adds 0 points (No change)
        // However, we process the score *after* the click.
        // Wait, state update is async. I'll calculate `finalScore` for passing to finish.

        // Correct logic:
        // If this is the last question, we need to include this answer in the score passed to onFinish.

        const point = isYes ? 1 : 0;
        const nextScore = score + point;

        if (currentIndex < questions.length - 1) {
            setScore(nextScore);
            setCurrentIndex(currentIndex + 1);
        } else {
            // Last question answered
            setScore(nextScore);
            onFinish(nextScore);
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <div role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={questions.length}
                style={{ marginBottom: '20px', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
                問題 {currentIndex + 1} / {questions.length}
            </div>

            <div className="question-card" style={{
                backgroundColor: '#FFFFFF',
                padding: '30px',
                borderRadius: '16px',
                marginBottom: '40px',
                border: '3px solid #000'
            }}>
                <h2 style={{ fontSize: '2rem', lineHeight: '1.5', margin: 0, textAlign: 'center' }}>
                    {questions[currentIndex]}
                </h2>
            </div>

            <div className="quiz-actions">
                <button
                    onClick={() => handleAnswer(true)}
                    className="quiz-btn"
                    style={{
                        backgroundColor: '#FFEBEE',
                        color: '#D32F2F',
                        borderColor: '#D32F2F'
                    }}
                >
                    <span>是</span>
                    <span style={{ fontSize: '1rem', marginTop: '5px' }}>有改變</span>
                </button>
                <button
                    onClick={() => handleAnswer(false)}
                    className="quiz-btn"
                    style={{
                        backgroundColor: '#E8F5E9',
                        color: '#2E7D32',
                        borderColor: '#2E7D32'
                    }}
                >
                    <span>否</span>
                    <span style={{ fontSize: '1rem', marginTop: '5px' }}>無改變</span>
                </button>
            </div>
        </div>
    );
};
