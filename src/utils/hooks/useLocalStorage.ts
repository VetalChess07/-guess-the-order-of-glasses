import { useState, useEffect } from 'react';

const UseLocalStorage = (key, initialValue, ) => {
  const storedValue = localStorage.getItem(key);

  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default UseLocalStorage;