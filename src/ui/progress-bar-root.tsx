import React, { useCallback } from 'react'
import styled from 'styled-components'
import curry from 'lodash/curry'

import { Progress } from 'src/models'
import { useValueRef } from 'src/hooks'

const getProgress = curry((targetElement: Element, eventClientX: number) => {
  const { left, width } = targetElement.getBoundingClientRect()

  const progress = (eventClientX - left) / width

  return progress
})

const Root = styled.div.attrs({ role: 'presentation' })`
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  background-color: #ddd;

  cursor: pointer;
`

type SeekHandler = (progress: Progress) => void

type Props = {
  onSeekStart?: SeekHandler
  onSeek?: SeekHandler
  onSeekEnd?: SeekHandler
  children: React.ReactNode
}

export const ProgressBarRoot = (props: Props) => {
  const { onSeek, onSeekStart, onSeekEnd, children } = props

  const seekHandlersRef = useValueRef({
    onSeek,
    onSeekStart,
    onSeekEnd,
  })

  const handlePointerDown: React.PointerEventHandler = useCallback(
    (event) => {
      const element = event.currentTarget
      const calculateProgress = getProgress(element)

      const progress = calculateProgress(event.clientX)

      seekHandlersRef.current.onSeekStart?.(progress)

      const handlePointerMove = (event: PointerEvent) => {
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
    [seekHandlersRef],
  )

  return <Root onPointerDown={handlePointerDown}>{children}</Root>
}
