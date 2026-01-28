import React from 'react';

interface HistoryItem {
    date: string;
    score: number;
}

interface ResultScreenProps {
    score: number;
    onRetry: () => void;
    history: HistoryItem[];
}

const getScoreCategory = (score: number) => {
    if (score >= 41) {
        return {
            level: 'low',
            message: '平衡能力良好',
            description: '跌倒風險低。建議持續保持規律運動，維持良好的平衡能力。',
            color: '#2E7D32',
            bgColor: '#E8F5E9'
        };
    } else if (score >= 21) {
        return {
            level: 'medium',
            message: '平衡能力中等',
            description: '有跌倒風險。建議進行平衡訓練，並注意居家環境安全，必要時諮詢物理治療師。',
            color: '#F57C00',
            bgColor: '#FFF3E0'
        };
    } else {
        return {
            level: 'high',
            message: '平衡能力較差',
            description: '跌倒風險高。強烈建議諮詢專業醫療人員，進行詳細評估並接受物理治療。',
            color: '#D32F2F',
            bgColor: '#FFEBEE'
        };
    }
};

const getHistoryColor = (score: number) => {
    if (score >= 41) {
        return { color: '#2E7D32', bgColor: '#E8F5E9' };
    } else if (score >= 21) {
        return { color: '#F57C00', bgColor: '#FFF3E0' };
    } else {
        return { color: '#D32F2F', bgColor: '#FFEBEE' };
    }
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, onRetry, history }) => {
    const category = getScoreCategory(score);

    return (
        <div style={{ paddingBottom: '40px', width: '100%' }}>
            <div className="result-card" style={{
                textAlign: 'center',
                padding: '40px',
                border: `4px solid ${category.color}`,
                borderRadius: '16px',
                backgroundColor: category.bgColor,
                marginBottom: '40px'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>您的評估結果</h2>
                <div role="text" aria-label={`得分 ${score} 分`}
                    style={{ fontSize: '5rem', fontWeight: 'bold', color: category.color, margin: '20px 0' }}>
                    {score} / 56 分
                </div>
                <h3 style={{ fontSize: '2rem', color: category.color, marginBottom: '20px' }}>{category.message}</h3>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{category.description}</p>
            </div>

            <button onClick={onRetry} style={{ width: '100%', marginBottom: '60px' }}>
                重新評估
            </button>

            {history.length > 0 && (
                <div className="history-section" style={{ borderTop: '2px solid #eee', paddingTop: '20px' }}>
                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>歷史記錄</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {history.slice().reverse().map((item, index) => {
                            const historyColors = getHistoryColor(item.score);
                            return (
                                <li key={index} style={{
                                    padding: '20px',
                                    borderBottom: '1px solid #ddd',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '1.2rem'
                                }}>
                                    <span>{new Date(item.date).toLocaleString('zh-TW', { hour12: false })}</span>
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: historyColors.color,
                                        backgroundColor: historyColors.bgColor,
                                        padding: '5px 15px',
                                        borderRadius: '20px'
                                    }}>
                                        {item.score} 分
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};
