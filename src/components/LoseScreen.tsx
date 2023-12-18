import miss from "../assets/miss.gif"
import lose from "../assets/lose.mp3"
import { useEffect, useRef } from "react"

interface Reset {
  handleReset: () => void
}

function Lose({ handleReset }: Reset) {
  const audioRef = useRef(new Audio(lose))

  useEffect(() => {
    const audio = audioRef.current

    function handlePlayAudio() {
      audio.play()
    }

    handlePlayAudio()

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  function handleClick() {
    const audio = audioRef.current
    audio.pause()
    audio.currentTime = 0
    handleReset()
  }

  return (
    <div className='absolute top-2 left-0 right-0 mx-auto h-2/3 w-1/3 bg-white rounded shadow-lg flex flex-col justify-center items-center font-outfit animate__animated animate__fadeIn ring ring-violet-700'>
      <h1 className='text-2xl mt-3'>MISSED PENALTY!</h1>
      <img className='px-5 py-3 rounded-[40px]' src={miss} alt='miss goal' />
      <p className='text-lg'>
        It's a shame, but you couldn't bring home the trophy!
      </p>
      <p className='text-lg'>Better luck next time!</p>
      <button
        onClick={handleClick}
        className='text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 my-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 transition ease-in-out delay-100'
      >
        Restart Game
      </button>
    </div>
  )
}

export default Lose
