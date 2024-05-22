import React, { useState } from 'react'

export default function Counter() {
  let [count, setCount] = useState(0)

  function handleIncrement(){
    count = count + 1
    setCount(count)
  }
  function handleDecrement(){
    count = count - 1
    setCount(count)
  }
  return (
    <div>
        <h2>
            Counter App
        </h2>
        <p>
        Count: {count}
        </p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement </button>
    </div>
  )
}
