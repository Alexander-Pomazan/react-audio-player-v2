import { atom, useAtom } from 'jotai'

import { Progress, progressInvariant } from 'src/models'

export const currentProgressAtom = atom<Progress>(0)

export const useCurrentProgress = () => {
  const atomValue = useAtom(currentProgressAtom)

  progressInvariant(atomValue[0])

  return atomValue
}
