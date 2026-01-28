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

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, onRetry, history }) => {
    const isNormal = score <= 1;
    const message = isNormal ? '目前狀況正常' : '建議進一步諮詢';
    const description = isNormal
        ? '建議：請持續保持身心活躍與社交。'
        : '建議：分數顯示可能有早期失智風險，強烈建議前往醫院神經內科或精神科進行專業評估。';

    const color = isNormal ? '#2E7D32' : '#D32F2F';
    const bgColor = isNormal ? '#E8F5E9' : '#FFEBEE';

    return (
        <div style={{ paddingBottom: '40px', width: '100%' }}>
            <div className="result-card" style={{
                textAlign: 'center',
                padding: '40px',
                border: `4px solid ${color}`,
                borderRadius: '16px',
                backgroundColor: bgColor,
                marginBottom: '40px'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>您的檢測結果</h2>
                <div role="text" aria-label={`得分 ${score} 分`}
                    style={{ fontSize: '5rem', fontWeight: 'bold', color: color, margin: '20px 0' }}>
                    {score} 分
                </div>
                <h3 style={{ fontSize: '2rem', color: color, marginBottom: '20px' }}>{message}</h3>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{description}</p>
            </div>

            <button onClick={onRetry} style={{ width: '100%', marginBottom: '60px' }}>
                重新測驗
            </button>

            {history.length > 0 && (
                <div className="history-section" style={{ borderTop: '2px solid #eee', paddingTop: '20px' }}>
                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>歷史記錄</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {history.slice().reverse().map((item, index) => (
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
                                    color: item.score >= 2 ? '#D32F2F' : '#2E7D32',
                                    backgroundColor: item.score >= 2 ? '#FFEBEE' : '#E8F5E9',
                                    padding: '5px 15px',
                                    borderRadius: '20px'
                                }}>
                                    {item.score} 分
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
