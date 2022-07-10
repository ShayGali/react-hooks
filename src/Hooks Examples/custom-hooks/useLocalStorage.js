import {useState, useEffect} from "react";

// מחזיר את הערך מה-localStorage לפי ה key אם הוא קיים, אם לא הוא מחזיר את ה initValue
function getSavedValue(key, initValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initValue instanceof Function) return initValue(); // initValue can be function - like useState(()=> "")
  return initValue;
}

export default function useLocalStorage(key, initState) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initState);
  });

  useEffect(() => { // Keeps track on changes in the value of a variable, and saves the change to the localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
