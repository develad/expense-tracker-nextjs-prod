'use client';

import { useState, useEffect } from 'react';
import {
  MaterialSymbolsLightMoonStars,
  MaterialSymbolsSunnyRounded,
} from '@/components/Icons';

import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setDarkMode(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));
  }, []);

  useEffect(() => {
    // Update DOM and localStorage when theme changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleThemeToggle = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDarkMode(!darkMode);
    }
  };

  return (
    <button
      onClick={handleThemeToggle}
      id="themeToggle"
      aria-label="Toggle theme"
      disabled={isAnimating}
    >
      <AnimatePresence
        mode="popLayout"
        onExitComplete={() => setIsAnimating(false)}
      >
        {darkMode ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, x: '100%', scale: 0 }}
            animate={{ opacity: 1, x: '0', scale: 1 }}
            exit={{ opacity: 0, x: '-100%', scale: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeIn',
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <MaterialSymbolsSunnyRounded
              style={{ fontSize: '1.8rem', marginTop: '8px' }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, x: '100%', scale: 0 }}
            animate={{ opacity: 1, x: '0', scale: 1 }}
            exit={{ opacity: 0, x: '-100%', scale: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeIn',
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <MaterialSymbolsLightMoonStars
              style={{ fontSize: '1.8rem', marginTop: '8px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
