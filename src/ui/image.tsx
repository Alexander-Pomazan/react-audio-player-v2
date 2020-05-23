import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { loadImage } from 'src/helpers'
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

const StyledImage = styled.img<{ src?: string; as: string }>`
  opacity: ${(p) => (p.src ? 1 : 0)};
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
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)

  useEffect(() => {
    if (!src) return setLoadedSrc(null)

    loadImage(src).then((...args) => {
      console.log(...args)
      setLoadedSrc(src)
    })
  }, [src])

  const as = renderTypeToTagName[renderType]

  return <StyledImage as={as} {...props} src={loadedSrc || undefined} />
}
