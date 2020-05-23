import React from 'react'
import styled from 'styled-components'

import { TracksListItem } from './tracks-list-item'

import { useLoadTracks } from 'src/hooks'
import { List } from 'src/ui'

const Root = styled.div`
  width: 800px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-color: #fff;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
`

export const Player: React.FC = () => {
  const tracks = useLoadTracks('/tracks.json')

  return (
    <Root>
      <List direction='column'>
        {tracks.map((track) => (
          <TracksListItem key={track.id} {...track} onClick={console.log} />
        ))}
      </List>
    </Root>
  )
}
