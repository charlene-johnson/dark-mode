import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, value) => {
    const [someValue, setSomeValue] = useLocalStorage(key, value);
    

}
