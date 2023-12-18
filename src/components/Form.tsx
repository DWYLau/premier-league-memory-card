import { useState } from "react"
import trophy from "../assets/trophy.png"
import whistle from "../assets/referee-whistle.mp3"
import Board from "./Board"

interface Count {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function Form({ count, setCount }: Count) {
  const [startGame, setStartGame] = useState(false)

  function handleStart() {
    const audio = new Audio(whistle)
    setStartGame(startGame => !startGame)
    audio.play()
  }

  if (startGame === false) {
    return (
      <div className='absolute top-32 left-0 right-0 mx-auto h-96 w-1/4 bg-white rounded shadow-lg flex flex-col justify-center items-center font-outfit animate__animated animate__fadeIn ring ring-violet-700'>
        <img className='h-40 m-2' src={trophy} alt='Premier League Trophy' />
        <div className='flex flex-col justify-center items-center m-2 text-lg'>
          <p>Aim for the prestigious Premier League trophy!</p>
          <p>Click on a player card to get points!</p>
          <p>But don't click on the same player twice!</p>
        </div>
        <button
          type='button'
          onClick={handleStart}
          className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 transition ease-in-out delay-100'
        >
          Start Game
        </button>
      </div>
    )
  }

  if (startGame === true) {
    return <Board count={count} setCount={setCount} />
  }
}

export default Form
