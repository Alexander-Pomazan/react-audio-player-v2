import { createUseAudio } from './audio'

import { useCurrentTrack, usePlayerStatus } from 'src/stores'

const useAudio = createUseAudio()

export const AudioController = () => {
  const currentTrack = useCurrentTrack()
  const [playerStatus] = usePlayerStatus()

  useAudio({
    src: currentTrack?.source,
    playerStatus,
  })

  return null
}
