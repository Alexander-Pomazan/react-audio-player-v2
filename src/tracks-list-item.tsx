import React from 'react'
import { Track } from 'src/models/track'
import styled from 'styled-components'

interface TracksListItemProps extends Track {
  onSelect: (trackId: Track['id']) => void
  isPlaying?: boolean
}

const Root = styled.li`
  color: red;

  :active {
    border: 1px solid red;
  }
`

export const TracksListItem: React.FC<TracksListItemProps> = () => {
  return <Root tabIndex={0}>123</Root>
}

TracksListItem.defaultProps = {
  isPlaying: false,
}
