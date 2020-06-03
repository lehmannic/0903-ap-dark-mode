import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode); 
  }, [darkMode])
  return [darkMode, setDarkMode];
};
