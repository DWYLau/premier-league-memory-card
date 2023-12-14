import Cards from "../components/Cards"

interface Count {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

function Board({ count, setCount }: Count) {
  return (
    <div className='absolute top-32 left-0 right-0 mx-auto bg-inherit h-5/6 w-11/12 grid gap-2 grid-cols-6 grid-rows-2 justify-items-center items-center'>
      <Cards count={count} setCount={setCount} />
    </div>
  )
}

export default Board
