import { atom, useAtom } from 'jotai'

import { Track } from 'src/models'

type TrackIdValue = null | Track['id']

export const currentTrackIdAtom = atom<TrackIdValue>(null)

export const useCurrentTrackId = () => {
  return useAtom(currentTrackIdAtom)
}
