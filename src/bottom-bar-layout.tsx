import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 4rem;
  background-color: white;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
`

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`

type Props = {
  controls: React.ReactNode
}

export const BottomBarLayout = (props: Props) => {
  const { controls } = props

  return (
    <Root>
      <InnerWrapper>{controls}</InnerWrapper>
    </Root>
  )
}
