import Cards from "../components/Cards"

function Board() {
  return (
    <div className='absolute top-32 left-0 right-0 mx-auto bg-inherit h-5/6 w-11/12 grid gap-2 grid-cols-6 grid-rows-2 justify-items-center items-center'>
      <Cards />
    </div>
  )
}

export default Board
