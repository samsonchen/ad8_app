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
                    <strong>重要聲明：</strong> 本測驗結果僅供參考，並非專業醫療診斷。若有任何疑慮，請務必諮詢專業醫師。
                </div>
            </footer>
        </div>
    );
};
