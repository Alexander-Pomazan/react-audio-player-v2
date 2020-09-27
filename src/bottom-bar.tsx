import React from 'react'

import { Controls } from './controls'
import { BottomBarLayout } from './bottom-bar-layout'

import { ProgressBar } from 'src/ui'
import {
  useTogglePlay,
  useSwitchNextTrack,
  useSwitchPrevTrack,
  usePlayerStatus,
  useCurrentTrack,
  useCurrentProgress,
} from 'src/stores'

export const BottomBar = () => {
  const [playerStatus] = usePlayerStatus()
  const togglePlay = useTogglePlay()
  const switchNextTrack = useSwitchNextTrack()
  const switchPrevTrack = useSwitchPrevTrack()
  const currentTrack = useCurrentTrack()
  const [currentProgress] = useCurrentProgress()

  const duration = currentTrack?.duration || Infinity

  const progress = currentProgress / duration

  return (
    <BottomBarLayout
      progressBar={<ProgressBar progress={progress} />}
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
