import { useCallback } from 'react'

import { createUseAudio } from './audio'

import {
  useCurrentTrack,
  usePlayerStatus,
  useCurrentProgress,
} from 'src/stores'

const useAudio = createUseAudio()

export const AudioController = () => {
  const currentTrack = useCurrentTrack()
  const [playerStatus] = usePlayerStatus()
  const [currentProgress, setCurrentProgress] = useCurrentProgress()

  const handleProgress = useCallback(
    (progress: number) => {
      setCurrentProgress(progress)
    },
    [setCurrentProgress],
  )

  useAudio({
    src: currentTrack?.source,
    playerStatus,
    progress: currentProgress,
    onProgress: handleProgress,
  })

  return null
}
