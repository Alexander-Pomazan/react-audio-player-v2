import { useCallback } from 'react'

import { useTracksQuery } from './tracks'
import { useCurrentTrackId } from './current-track-id'
import { usePlayerStatus } from './player-status'
import { useSelectTrack } from './use-select-track'

import { PlayerStatus, Track } from 'src/models'

const togglePlayerStatus = (playerStatus: PlayerStatus): PlayerStatus => {
  if (playerStatus === 'play') {
    return 'pause'
  } else {
    return 'play'
  }
}

export const useTogglePlay = () => {
  const [, setPlayerStatus] = usePlayerStatus()

  const togglePlay = useCallback(() => {
    setPlayerStatus((playerStatus) => togglePlayerStatus(playerStatus))
  }, [setPlayerStatus])

  return togglePlay
}

const switchPlaylistPosition = (
  currentTrackId: Track['id'] | null,
  tracks: Track[],
  displacement: number,
) => {
  if (tracks.length === 0) {
    return null
  }

  const fallback = displacement > 0 ? tracks[0] : tracks[tracks.length - 1]

  if (currentTrackId === null) {
    return fallback.id
  }

  const currentTrackIndex = tracks.findIndex(
    (track) => track.id === currentTrackId,
  )

  const trackToSwitchTo = tracks[currentTrackIndex + displacement] || fallback

  return trackToSwitchTo.id
}

const getNextTrackId = (
  currentTrackId: Track['id'] | null,
  tracks: Track[],
) => {
  return switchPlaylistPosition(currentTrackId, tracks, 1)
}

export const useSwitchNextTrack = () => {
  const { data: tracks } = useTracksQuery()
  const [currentTrackId] = useCurrentTrackId()
  const onTrackSelect = useSelectTrack()

  const switchNextTrack = useCallback(() => {
    const nextTrackId = getNextTrackId(currentTrackId, tracks)
    return onTrackSelect(nextTrackId)
  }, [currentTrackId, onTrackSelect, tracks])

  return switchNextTrack
}

const getPrevTrackId = (
  currentTrackId: Track['id'] | null,
  tracks: Track[],
) => {
  return switchPlaylistPosition(currentTrackId, tracks, -1)
}

export const useSwitchPrevTrack = () => {
  const { data: tracks } = useTracksQuery()
  const [currentTrackId] = useCurrentTrackId()
  const onTrackSelect = useSelectTrack()

  const switchNextTrack = useCallback(() => {
    const prevTrackId = getPrevTrackId(currentTrackId, tracks)
    return onTrackSelect(prevTrackId)
  }, [currentTrackId, onTrackSelect, tracks])

  return switchNextTrack
}
