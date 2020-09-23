import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { loadImage } from 'src/dom-utils'
import type { StyledExtendable } from 'src/types'

type RenderType = 'content' | 'presentation'

type PropsBase = StyledExtendable & {
  renderType?: 'content' | 'presentation'
  src?: string
}

type PropsContent = PropsBase &
  React.ImgHTMLAttributes<HTMLImageElement> & {
    renderType: 'content'
  }

type PropsPresentation = PropsBase &
  React.HTMLAttributes<HTMLDivElement> & {
    renderType: 'presentation'
  }

type Props = PropsContent | PropsPresentation

const renderTypeToTagName: {
  [key in RenderType]: 'div' | 'img'
} = {
  content: 'img',
  presentation: 'div',
} as const

const StyledImage = styled.img<{ src?: string; as: string; isHidden: boolean }>`
  opacity: ${(p) => (p.isHidden ? 0 : 1)};
  transition: opacity 300ms ease-out;
  ${(p) => {
    if (p.as === 'div') {
      return `background-image: url(${p.src});`
    }
  }}
`

export const Img = (props: Props) => {
  const { src, renderType = 'content', ...imgProps } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!src) return setIsLoaded(false)

    let isComponentMounted = true

    loadImage(src).then(() => isComponentMounted && setIsLoaded(true))

    return () => {
      isComponentMounted = false
    }
  }, [src])

  const as = renderTypeToTagName[renderType]

  return <StyledImage as={as} {...imgProps} src={src} isHidden={!isLoaded} />
}
