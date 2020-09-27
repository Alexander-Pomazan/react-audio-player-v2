import React from 'react'

import { Controls } from './controls'
import { BottomBarLayout } from './bottom-bar-layout'

import { ProgressBar } from 'src/ui'
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
      progressBar={<ProgressBar progress={0.5} />}
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
