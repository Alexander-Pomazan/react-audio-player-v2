import { useEffect } from 'react'
import { atom, useAtom } from 'jotai'

import { Track } from 'src/models'

export const tracksAtom = atom<Track[]>([])

export const useTracks = () => {
  const [tracks, setTracks] = useAtom(tracksAtom)

  useEffect(() => {
    if (tracks.length === 0) {
      fetch('/tracks.json')
        .then((res) => res.json())
        .then((tracks: Track[]) => setTracks(tracks))
    }
  }, [])

  return tracks
}
