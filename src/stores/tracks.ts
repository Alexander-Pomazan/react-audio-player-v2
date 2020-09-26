import { atom } from 'jotai'
import { useQuery } from 'react-query'

import { Track } from 'src/models'

const getTracks = async (): Promise<Track[]> => {
  const response = await fetch('/tracks.json')

  return await response.json()
}

export const tracksAtom = atom<Track[]>([])

export const useTracksQuery = () => {
  const { data = [], ...rest } = useQuery('tracks', getTracks, {
    initialData: [],
  })

  return { data, ...rest }
}
