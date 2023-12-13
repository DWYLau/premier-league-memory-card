import { useEffect } from "react"
import data from "../utils/data.ts"

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

function Card() {
  const players = data
  shuffleCards(players)

  useEffect(() => {
    shuffleCards(players)
  }, [players])

  function shuffleCards(cards: PlayersArray) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
  }

  return (
    <>
      {players.map(player => {
        return (
          <div
            key={player.id}
            className={`${player.color} box-content pb-3 h-80 w-64 flex flex-col rounded shadow-md animate__animated animate__fadeInLeft cursor-pointer hover:shadow-2xl hover:shadow-blue-900 hover:ring-4 ring-violet-800 transition ease-in-out delay-50`}
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

export default Card
