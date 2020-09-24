import React, { useState } from 'react'
import styled from 'styled-components'
import { Provider } from 'jotai'

import { TracksList } from './tracks-list'
import { BottomBar } from './bottom-bar'

import { Track } from 'src/models'

const BottomBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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
      <TracksListWrapper>
        <TracksList />
      </TracksListWrapper>

      <BottomBarWrapper>
        <BottomBar />
      </BottomBarWrapper>
    </Provider>
  )
}
