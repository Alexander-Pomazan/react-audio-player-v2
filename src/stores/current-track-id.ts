import { atom, useAtom } from 'jotai'

import { Track } from 'src/models'

export const currentTrackIdAtom = atom<null | Track['id']>(null)

export const useCurrentTrackId = () => useAtom(currentTrackIdAtom)
