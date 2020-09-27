import { atom, useAtom } from 'jotai'

const currentProgressAtom = atom(0)

export const useCurrentProgress = () => useAtom(currentProgressAtom)
