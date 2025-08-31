// src/useTypingEffect.js
import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed = 50, delay = 0) => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    let currentCharacterIndex = 0;
    let timeoutId;

    const startTyping = () => {
      timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(currentCharacterIndex));
        currentCharacterIndex++;

        if (currentCharacterIndex < text.length) {
          startTyping();
        } else {
          setIsTypingComplete(true);
        }
      }, speed);
    };

    // Apply initial delay before starting typing
    const initialDelayTimeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialDelayTimeout);
      setTypedText(''); // Reset on unmount or text change
      setIsTypingComplete(false);
    };
  }, [text, speed, delay]);

  return { typedText, isTypingComplete };
};

export default useTypingEffect;