import React from 'react'

import { IconProps } from './types'

export const Play = (props: IconProps) => {
  const { height = 24, width = 24, ...rest } = props

  return (
    <svg height={height} width={width} viewBox='0 0 24 24' {...rest}>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M8 5v14l11-7z' />
    </svg>
  )
}
