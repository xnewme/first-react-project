import React, { useState } from 'react'

const Counter = () => {
  //top level -> state
  // 1 -current, 2-metodas state update, 3- initial value

  const [count, setCount] = useState(0)
  //aprasome funkcijas
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default Counter
