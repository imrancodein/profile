// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light' // लोकल स्टोरेज से शुरुआती थीम लें
  );

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement; // <html> एलिमेंट
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // थीम को लोकल स्टोरेज में सेव करें
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return [colorTheme, toggleTheme];
}

export default useDarkMode;