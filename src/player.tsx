import React, { useState } from 'react'
import styled from 'styled-components'

import { TracksListItem } from './tracks-list-item'

import { ensureTwoDigits } from 'src/helpers'
import { Track } from 'src/models'
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

const formatDuration = (duration: Track['duration']) => {
  const minutes = ensureTwoDigits(Math.floor(duration / 60))
  const seconds = ensureTwoDigits(duration % 60)

  return `${minutes}:${seconds}`
}

export const Player: React.FC = () => {
  const tracks = useLoadTracks('/tracks.json')

  const [selectedTrackId, setSelectedTrackId] = useState<null | Track['id']>(
    null,
  )

  return (
    <Root>
      <List direction='column'>
        {tracks.map((track) => (
          <TracksListItem
            key={track.id}
            trackName={track.name}
            duration={formatDuration(track.duration)}
            artist={track.artist}
            artworkUrl={track.artworkUrl}
            isSelected={track.id === selectedTrackId}
            onClick={() => setSelectedTrackId(track.id)}
          />
        ))}
      </List>
    </Root>
  )
}
