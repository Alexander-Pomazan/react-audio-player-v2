import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import { Player } from './player'

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: #fff;
`

const AppRaw: React.FC = () => {
  return (
    <Root>
      <Player />
    </Root>
  )
}

export const App = hot(module)(AppRaw)
