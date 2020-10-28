import { useEffect, useState } from 'react'

export const useSyncedState = <T extends unknown>(
  value: T,
  { disableSync = false }: { disableSync?: boolean } = {},
) => {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    if (disableSync) {
      return
    }

    if (value !== localValue) {
      setLocalValue(value)
    }
  }, [disableSync, localValue, value])

  return [localValue, setLocalValue] as const
}
