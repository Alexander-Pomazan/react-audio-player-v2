import React from 'react'
import styled from 'styled-components'

const Root = styled.nav`
  display: flex;
`

const ControlsList = styled.ul`
  display: flex;
  align-items: center;
`

type Props = {
  playerStatus: 'playing' | 'paused'
  onPlay: () => void
  onNextTrack: () => void
  onPrevTrack: () => void
}

export const Controls = (props: Props) => {
  const { onPlay, onNextTrack, onPrevTrack } = props

  return (
    <Root>
      <ControlsList>
        <button onClick={onPrevTrack}>prev</button>
        <button onClick={onPlay}>play</button>
        <button onClick={onNextTrack}>next</button>
      </ControlsList>
    </Root>
  )
}
