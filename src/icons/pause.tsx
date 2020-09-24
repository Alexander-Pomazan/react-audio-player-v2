import React from 'react'

import { IconProps } from './types'

export const Pause = (props: IconProps) => {
  const { height = 24, width = 24, fill = 'black' } = props

  return (
    <svg
      height={height}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
    </svg>
  )
}
