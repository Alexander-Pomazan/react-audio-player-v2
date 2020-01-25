import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { styled } from 'linaria/react'

const Root = styled.div`
  font-family: Arial, sans-serif;
  background-color: salmon;
`

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount((prev) => prev + 1), [])

  return (
    <Root>
      <button onClick={increment}>{count}</button>
    </Root>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
