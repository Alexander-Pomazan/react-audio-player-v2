import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;

  height: 4rem;
  background-color: white;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
`

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;

  height: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
`

const ControlsWrapper = styled.div`
  flex-grow: 1;

  padding-left: 2rem;
  padding-right: 2rem;
`

type Props = {
  controls: React.ReactNode
  progressBar: React.ReactNode
}

export const BottomBarLayout = (props: Props) => {
  const { controls, progressBar } = props

  return (
    <Root>
      <InnerWrapper>
        <div>{progressBar}</div>
        <ControlsWrapper>{controls}</ControlsWrapper>
      </InnerWrapper>
    </Root>
  )
}
