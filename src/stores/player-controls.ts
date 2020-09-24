import { atom, useAtom } from 'jotai'

import { tracksAtom } from './tracks'
import { currentTrackIdAtom } from './current-track-id'
import { playerStatusAtom } from './player-status'

const togglePlayAtom = atom(null, (get, set) => {
  const playerStatus = get(playerStatusAtom)

  const newPlayerStatus = (() => {
    if (playerStatus === 'play') {
      return 'pause'
    } else {
      return 'play'
    }
  })()

  set(playerStatusAtom, newPlayerStatus)
})

export const useTogglePlay = () => {
  const [, togglePlay] = useAtom(togglePlayAtom)

  return togglePlay
}

const switchNextTrackAtom = atom(null, (get, set) => {
  const tracks = get(tracksAtom)
  const currentTrackId = get(currentTrackIdAtom)

  const currentTrackIndex = tracks.findIndex(
    (track) => track.id === currentTrackId,
  )

  const nextTrack = tracks[currentTrackIndex + 1] || tracks[0]

  set(currentTrackIdAtom, nextTrack.id)
})

export const useSwitchNextTrack = () => {
  const [, switchNextTrack] = useAtom(switchNextTrackAtom)

  return switchNextTrack
}

const switchPrevTrackAtom = atom(null, (get, set) => {
  const tracks = get(tracksAtom)
  const currentTrackId = get(currentTrackIdAtom)

  const currentTrackIndex = tracks.findIndex(
    (track) => track.id === currentTrackId,
  )

  const prevTrack = tracks[currentTrackIndex - 1] || tracks[tracks.length - 1]

  set(currentTrackIdAtom, prevTrack.id)
})

export const useSwitchPrevTrack = () => {
  const [, switchPrevTrack] = useAtom(switchPrevTrackAtom)

  return switchPrevTrack
}
