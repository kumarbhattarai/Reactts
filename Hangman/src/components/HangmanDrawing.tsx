import '../tailwind.css'
const Head=(
  <div className='absolute w-15 h-15 border-7 rounded-full top-10 right-[-26px]'></div>
)
const Body=(
  <div className='absolute w-2 h-20 bg-black top-24 right-[-1px]'></div>
)
const LeftArm=(
  <div className='absolute w-15 h-2 bg-black top-30 right-[-1px] rotate-[-30deg]'></div>
)
const RightArm=(
  <div className='absolute w-15 h-2 bg-black top-30 left-57 sm:left-64 rotate-[30deg]'></div>
)
const LeftLeg=(
  <div className='absolute w-15 h-2 bg-black top-45 right-[-1px] rotate-[-30deg]'></div>
)
const RightLeg=(
  <div className='absolute w-15 h-2 bg-black top-45 left-57 sm:left-64 rotate-[30deg]'></div>
)
const body_parts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];


export function HangmanDrawing({numberofguess}: {numberofguess: number}) {
  return (
    <div className="relative">
      {body_parts.slice(0,numberofguess)}
      <div className='h-2 w-36 bg-black ml-23 sm:ml-30'></div>
      <div className=' absolute h-10 w-2 bg-black top-0 right-0'></div>
      <div className='h-76 w-2 sm:ml-30 bg-black ml-23'></div>
      <div className='h-2 w-46 sm:w-60 bg-black'></div>
    </div>
  );
}
