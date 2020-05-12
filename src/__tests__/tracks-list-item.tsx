import 'jest-styled-components'
import styled from 'styled-components'
import React from 'react'
import { render } from '@testing-library/react'
import { TracksListItem } from '../tracks-list-item'
import { Track } from 'src/models/track'
import tracks from 'src/tracks.json'

const [track] = tracks as Track[]

const Button = styled.button`
  color: red;
`

describe('songs-list', () => {
  it('renders', () => {
    const f = render(<Button />)
    f.debug()
    const { debug } = render(
      <TracksListItem {...track} onSelect={console.log} isPlaying={false} />,
    )

    debug()
    expect(1).toBe(1)
  })
})
