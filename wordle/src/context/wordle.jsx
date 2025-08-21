import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import DictionaryAPI from "../services/dictionary";

export const WordleContext = createContext(null);

export function WordleContextProvider({ children }) {
  let [wordleWord, setWordleWord] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    DictionaryAPI.shared.getWordleWord().then((word) => {
      setTimeout(() => {
        setLoading(false);
        setWordleWord(word);
      }, 3000);
      // setLoading(false);
      // setWordleWord(word);
    });
  }, []);

  return (
    <WordleContext.Provider value={{ wordleWord, loading, setLoading }}>
      {children}
    </WordleContext.Provider>
  );
}
