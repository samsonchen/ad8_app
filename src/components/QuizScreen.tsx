import React, { useState } from 'react';
import { questions } from '../data/questions';

interface QuizScreenProps {
    onFinish: (score: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onFinish }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (points: number) => {
        const nextScore = score + points;

        if (currentIndex < questions.length - 1) {
            setScore(nextScore);
            setCurrentIndex(currentIndex + 1);
        } else {
            // Last question answered
            setScore(nextScore);
            onFinish(nextScore);
        }
    };

    const scoreButtons = [0, 1, 2, 3, 4];

    return (
        <div style={{ width: '100%' }}>
            <div role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={1} aria-valuemax={questions.length}
                style={{ marginBottom: '20px', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
                項目 {currentIndex + 1} / {questions.length}
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

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap'
            }}>
                {scoreButtons.map((points) => (
                    <button
                        key={points}
                        onClick={() => handleAnswer(points)}
                        style={{
                            width: '60px',
                            height: '60px',
                            fontSize: '1.8rem',
                            fontWeight: 'bold',
                            borderRadius: '12px',
                            border: '3px solid #1976D2',
                            backgroundColor: '#E3F2FD',
                            color: '#1976D2',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {points}
                    </button>
                ))}
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '20px',
                fontSize: '1.1rem',
                color: '#666'
            }}>
                0 = 無法執行 ← → 4 = 獨立完成
            </div>
        </div>
    );
};
