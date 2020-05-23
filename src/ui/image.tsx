import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { loadImage } from 'src/dom-utils'
import type { StyledExtendable } from 'src/types'

type RenderType = 'content' | 'presentation'

interface ImagePropsBase extends StyledExtendable {
  renderType?: 'content' | 'presentation'
  src?: string
}

interface ImagePropsContent
  extends ImagePropsBase,
    React.ImgHTMLAttributes<HTMLImageElement> {
  renderType: 'content'
}

interface ImagePropsPresentation
  extends ImagePropsBase,
    React.HTMLAttributes<HTMLDivElement> {
  renderType: 'presentation'
}

type ImageProps = ImagePropsContent | ImagePropsPresentation

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

export const Img: React.FC<ImageProps> = ({
  src,
  renderType = 'content',
  ...props
}) => {
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

  return <StyledImage as={as} {...props} src={src} isHidden={!isLoaded} />
}
