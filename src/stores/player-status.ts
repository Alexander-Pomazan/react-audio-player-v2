import { atom, useAtom } from 'jotai'

import { PlayerStatus } from 'src/models'

export const playerStatusAtom = atom<PlayerStatus>('pause')

export const usePlayerStatus = () => useAtom(playerStatusAtom)
