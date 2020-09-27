import React from 'react'
import styled from 'styled-components'

const Root = styled.div.attrs({ role: 'presentation' })`
  width: 100%;
  height: 1rem;
  position: relative;

  background-color: #ddd;
`

const Progress = styled.div`
  --progress-width: 0%;

  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: var(--progress-width);

  background-color: #aaa;
`

type Props = {
  progress: number
}

export const ProgressBar = (props: Props) => {
  const { progress } = props

  return (
    <Root>
      <Progress style={{ '--progress-width': `${progress * 100}%` } as any} />
    </Root>
  )
}
