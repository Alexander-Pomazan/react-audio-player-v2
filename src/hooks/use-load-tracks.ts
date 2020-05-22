import { useState, useEffect } from 'react'

import type { Track } from 'src/models'

export const useLoadTracks = (url: string) => {
  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((tracks: Track[]) => setTracks(tracks))
  }, [url])

  return tracks
}
