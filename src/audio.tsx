import { useCallback, useEffect, useState } from 'react'

import { PlayerStatus } from './models'

type Unsubscribe = () => void

type Arg = {
  src?: string
  playerStatus: PlayerStatus
  progress: number
  onProgress: (progress: number, event: Event) => void
}

export const useAudio = (arg: Arg) => {
  const { src, playerStatus, progress, onProgress } = arg

  const [audioElement] = useState(() => new Audio())

  const subscribeTo = useCallback(
    (
      ...args: Parameters<typeof audioElement.addEventListener>
    ): Unsubscribe => {
      audioElement.addEventListener(...args)

      return () => {
        audioElement.removeEventListener(...args)
      }
    },
    [audioElement],
  )

  useEffect(() => {
    if (src) {
      audioElement.src = src
    }
  }, [src, audioElement])

  useEffect(() => {
    if (playerStatus === 'play') {
      audioElement.play()
    }

    if (playerStatus === 'pause') {
      audioElement.pause()
    }
  }, [audioElement, playerStatus, src])

  useEffect(() => {
    // TODO: bad solution as we have two sources of truth that are not in sync
    if (Math.round(audioElement.currentTime) !== Math.round(progress)) {
      audioElement.currentTime = progress
    }
  }, [audioElement, progress])

  useEffect(() => {
    if (!onProgress) {
      return
    }

    const unsubscribe = subscribeTo('timeupdate', (event: Event) => {
      onProgress(audioElement.currentTime, event)
    })

    return unsubscribe
  }, [audioElement, onProgress, subscribeTo])
}
