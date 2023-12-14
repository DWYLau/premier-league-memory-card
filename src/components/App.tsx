import Header from "./Header"
import Form from "./Form"
import "animate.css"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header count={count} />
      <Form count={count} setCount={setCount} />
    </>
  )
}

export default App
