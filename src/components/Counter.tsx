import ball from "../assets/soccer-ball.png"

interface Count {
  count: number
}

function Counter({ count }: Count) {
  return (
    <div className='bg-sky-200 h-12 p-3 rounded-md shadow-md flex justify-center items-center gap-2 absolute left-3/4  hover:ring-4 ring-violet-800 transition ease-in-out delay-50'>
      <h1 className='font-bold text-2xl'>Goals: {count}</h1>
      <img className='h-7 w-7' src={ball} alt='soccer ball' />
    </div>
  )
}

export default Counter
