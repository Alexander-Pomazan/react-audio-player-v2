import React, { useCallback } from 'react'
import styled from 'styled-components'

import { Controls } from './controls'

import { useCurrentTrackId, useTracks, usePlayerStatus } from 'src/stores'

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

const usePlayerControls = () => {
  const [playerStatus, setPlayerStatus] = usePlayerStatus()
  const tracks = useTracks()
  const [currentTrackId, setCurrentTrackId] = useCurrentTrackId()

  const togglePlay = useCallback(() => {
    if (playerStatus === 'play') {
      setPlayerStatus('pause')
    } else {
      setPlayerStatus('play')
    }
  }, [playerStatus, setPlayerStatus])

  const switchNextTrack = useCallback(() => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrackId,
    )

    const nextTrack = tracks[currentTrackIndex + 1] || tracks[0]

    setCurrentTrackId(nextTrack.id)
  }, [currentTrackId, setCurrentTrackId, tracks])

  const switchPrevTrack = useCallback(() => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrackId,
    )

    const nextTrack = tracks[currentTrackIndex - 1] || tracks[tracks.length - 1]

    setCurrentTrackId(nextTrack.id)
  }, [currentTrackId, setCurrentTrackId, tracks])

  return { playerStatus, togglePlay, switchNextTrack, switchPrevTrack }
}

export const BottomBar = () => {
  const {
    playerStatus,
    togglePlay,
    switchNextTrack,
    switchPrevTrack,
  } = usePlayerControls()

  return (
    <Root>
      <InnerWrapper>
        <Controls
          playerStatus={playerStatus}
          onNextTrack={switchNextTrack}
          onPrevTrack={switchPrevTrack}
          onPlay={togglePlay}
        />
      </InnerWrapper>
    </Root>
  )
}
