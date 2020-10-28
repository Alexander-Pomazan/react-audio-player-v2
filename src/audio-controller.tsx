import { useCallback } from 'react'

import { useAudio } from './audio'

import {
  useCurrentTrack,
  usePlayerStatus,
  useCurrentProgress,
} from 'src/stores'

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
