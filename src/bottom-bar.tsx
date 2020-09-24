import React from 'react'
import styled from 'styled-components'

import { Controls } from './controls'

import { usePlayerStatus } from 'src/stores'

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 4rem;
  background-color: white;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
`

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const BottomBar = () => {
  const [playerStatus, setPlayerStatus] = usePlayerStatus()

  const handlePlay = () => {
    if (playerStatus === 'play') {
      setPlayerStatus('pause')
    } else {
      setPlayerStatus('play')
    }
  }

  return (
    <Root>
      <InnerWrapper>
        <Controls
          playerStatus={playerStatus}
          onNextTrack={() => console.log('next track!')}
          onPrevTrack={() => console.log('prev track!')}
          onPlay={handlePlay}
        />
      </InnerWrapper>
    </Root>
  )
}
