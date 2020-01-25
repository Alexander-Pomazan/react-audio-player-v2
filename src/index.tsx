import React from 'react'
import ReactDOM from 'react-dom'
import { styled } from 'linaria/react'

const Root = styled.div`
  font-family: 'Arial';
  background-color: salmon;
`

const App: React.FC = () => {
  return <Root>App</Root>
}

ReactDOM.render(<App />, document.getElementById('root'))
