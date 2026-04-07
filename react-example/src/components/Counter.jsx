import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="count-container">
      <h2>{count}</h2>
      <button className="button" onClick={() => setCount(count + 1)}>ÖKA</button>
    </div>
  )
}

export default Counter