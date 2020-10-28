import { atom, useAtom } from 'jotai'

import { currentProgressAtom } from './current-progress'

import { Track } from 'src/models'

type TrackIdValue = null | Track['id']

const rawTrackIdAtom = atom<TrackIdValue>(null)

export const currentTrackIdAtom = atom<TrackIdValue, TrackIdValue>(
  (get) => get(rawTrackIdAtom),
  (get, set, newTrackId) => {
    const currentTrackId = get(rawTrackIdAtom)

    if (currentTrackId !== newTrackId) {
      set(currentProgressAtom, 0)
    }

    set(rawTrackIdAtom, newTrackId)
  },
)

export const useCurrentTrackId = () => {
  return useAtom(currentTrackIdAtom)
}
