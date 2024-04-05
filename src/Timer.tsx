import { useEffect, useState } from "react"

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [isCounting, setIsCounting] = useState(false)

  useEffect(() => {
    let intervalId: any
    if (isCounting) {
      intervalId = setInterval(() => setTime((p) => +(p + 0.1).toFixed(2)), 100)
    }

    return () => clearInterval(intervalId)
  }, [isCounting])

  const startCount = () => {
    setIsCounting(true)
  }

  const stopCount = () => {
    setIsCounting(false)
  }

  const resetTimer = () => {
    setIsCounting(false)
    setTime(0)
  }

  return (
    <div style={{ border: "1px solid black", textAlign: "center" }}>
      <h2>{time}</h2>
      {isCounting ? (
        <button onClick={stopCount}>stop</button>
      ) : (
        <button onClick={startCount}>start</button>
      )}
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}
