import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                       (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('darkMode', String(newIsDark));
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 p-3 bg-w3-bg-secondary dark:bg-w3-secondary 
                 rounded-full shadow-lg transition-all duration-300 
                 hover:scale-110 active:scale-95
                 border border-w3-primary/10 dark:border-w3-primary/20
                 hover:neon-glow-purple dark:hover:neon-glow-purple-dark z-50"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-w3-accent-purple" />
      )}
    </button>
  );
}
