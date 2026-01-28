import React from 'react';

interface StartScreenProps {
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>失智症早期徵兆自我檢測 <br /><span style={{ fontSize: '0.8em' }}>(AD8 量表)</span></h1>
            <div style={{ margin: '40px 0', fontSize: '1.3rem', lineHeight: '1.8' }}>
                <p>請回答以下 8 個問題</p>
                <p>這有助於了解您或您的親友<br />是否有記憶或思考方面的改變。</p>
            </div>
            <button onClick={onStart} autoFocus style={{ width: '100%', maxWidth: '300px' }}>
                開始檢測
            </button>
        </div>
    );
};
