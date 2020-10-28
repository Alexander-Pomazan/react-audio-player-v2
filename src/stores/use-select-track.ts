import { useCallback } from 'react'

import { usePlayerStatus } from './player-status'
import { useCurrentTrackId } from './current-track-id'
import { useTogglePlay } from './player-controls'
import { useCurrentProgress } from './current-progress'

import { Track } from 'src/models'

export const useSelectTrack = () => {
  const [currentTrackId, onSelectTrackId] = useCurrentTrackId()
  const [, setCurrentProgress] = useCurrentProgress()
  const [, setPlayerStatus] = usePlayerStatus()
  const togglePlay = useTogglePlay()

  const onTrackSelect = useCallback(
    (trackId: Track['id'] | null) => {
      if (trackId === currentTrackId) {
        return togglePlay()
      }

      setCurrentProgress(0)
      onSelectTrackId(trackId)

      if (trackId !== null) {
        setPlayerStatus('play')
      }
    },
    [
      currentTrackId,
      onSelectTrackId,
      setCurrentProgress,
      setPlayerStatus,
      togglePlay,
    ],
  )

  return onTrackSelect
}
