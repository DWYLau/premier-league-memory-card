import logo from "../assets/pl-main-logo.png"
import Counter from "./Counter"

interface Count {
  count: number
}

function Header({ count }: Count) {
  return (
    <header className='bg-[#37003c] flex flex-row items-center gap-4 animate__animated animate__fadeIn'>
      <img
        className='relative h-20 w-15 m-3'
        src={logo}
        alt='Premier League Logo'
      />
      <h1 className='text-white text-3xl font-bold'>
        Premier League Memory Cards
      </h1>
      <Counter count={count} />
    </header>
  )
}

export default Header
