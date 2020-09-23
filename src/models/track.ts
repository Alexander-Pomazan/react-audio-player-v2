import { Id } from './id'

export type Track = {
  id: Id
  name: string
  artist: string
  artworkUrl: string
  duration: number
  source: string
}
