import React from 'react'
import styled from 'styled-components'

import { Track } from 'src/models/track'

const Root = styled.button`
  display: flex;
  font-size: 1rem;
  align-items: center;
  width: 100%;

  padding: 0;

  background: none;
  border: none;

  :hover,
  :focus {
    background-color: #f4f4f4;
    outline: none;
  }
`

const Artwork = styled.div<{ imageUrl: string }>`
  width: 96px;
  height: 80px;

  background-image: ${(p) => (p.imageUrl ? `url(${p.imageUrl})` : 'none')};
  background-color: #ccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ArtistName = styled.span`
  font-weight: bold;
`

const NamingsWrapper = styled.div`
  margin-left: 2rem;

  font-size: 1.2em;
`

const Duration = styled.div`
  margin-left: auto;
  margin-right: 1.5em;
`

const ensureTwoDigits = (digit: number | string): string => {
  const stringifiedDigit = `${digit}`

  if (stringifiedDigit.length >= 2) return stringifiedDigit

  return `0${stringifiedDigit}`
}

const formatDuration = (duration: number) => {
  const minutes = ensureTwoDigits(Math.floor(duration / 60))
  const seconds = ensureTwoDigits(duration % 60)

  return `${minutes}:${seconds}`
}

interface TracksListItemProps extends Track {
  onSelect: () => void
  isPlaying?: boolean
}

export const TracksListItem: React.FC<TracksListItemProps> = ({
  artist,
  artworkUrl,
  name,
  duration,
  onSelect,
}) => {
  return (
    <Root tabIndex={0} onClick={onSelect}>
      <Artwork imageUrl={artworkUrl} />
      <NamingsWrapper>
        <ArtistName>{artist}</ArtistName> - {name}
      </NamingsWrapper>
      <Duration>{formatDuration(duration)}</Duration>
    </Root>
  )
}

TracksListItem.defaultProps = {
  isPlaying: false,
}
