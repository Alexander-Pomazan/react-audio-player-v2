import { atom, useAtom } from 'jotai'

import { PlayerStatus } from 'src/models'

const playerStatusAtom = atom<PlayerStatus>('pause')

export const usePlayerStatus = () => useAtom(playerStatusAtom)
