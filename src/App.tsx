import { useState } from 'react'
import Window1 from './houses/Window1'
import './App.css'
import Building from './houses/Building'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Building />
    </>
  )
}

export default App
