import { invariant } from 'ts-invariant'

/**
 * From 0 to 1
 */
export type Progress = number

export const progressInvariant = (progress: Progress) => {
  invariant(
    progress >= 0 || progress <= 1,
    'Detected progress value outside of range [0,1]',
  )
}
