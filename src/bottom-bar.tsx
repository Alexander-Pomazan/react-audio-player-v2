import React from 'react'
import styled from 'styled-components'

import { Controls } from './controls'

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  min-height: 3rem;
  background-color: lightgreen;
`

export const BottomBar = () => {
  return (
    <Root>
      <Controls
        playerStatus='playing'
        onNextTrack={() => console.log('next track!')}
        onPrevTrack={() => console.log('prev track!')}
        onPlay={() => console.log('play')}
      />
    </Root>
  )
}
