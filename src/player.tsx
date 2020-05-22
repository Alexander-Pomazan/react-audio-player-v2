import React from 'react'
import styled from 'styled-components'

import { useLoadTracks } from 'src/hooks'
import { List } from 'src/ui'

const Root = styled.div`
  width: 800px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const Player: React.FC = () => {
  const tracks = useLoadTracks('/tracks.json')

  return (
    <Root>
      <List direction='column' gap={40}>
        {tracks.map((track) => (
          <span key={track.id}>{JSON.stringify(track, null, 8)}</span>
        ))}
      </List>
    </Root>
  )
}
