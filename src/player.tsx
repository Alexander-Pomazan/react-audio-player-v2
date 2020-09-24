import React from 'react'
import styled from 'styled-components'
import { Provider } from 'jotai'

import { TracksList } from './tracks-list'
import { BottomBar } from './bottom-bar'

const BottomBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-index-bottom-bar);
`

const TracksListWrapper = styled.div`
  width: 800px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 6rem;
`

const Root = styled.div`
  height: 100%;
  width: 100%;

  overflow: auto;
`

export const Player = () => {
  return (
    <Provider>
      <Root>
        <BottomBarWrapper>
          <BottomBar />
        </BottomBarWrapper>

        <TracksListWrapper>
          <TracksList />
        </TracksListWrapper>
      </Root>
    </Provider>
  )
}
