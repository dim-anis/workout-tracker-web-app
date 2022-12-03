import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Choose weight</h1>
      </div>
      <div className="container">
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </div>
  )
}

export default App
