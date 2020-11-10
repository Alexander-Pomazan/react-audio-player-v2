import React, { useCallback } from 'react'
import curry from 'lodash/curry'
import clamp from 'lodash/clamp'

import { Progress } from 'src/models'
import { useValueRef } from 'src/hooks'

const getProgress = curry((targetElement: Element, eventClientX: number) => {
  const { left, width } = targetElement.getBoundingClientRect()

  const progress = (eventClientX - left) / width

  return clamp(progress, 0, 1)
})

type SeekHandler = (progress: Progress) => void

type Props = React.ComponentProps<'div'> & {
  onSeekStart?: SeekHandler
  onSeek?: SeekHandler
  onSeekEnd?: SeekHandler
}

export const SeekableWrapper = (props: Props) => {
  const {
    onSeek,
    onSeekStart,
    onSeekEnd,
    children,
    onPointerDown,
    ...attributes
  } = props

  const seekHandlersRef = useValueRef({
    onSeek,
    onSeekStart,
    onSeekEnd,
  })

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      onPointerDown?.(event)

      if (event.isDefaultPrevented()) {
        return
      }

      const element = event.currentTarget
      const calculateProgress = getProgress(element)

      const progress = calculateProgress(event.clientX)

      seekHandlersRef.current.onSeekStart?.(progress)

      const handlePointerMove = (event: PointerEvent) => {
        event.preventDefault()
        const progress = calculateProgress(event.clientX)

        seekHandlersRef.current.onSeek?.(progress)
      }

      window.addEventListener('pointermove', handlePointerMove)
      const unsubscribeFromPointerMove = () =>
        window.removeEventListener('pointermove', handlePointerMove)

      const handlePointerUp = (event: PointerEvent) => {
        const progress = calculateProgress(event.clientX)
        seekHandlersRef.current.onSeekEnd?.(progress)

        unsubscribeFromPointerMove()
      }

      window.addEventListener('pointerup', handlePointerUp, { once: true })
    },
    [onPointerDown, seekHandlersRef],
  )

  return (
    <div onPointerDown={handlePointerDown} {...attributes}>
      {children}
    </div>
  )
}
