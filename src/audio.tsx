import { useCallback, useEffect, useState } from 'react'

import { PlayerStatus } from './models'

type Unsubscribe = () => void

type Arg = {
  src?: string
  playerStatus: PlayerStatus
  progress: number
  onProgress: (progress: number, event: Event) => void
  trackDuration?: number
}

export const useAudio = (arg: Arg) => {
  const { src, playerStatus, progress, onProgress, trackDuration = 0 } = arg

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
    const progressTime = progress * trackDuration ?? 0

    // TODO: bad solution as we have two sources of truth that are not in sync
    if (Math.round(audioElement.currentTime) !== Math.round(progressTime)) {
      audioElement.currentTime = progressTime
    }
  }, [audioElement, progress, trackDuration])

  useEffect(() => {
    if (!onProgress) {
      return
    }

    const unsubscribe = subscribeTo('timeupdate', (event: Event) => {
      onProgress(audioElement.currentTime / trackDuration, event)
    })

    return unsubscribe
  }, [audioElement, onProgress, subscribeTo, trackDuration])
}
