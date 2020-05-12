import React, { useState, useCallback } from 'react'
import { hot } from 'react-hot-loader'

const AppRaw: React.FC = () => {
  const [count, setCount] = useState(13)

  const increment = useCallback(() => setCount(count + 2), [count])

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

export const App = hot(module)(AppRaw)
