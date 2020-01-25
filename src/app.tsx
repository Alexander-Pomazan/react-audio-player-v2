import React, { useState, useCallback } from 'react'
import { hot } from 'react-hot-loader'
import { styled } from 'linaria/react'

const Root = styled.div`
  font-family: Arial, sans-serif;
  background-color: salmon;
`

const AppRaw: React.FC = () => {
  const [count, setCount] = useState(13)

  const increment = useCallback(() => setCount((prev) => prev + 2), [])

  return (
    <Root>
      <button onClick={increment}>{count}</button>
    </Root>
  )
}

export const App = hot(module)(AppRaw)
