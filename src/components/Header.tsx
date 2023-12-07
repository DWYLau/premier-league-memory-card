import Logo from "../assets/pl-main-logo.png"

function Header() {
  return (
    <header className='bg-[#37003c] flex flex-row items-center gap-4'>
      <img
        className='relative h-20 w-15 m-3'
        src={Logo}
        alt='Premier League Logo'
      />
      <h1 className='text-white text-3xl font-bold'>
        Premier League Memory Cards
      </h1>
    </header>
  )
}

export default Header
