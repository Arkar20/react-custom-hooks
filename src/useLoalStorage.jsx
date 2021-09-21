import { useEffect, useState } from "react";

function getSavedData(key, initialValue) {
  const result = JSON.parse(localStorage.getItem(key));

  if (result) return result;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedData(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
