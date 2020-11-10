import { useRef } from 'react'

export const useValueRef = <T>(value: T) => {
  const valueRef = useRef(value)

  valueRef.current = value

  return valueRef
}
