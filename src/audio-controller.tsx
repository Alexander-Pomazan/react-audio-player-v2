import { useCallback } from 'react'

import { useAudio } from './audio'
import { Progress } from './models'

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
    (progress: Progress) => {
      setCurrentProgress(progress)
    },
    [setCurrentProgress],
  )

  useAudio({
    src: currentTrack?.source,
    trackDuration: currentTrack?.duration,
    playerStatus,
    progress: currentProgress,
    onProgress: handleProgress,
  })

  return null
}
