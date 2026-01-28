import React from 'react';

interface StartScreenProps {
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>伯格氏平衡量表 <br /><span style={{ fontSize: '0.8em' }}>(BBS)</span></h1>
            <div style={{ margin: '40px 0', fontSize: '1.3rem', lineHeight: '1.8' }}>
                <p>請完成以下 14 個平衡測試項目</p>
                <p>這有助於評估平衡能力<br />以及跌倒風險。</p>
            </div>
            <button onClick={onStart} autoFocus style={{ width: '100%', maxWidth: '300px' }}>
                開始評估
            </button>
        </div>
    );
};
