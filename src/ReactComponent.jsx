import React, { useState } from 'react'

function ReactComponent() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ border: '1px solid #646cff', padding: '20px', borderRadius: '8px' }}>
      <h2>React Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default ReactComponent