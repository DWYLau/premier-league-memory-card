function StartGame() {
  return (
    <div className='absolute top-48 left-0 right-0 mx-auto h-96 w-1/4  bg-[#37003c] border-4 rounded-2xl border-white w-90 flex flex-col justify-center items-center'>
      <p>Click on a player card to get points!</p>
      <p>But don't click on the same player twice!</p>
      <button>Start Game</button>
    </div>
  )
}

export default StartGame
