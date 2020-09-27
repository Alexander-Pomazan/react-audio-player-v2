import { useEffect } from 'react'

import { PlayerStatus } from './models'

type Arg = {
  src?: string
  playerStatus: PlayerStatus
}

export const createUseAudio = () => {
  const audioElement = new Audio()

  const useAudio = (arg: Arg) => {
    const { src, playerStatus } = arg

    useEffect(() => {
      if (src) {
        audioElement.src = src
      }
    }, [src])

    useEffect(() => {
      if (playerStatus === 'play') {
        audioElement.play()
      }

      if (playerStatus === 'pause') {
        audioElement.pause()
      }
    })
  }

  return useAudio
}
