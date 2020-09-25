import React from 'react'
import { Provider } from 'jotai'

import { TracksList } from './tracks-list'
import { BottomBar } from './bottom-bar'
import { PlayerLayout } from './player-layout'

export const Player = () => {
  return (
    <Provider>
      <PlayerLayout bottomBar={<BottomBar />} playlist={<TracksList />} />
    </Provider>
  )
}
