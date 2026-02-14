import React, { useState, useEffect } from 'react';
import { ICONS, SCRAMBLED_WORD_SETS } from '../constants';

interface WordScrambleProps {
  onWin: () => void;
}

export const WordScramble: React.FC<WordScrambleProps> = ({ onWin }) => {
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [scrambled, setScrambled] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pick a random set from constants
    const randomSet = SCRAMBLED_WORD_SETS[Math.floor(Math.random() * SCRAMBLED_WORD_SETS.length)];
    setWords(randomSet);
    setLoading(false);
  }, []);

  const scrambleWord = (word: string) => {
    // Simple shuffle that ensures the word actually changes
    let shuffled = word.split('').sort(() => Math.random() - 0.5).join('');
    if (shuffled === word && word.length > 1) {
       return scrambleWord(word);
    }
    return shuffled;
  };

  useEffect(() => {
    if (words.length > 0 && currentIndex < words.length) {
      setScrambled(scrambleWord(words[currentIndex]));
    }
  }, [currentIndex, words]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === words[currentIndex].toUpperCase()) {
      if (currentIndex === words.length - 1) {
        onWin();
      } else {
        setCurrentIndex(prev => prev + 1);
        setInput('');
      }
    } else {
      // Small shake animation could go here
      setInput('');
    }
  };

  if (loading) return <div className="text-rose-500 animate-pulse text-xl">Loading your love letters...</div>;

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-rose-100 text-center">
      <h2 className="text-3xl font-romantic text-rose-600 mb-2">Love Letter Scramble</h2>
      <p className="text-gray-600 mb-8">Unscramble the letters to reveal our secrets!</p>

      <div className="bg-rose-50 p-6 rounded-2xl mb-8">
        <span className="text-4xl font-bold text-rose-600 tracking-widest uppercase break-all">
          {scrambled}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's the word?"
          className="flex-1 p-3 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-center uppercase font-bold"
          autoFocus
        />
        <button 
          type="submit"
          className="bg-rose-500 text-white p-3 rounded-xl hover:bg-rose-600 transition-colors shadow-md"
        >
          {ICONS.Send}
        </button>
      </form>
      
      <div className="mt-4 text-sm text-rose-400 font-semibold">
        Word {currentIndex + 1} of {words.length}
      </div>
    </div>
  );
};
