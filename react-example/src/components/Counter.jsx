import { useState, useRef, useEffect } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const [celebration, setCelebration] = useState("")

  useEffect(() => {
    if (count >= 10) {
      setCelebration("celebration")
    }
  }, [count])

  return (
    <div className={`count-container ${celebration}`}>
      <h2>{count}</h2>
      <button className="button" onClick={() => setCount(count + 1)}>ÖKA</button>
    </div>
  )
}

export default Counter