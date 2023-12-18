import { useEffect, useState } from "react"
import data from "../utils/data.ts"
import click from "../assets/click.wav"
import "../styles/Cards.css"
import Lose from "./LoseScreen.tsx"

type ClickEvent = React.MouseEvent<HTMLDivElement>

interface PlayersArray extends Array<Player> {}

interface Player {
  id: number
  first: string
  last: string
  image: string
  team: string
  nationality: string
  color: string
}

interface Count {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function Card({ count, setCount }: Count) {
  const [idArray, setIdArray] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [win, setWin] = useState(false)
  const players = data
  shuffleCards(players)

  useEffect(() => {
    function checkWin() {
      if (idArray.length === 12) {
        setIsPlaying(false)
        setWin(true)
      }
    }
    shuffleCards(players)
    setCount(idArray.length)
    checkWin()
  }, [players, idArray, count, setCount, isPlaying])

  function shuffleCards(cards: PlayersArray) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
  }

  function handleClick(event: ClickEvent) {
    const key = event.currentTarget.dataset.id
    const audio = new Audio(click)
    if (key && !idArray.includes(key)) {
      setIdArray(prevInputs => [...prevInputs, key])
      audio.play()
    } else {
      setIsPlaying(false)
    }
  }

  function handleReset() {
    setIsPlaying(true)
    setCount(0)
    setIdArray([])
  }

  if (isPlaying === true) {
    return (
      <>
        {players.map(player => {
          return (
            <div
              data-id={player.id}
              onClick={handleClick}
              key={player.id}
              className={`${player.color} cards relative box-content pb-3 h-80 w-64 flex flex-col rounded shadow-md cursor-pointer hover:shadow-2xl hover:shadow-blue-900 hover:ring-4 ring-violet-800`}
            >
              <img className='h-64' src={player.image} alt={player.last} />
              <img
                className='absolute top-44 left-2 h-16 w-16'
                src={player.team}
                alt={player.team}
              />
              <div className='bg-purple-950 p-2 font-outfit '>
                <h1 className='text-white text-2xl font-bold'>{player.last}</h1>
                <h2 className='text-white text-xl font-bold'>{player.first}</h2>
                <img
                  className='absolute bottom-7 start-52'
                  src={player.nationality}
                  alt={player.nationality}
                />
              </div>
            </div>
          )
        })}
      </>
    )
  }

  if (isPlaying === false && win === false) {
    return <Lose handleReset={handleReset} />
  }

  if (isPlaying === false && win === true) {
    return (
      <div className='absolute top-32 left-0 right-0 mx-auto h-96 w-1/4 bg-white rounded shadow-lg flex flex-col justify-center items-center font-outfit animate__animated animate__fadeIn'>
        <h1>HELLO</h1>
      </div>
    )
  }
}

export default Card
