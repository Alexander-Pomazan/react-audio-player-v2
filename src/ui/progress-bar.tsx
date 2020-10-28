import React from 'react'
import styled from 'styled-components'

import { Progress } from 'src/models'

const Root = styled.div.attrs({ role: 'presentation' })`
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  background-color: #ddd;
`

const ProgressFill = styled.div`
  --progress: 0%;

  position: absolute;
  right: 100%;
  top: 0;
  height: 100%;
  width: 100%;

  transition: transform 0.2s linear;

  background-color: #aaa;

  transform: translateX(var(--progress));
`

type Props = {
  progress: Progress
  onChangeProgress: (progress: Progress) => void
}

export const ProgressBar = (props: Props) => {
  const { progress, onChangeProgress } = props

  return (
    <Root
      onClick={(event) => {
        const element = event.currentTarget

        const { left, width } = element.getBoundingClientRect()

        const newProgress = (event.clientX - left) / width

        onChangeProgress(newProgress)
      }}
    >
      <ProgressFill style={{ '--progress': `${progress * 100}%` } as any} />
    </Root>
  )
}
