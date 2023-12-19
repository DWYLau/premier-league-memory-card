import { useEffect, useRef } from "react"
import win from "../assets/win.mp3"
import goal from "../assets/goal.gif"

interface Reset {
  handleReset: () => void
}

function Win({ handleReset }: Reset) {
  const audioRef = useRef(new Audio(win))

  useEffect(() => {
    const audio = audioRef.current
    audio.play()

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <div className='bg-white absolute top-2 left-0 right-0 mx-auto h-[510px] w-1/3 rounded shadow-lg flex flex-col justify-evenly items-center font-outfit animate__animated animate__fadeIn ring-4 ring-violet-900'>
      <h1 className='text-2xl mt-3'>PREMIER LEAGUE WINNER!</h1>
      <img className='px-5 py-3 rounded-[40px]' src={goal} alt='goal' />
      <p className='text-lg'>Congratulations!</p>
      <p className='text-lg'>You scored the goal to win the Premier League!</p>
      <button
        onClick={handleReset}
        className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 my-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 transition ease-in-out delay-100'
      >
        Restart Game
      </button>
    </div>
  )
}

export default Win
