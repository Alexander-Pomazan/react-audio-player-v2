import React from 'react'
import { render } from '@testing-library/react'
import { TracksList } from '../tracks-list'
import tracks from '../tracks.json'

describe('songs-list', () => {
  it('renders', () => {
    render(<TracksList tracks={tracks} />)
  })
})
