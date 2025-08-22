import { useEffect, useState, useCallback } from "react";
import words from "./wordlist.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanKeyword } from "./components/HangmanKeyword";
import { HangmanKeyboard } from "./components/HangmanKeyboard";
import "./tailwind.css";
function App() {

  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });


  const [guess, setguess] = useState<string[]>([]);

  const incorrectLetters = guess.filter((letter) => !word.includes(letter));



const addGuess = useCallback((letter:string)=>{
    if (guess.includes(letter)) return;
    setguess((prev) => [...prev, letter]);
}, [guess]);

  useEffect(() => {
    const handler= (event: KeyboardEvent) => {
      const key = event.key;
      if (!key.match(/^[a-z]$/)) return;
      event.preventDefault();
      addGuess(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guess]);
    const isLooser:boolean=incorrectLetters.length >= 6;
  const isWinner:boolean = word.split("").every((letter) => guess.includes(letter));
  return (
    <div className="flex flex-col gap-2 mx-0 my-auto items-center">
      <h1 className="text-2xl ml-30 font-semibold">{isLooser ? "You Lose" : isWinner ? "You Win" : "Guess the Word"}</h1>

      <HangmanDrawing  numberofguess={incorrectLetters.length}></HangmanDrawing>
      <HangmanKeyword guess={guess} word={word}></HangmanKeyword>

      <HangmanKeyboard activeLetters={guess.filter((letter) => word.includes(letter))} inactiveLetters={incorrectLetters} addGuess={addGuess}></HangmanKeyboard>
      </div>
  );
}

export default App;
