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
  useCurrentTrack,
} from 'src/stores'

export const BottomBar = () => {
  const [playerStatus] = usePlayerStatus()
  const togglePlay = useTogglePlay()
  const switchNextTrack = useSwitchNextTrack()
  const switchPrevTrack = useSwitchPrevTrack()

  const currentTrack = useCurrentTrack()

  const [currentProgress, setCurrentProgress] = useCurrentProgress()

  return (
    <BottomBarLayout
      progressBar={
        <ProgressBar
          progress={currentProgress}
          onChangeProgress={(progress) => setCurrentProgress(progress)}
          isDisabled={!currentTrack}
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
