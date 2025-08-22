import "../tailwind.css";
export function HangmanKeyword({word, guess}: {word: string, guess: string[]}) {

  return (
    <div className="gap-2 mt-5 flex flex-row items-center font-extrabold text-4xl font-mono capitalize">
      {word.split("").map((letter, index) => (
        <span key={index} className=" border-b-4">
          <span className="">
            {guess.includes(letter) ? letter : <span className="invisible">.</span>}
          </span>
        </span>
      ))}
    </div>
  );
}