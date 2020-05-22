import React from 'react'

import { useLoadTracks } from 'src/hooks'
import { List } from 'src/ui'

export const Player: React.FC = () => {
  const tracks = useLoadTracks('/tracks.json')

  return (
    <List direction='column' gap={20}>
      {tracks.map((track) => (
        <pre key={track.id}>{JSON.stringify(track, null, 4)}</pre>
      ))}
    </List>
  )
}
