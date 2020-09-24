import React from 'react'
import styled from 'styled-components'

import { PlayerStatus } from './models'

import { Pause, Play } from 'src/icons'

const Root = styled.nav`
  display: flex;
`

const ControlsList = styled.ul`
  display: flex;
  align-items: center;
`

type Props = {
  playerStatus: PlayerStatus
  onPlay: () => void
  onNextTrack: () => void
  onPrevTrack: () => void
}

export const Controls = (props: Props) => {
  const { playerStatus, onPlay, onNextTrack, onPrevTrack } = props

  return (
    <Root>
      <ControlsList>
        <button onClick={onPrevTrack}>prev</button>

        <button onClick={onPlay}>
          {playerStatus === 'play' ? <Pause /> : <Play />}
        </button>
        <button onClick={onNextTrack}>next</button>
      </ControlsList>
    </Root>
  )
}
