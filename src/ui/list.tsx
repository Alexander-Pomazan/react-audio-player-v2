import React from 'react'
import styled from 'styled-components'

import type { StyledExtendable } from 'src/types'

type RootProps = {
  gap?: number
  direction?: 'column' | 'row'
}

const Root = styled.ul<RootProps>`
  display: flex;
  flex-direction: ${(p) => p.direction};

  > *:not(:first-child) {
    ${(p) => {
      if (!p.gap) return

      if (p.direction === 'column') {
        return `margin-top: ${p.gap}px;`
      }

      return `margin-left: ${p.gap}px;`
    }}
  }
`

type Props = StyledExtendable &
  RootProps & {
    children: React.ReactNode[] | React.ReactNode
  }

export const List = (props: Props) => {
  const { children, className, gap, direction } = props

  const wrappedChildren = React.Children.map(children, (child, idx) => {
    const childKey = React.isValidElement(child) ? child.key || idx : idx

    return <li key={childKey}>{child}</li>
  })

  return (
    <Root gap={gap} direction={direction} className={className}>
      {wrappedChildren}
    </Root>
  )
}
