import { useState, useEffect } from "react";

/*
  converts useState into useLocalStorage
  
  looks for key in local storage, 
    if found 
      sets value to useState and returns local useState
    if not found
      sets local state to null
      null causes local storage to remove key and returns local useState
  use the return item and set item to sync localStorage with global context
*/

const useLocalStorage = (key, firstValue = null) => {
  const initialValue = localStorage.getItem(key) || firstValue;
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
};

export default useLocalStorage;
