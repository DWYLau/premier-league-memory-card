import trophy from "../assets/trophy.png"

function StartGame() {
  return (
    <div className='absolute top-32 left-0 right-0 mx-auto h-96 w-1/4  bg-white border-4 rounded-2xl border-[#37003c] w-90 flex flex-col justify-center items-center'>
      <img className='h-40 m-2' src={trophy} alt='Premier League Trophy' />
      <div>
        <p>Aim for the prestigious Premier League trophy!</p>
        <p>Click on a player card to get points!</p>
        <p>But don't click on the same player twice!</p>
      </div>
      <button>Start Game</button>
    </div>
  )
}

export default StartGame
