import React from 'react'
import { hot } from 'react-hot-loader'

import { Player } from './player'

const AppRaw: React.FC = () => {
  return <Player />
}

export const App = hot(module)(AppRaw)
