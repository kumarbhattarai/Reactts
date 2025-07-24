import { useState } from "react"
import words from "./wordlist.json"
import { HangmanDrawing } from "./components/HangmanDrawing"
import { HangmanKeyword } from "./components/HangmanKeyword"
import { HangmanKeyboard } from "./components/HangmanKeyboard"
import './tailwind.css'
function App() {

  const [word,setWord]=useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  });
  console.log(word);
  const[guess,setguess]=useState<string[]>([]);
  return (
    <div className="flex flex-col gap-2 mx-0 my-auto items-center">
      <h1 className="text-2xl font-semibold">lose win</h1>
    
    <HangmanDrawing></HangmanDrawing>
    <HangmanKeyword></HangmanKeyword>
    <HangmanKeyboard></HangmanKeyboard>
</div>
  )
}

export default App
