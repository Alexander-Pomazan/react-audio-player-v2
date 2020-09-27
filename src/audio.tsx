import { useEffect } from 'react'

import { PlayerStatus } from './models'

type Unsubscribe = () => void

type Arg = {
  src?: string
  playerStatus: PlayerStatus
  progress: number
  onProgress: (progress: number, event: Event) => void
}

const MANUAL_SEEK_TRIGGER_INTERVAL = 1

export const createUseAudio = () => {
  const audioElement = new Audio()

  const subscribeTo = (
    ...args: Parameters<typeof audioElement.addEventListener>
  ): Unsubscribe => {
    audioElement.addEventListener(...args)

    return () => {
      audioElement.removeEventListener(...args)
    }
  }

  const useAudio = (arg: Arg) => {
    const { src, playerStatus, progress, onProgress } = arg

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
    }, [playerStatus])

    useEffect(() => {
      // TODO: bad solution as we have two sources of truth that are not in sync
      // if (audioElement.currentTime - progress > MANUAL_SEEK_TRIGGER_INTERVAL) {
      // audioElement.currentTime = progress
      // }
    }, [progress])

    useEffect(() => {
      if (!onProgress) {
        return
      }

      const unsubscribe = subscribeTo('timeupdate', (event: Event) => {
        onProgress(audioElement.currentTime, event)
      })

      return unsubscribe
    }, [onProgress])
  }

  return useAudio
}
