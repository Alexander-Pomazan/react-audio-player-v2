import React from 'react'
import { Provider as JotaiProvider } from 'jotai'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import { TracksList } from './tracks-list'
import { BottomBar } from './bottom-bar'
import { PlayerLayout } from './player-layout'

const queryCache = new QueryCache()

export const Player = () => {
  return (
    <JotaiProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <PlayerLayout bottomBar={<BottomBar />} playlist={<TracksList />} />
      </ReactQueryCacheProvider>
    </JotaiProvider>
  )
}
