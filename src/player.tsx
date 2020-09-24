import React from 'react'
import styled from 'styled-components'
import { Provider } from 'jotai'

import { TracksList } from './tracks-list'
import { BottomBar } from './bottom-bar'

const BottomBarWrapper = styled.div`
  position: fixed;
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
  margin-bottom: 4rem;
`

export const Player = () => {
  return (
    <Provider>
      <BottomBarWrapper>
        <BottomBar />
      </BottomBarWrapper>

      <TracksListWrapper>
        <TracksList />
      </TracksListWrapper>
    </Provider>
  )
}
