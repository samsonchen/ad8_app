import { useState } from 'react';
import { Layout } from './components/Layout';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';

type Screen = 'start' | 'quiz' | 'result';

interface HistoryItem {
  date: string;
  score: number;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const saved = localStorage.getItem('bbs_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
    return [];
  });

  const handleStart = () => {
    setCurrentScreen('quiz');
  };

  const handleFinish = (finalScore: number) => {
    setScore(finalScore);
    const newItem = { date: new Date().toISOString(), score: finalScore };
    const newHistory = [...history, newItem];
    setHistory(newHistory);
    localStorage.setItem('bbs_history', JSON.stringify(newHistory));
    setCurrentScreen('result');
    window.scrollTo(0, 0);
  };

  const handleRetry = () => {
    setCurrentScreen('start');
    setScore(0);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      {currentScreen === 'start' && <StartScreen onStart={handleStart} />}
      {currentScreen === 'quiz' && <QuizScreen onFinish={handleFinish} />}
      {currentScreen === 'result' && (
        <ResultScreen score={score} onRetry={handleRetry} history={history} />
      )}
    </Layout>
  );
}

export default App;
