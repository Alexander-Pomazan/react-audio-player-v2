import React from 'react'

import { Controls } from './controls'
import { BottomBarLayout } from './bottom-bar-layout'

import { ProgressBar } from 'src/ui'
import {
  useTogglePlay,
  useSwitchNextTrack,
  useSwitchPrevTrack,
  usePlayerStatus,
  useCurrentProgress,
} from 'src/stores'

export const BottomBar = () => {
  const [playerStatus] = usePlayerStatus()
  const togglePlay = useTogglePlay()
  const switchNextTrack = useSwitchNextTrack()
  const switchPrevTrack = useSwitchPrevTrack()

  const [currentProgress, setCurrentProgress] = useCurrentProgress()

  return (
    <BottomBarLayout
      progressBar={
        <ProgressBar
          progress={currentProgress}
          onChangeProgress={(progress) => setCurrentProgress(progress)}
        />
      }
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
