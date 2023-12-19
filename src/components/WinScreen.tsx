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
    <div className='absolute top-2 left-0 right-0 mx-auto h-2/3 w-1/3 bg-white rounded shadow-lg flex flex-col justify-center items-center font-outfit animate__animated animate__fadeIn ring ring-violet-700'>
      <h1>PREMIER LEAGUE WINNER!</h1>
      <img src={goal} alt='goal' />
      <p>Congratulations!</p>
      <p>You scored the goal to win the Premier League!</p>
      <button>Restart Game</button>
    </div>
  )
}

export default Win
