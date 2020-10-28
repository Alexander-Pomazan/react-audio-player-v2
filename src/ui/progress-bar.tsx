import React from 'react'
import styled from 'styled-components'

const Root = styled.div.attrs({ role: 'presentation' })`
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  background-color: #ddd;
`

const Progress = styled.div`
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
  progress: number
}

export const ProgressBar = (props: Props) => {
  const { progress } = props

  return (
    <Root onClick={console.log}>
      <Progress style={{ '--progress': `${progress * 100}%` } as any} />
    </Root>
  )
}
