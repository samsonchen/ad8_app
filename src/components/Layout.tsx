import React, { type ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            <main className="main-content">
                {children}
            </main>
            <footer className="disclaimer-footer" role="contentinfo">
                <div className="disclaimer-text">
                    <strong>重要聲明：</strong> 本評估結果僅供參考，並非專業醫療診斷。平衡能力評估需由專業人員執行，若有任何疑慮，請諮詢物理治療師或醫師。
                </div>
            </footer>
        </div>
    );
};
