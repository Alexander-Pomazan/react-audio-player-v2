import React, { useState } from 'react'
import styled from 'styled-components'

import { SeekableWrapper } from './seekable-wrapper'

import { useSyncedState } from 'src/hooks'
import { Progress } from 'src/models'

const SeekableRoot = styled(SeekableWrapper).attrs({ role: 'presentation' })<{
  isDisabled: boolean
}>`
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  background-color: #ddd;
  ${(p) =>
    p.isDisabled &&
    `
    pointer-events: none;
  `}

  cursor: pointer;
`

const ProgressFill = styled.div<{
  disableTransition: boolean
}>`
  --progress: 0%;

  position: absolute;
  right: 100%;
  top: 0;
  height: 100%;
  width: 100%;

  transition: ${(p) =>
    p.disableTransition ? 'none' : 'transform 0.2s linear'};

  background-color: #aaa;

  transform: translateX(var(--progress));
`

type Props = {
  isDisabled?: boolean
  progress: Progress
  onChangeProgress: (progress: Progress) => void
}

export const ProgressBar = (props: Props) => {
  const { progress, onChangeProgress, isDisabled = false } = props

  const [isSeekingManually, setIsSeekingManually] = useState(false)
  const [localProgress, setLocalProgress] = useSyncedState(progress, {
    disableSync: isSeekingManually,
  })

  const onSeekStart = (newProgress: Progress) => {
    setIsSeekingManually(true)
    setLocalProgress(newProgress)
  }

  const onSeek = (newProgress: Progress) => {
    setLocalProgress(newProgress)
  }

  const onSeekEnd = (newProgress: Progress) => {
    setIsSeekingManually(false)
    onChangeProgress(newProgress)
  }

  return (
    <SeekableRoot
      isDisabled={isDisabled}
      onSeekStart={onSeekStart}
      onSeek={onSeek}
      onSeekEnd={onSeekEnd}
    >
      <ProgressFill
        disableTransition={isSeekingManually}
        style={{ '--progress': `${localProgress * 100}%` } as any}
      />
    </SeekableRoot>
  )
}
