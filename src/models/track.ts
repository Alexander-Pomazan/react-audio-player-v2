import { Id } from './id'

export interface Track {
  id: Id
  name: string
  artist: string
  artworkUrl: string
  duration: number
  source: string
}
