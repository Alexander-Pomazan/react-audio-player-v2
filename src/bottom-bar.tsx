import React from 'react'

import { Controls } from './controls'
import { BottomBarLayout } from './bottom-bar-layout'

import {
  useTogglePlay,
  useSwitchNextTrack,
  useSwitchPrevTrack,
  usePlayerStatus,
} from 'src/stores'

export const BottomBar = () => {
  const [playerStatus] = usePlayerStatus()
  const togglePlay = useTogglePlay()
  const switchNextTrack = useSwitchNextTrack()
  const switchPrevTrack = useSwitchPrevTrack()

  return (
    <BottomBarLayout
      controls={
        <Controls
          playerStatus={playerStatus}
          onNextTrack={switchNextTrack}
          onPrevTrack={switchPrevTrack}
          onPlay={togglePlay}
        />
      }
    />
  )
}
