import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Store from './Store'
import Box from './Box'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box />
      <Store />
    </>
  )
}

export default App
