import React from 'react'

import { IconProps } from './types'

export const Next = (props: IconProps) => {
  const { height = 24, width = 24, ...rest } = props

  return (
    <svg height={height} width={width} viewBox='0 0 24 24' {...rest}>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' />
    </svg>
  )
}
