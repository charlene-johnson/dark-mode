import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, value) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, value);
    
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
      // toggle dark mode after page has loaded
    useEffect(()=> {
        if(darkMode === false) {
            document.querySelector("body").classList.remove('dark-mode')
        } else {
            document.querySelector("body").classList.toggle('dark-mode')
        }
    }, [darkMode])
    return [darkMode, toggleMode]
}
