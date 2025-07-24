import '../tailwind.css'
const Head=(
  <div className='absolute w-15 h-15 border-7 rounded-full top-10 right-[-26px]'></div>
)
const Body=(
  <div className='absolute w-2 h-20 bg-black top-17 right-[-26px]'></div>
)

export function HangmanDrawing() {
  return (
    <div className="relative">
      {Head}
      {Body}
<div className='h-2 w-36 bg-black ml-23 sm:ml-30'></div>
<div className=' absolute h-10 w-2 bg-black top-0 right-0'></div>
<div className='h-76 w-2 sm:ml-30 bg-black ml-23'></div>
<div className='h-2 w-46 sm:w-60 bg-black'></div>
    </div>
  );
}
