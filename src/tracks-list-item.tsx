import React from 'react'
import styled from 'styled-components'

import { Img } from 'src/ui'

// We only want keyboard navigation styles appear when users uses keyboard navigation
// https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press
const InnerRoot = styled.div.attrs({ tabIndex: -1 })`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  border-radius: 2px;

  :focus {
    outline: none;
    box-shadow: none;
  }
`

const Root = styled.button.attrs({
  tabIndex: 0,
})<{ isSelected: boolean }>`
  --active-bg-color: #f2f2f2;

  display: block;
  font-size: 1rem;
  height: 100%;
  width: 100%;

  padding: 0;
  background: none;
  border: none;

  cursor: pointer;

  ${/* sc-block */ (p) => {
    if (p.isSelected)
      return `
      background-color: var(--active-bg-color);
    `
  }}

  :focus > ${InnerRoot /* sc-sel */} {
    box-shadow: 0 0 0px 1px var(--focus-color);
  }

  :focus {
    outline: none;
    z-index: 10;
    position: relative;
  }

  :hover {
    background-color: var(--active-bg-color);
  }
`

const ArtworkWrapper = styled.div`
  width: 96px;
  height: 80px;

  flex-shrink: 0;
`

const Artwork = styled(Img).attrs({ renderType: 'presentation' })<{
  imageUrl?: string
}>`
  width: 100%;
  height: 100%;

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

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 800px;
  max-width: 100%;
  text-align: left;
`

const Duration = styled.div`
  margin-left: auto;
  margin-right: 1.5em;
`

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  isSelected?: boolean
  artist: string
  artworkUrl: string
  trackName: string
  duration: string
}

export const TracksListItem = (props: Props) => {
  const {
    artist,
    artworkUrl,
    trackName,
    duration,
    onClick,
    isSelected = false,
  } = props

  return (
    <Root onClick={onClick} isSelected={isSelected}>
      <InnerRoot>
        <ArtworkWrapper>
          <Artwork src={artworkUrl} />
        </ArtworkWrapper>

        <NamingsWrapper>
          <ArtistName>{artist}</ArtistName> - {trackName}
        </NamingsWrapper>

        <Duration>{duration}</Duration>
      </InnerRoot>
    </Root>
  )
}
