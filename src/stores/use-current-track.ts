import { useMemo } from 'react'

import { useTracksQuery } from './tracks'
import { useCurrentTrackId } from './current-track-id'

export const useCurrentTrack = () => {
  const { data: tracks } = useTracksQuery()

  const [currentTrackId] = useCurrentTrackId()

  const currentTrack = useMemo(
    () => tracks.find((track) => track.id === currentTrackId),
    [tracks, currentTrackId],
  )

  return currentTrack
}
