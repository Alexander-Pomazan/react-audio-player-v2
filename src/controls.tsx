import React from 'react'
import styled from 'styled-components'

import { PlayerStatus } from './models'

import { RenderIfCondition } from 'src/ui'
import { Next, Pause, Play, Prev } from 'src/icons'

const Root = styled.nav`
  display: flex;
`

const ControlsList = styled.ul`
  display: flex;
  align-items: center;
`

const ControlsButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

type Props = {
  playerStatus: PlayerStatus
  onPlay: () => void
  onNextTrack: () => void
  onPrevTrack: () => void
}

export const Controls: React.FC<Props> = (props) => {
  const { playerStatus, onPlay, onNextTrack, onPrevTrack } = props

  const playButtonAriaLabel =
    playerStatus === 'play' ? 'Pause playback' : 'Resume playback'

  return (
    <Root>
      <ControlsList>
        <ControlsButton
          onClick={onPrevTrack}
          aria-label='Switch to previous track'
        >
          <Prev height={24} width={24} />
        </ControlsButton>

        <ControlsButton onClick={onPlay} aria-label={playButtonAriaLabel}>
          <RenderIfCondition condition={playerStatus === 'play'}>
            <Pause height={32} width={32} />
          </RenderIfCondition>

          <RenderIfCondition condition={playerStatus === 'pause'}>
            <Play height={32} width={32} />
          </RenderIfCondition>
        </ControlsButton>

        <ControlsButton onClick={onNextTrack} aria-label='Switch to next track'>
          <Next height={24} width={24} />
        </ControlsButton>
      </ControlsList>
    </Root>
  )
}
