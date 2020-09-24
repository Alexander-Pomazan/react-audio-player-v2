import React from 'react'
import styled from 'styled-components'

import { TracksListItem } from './tracks-list-item'

import { ensureTwoDigits } from 'src/helpers'
import { Track } from 'src/models'
import { List } from 'src/ui'
import { useTracks, useCurrentTrackId } from 'src/stores'

const formatDuration = (duration: Track['duration']) => {
  const minutes = ensureTwoDigits(Math.floor(duration / 60))
  const seconds = ensureTwoDigits(duration % 60)

  return `${minutes}:${seconds}`
}

const Root = styled.div`
  background-color: #fff;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
`

export const TracksList = () => {
  const [currentTrackId, onSelectTrack] = useCurrentTrackId()
  const tracks = useTracks()

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
            isSelected={track.id === currentTrackId}
            onClick={() => onSelectTrack(track.id)}
          />
        ))}
      </List>
    </Root>
  )
}
