import "../tailwind.css";
export function HangmanKeyboard({ activeLetters, inactiveLetters, addGuess }:{ activeLetters: string[]; inactiveLetters: string[]; addGuess: (letter: string) => void; }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <>
      <div className=" grid grid-cols-9  gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
        {letters.map((letter) => (
          <button
            onClick={() => addGuess(letter)}
            key={letter}
 
            className=" p-2 sm:p-4  border-2 rounded  text-center uppercase enabled:hover:bg-sky-200  active:text-white  transition-colors duration-200 font-medium text-2xl"
             disabled={
              activeLetters.includes(letter) || inactiveLetters.includes(letter)
            }
            style={{
              backgroundColor: activeLetters.includes(letter)
                ? "#d1fae5"
                : inactiveLetters.includes(letter)
                ? "#fecaca"
                : "",
            }}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div>
        <button className="p-2 sm:p-3 border-2 rounded mt-2 mr-2">Enter</button>

        <button className="p-2 sm:p-3 border-2 rounded mt-2 mr-2">
          Backspace
        </button>
      </div>
    </>
  );
}
