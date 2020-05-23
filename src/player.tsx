import React from 'react'
import styled from 'styled-components'

import { TracksListItem } from './tracks-list-item'

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
      <List direction='column'>
        {tracks.map((track) => (
          <TracksListItem key={track.id} {...track} onSelect={console.log} />
        ))}
      </List>
    </Root>
  )
}
