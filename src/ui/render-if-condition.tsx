import React, { Fragment } from 'react'

type Props = {
  condition: boolean
  fallback?: React.ReactNode | (() => React.ReactNode)
  children: React.ReactNode | (() => React.ReactNode)
}

export const RenderIfCondition = (props: Props) => {
  const { condition, fallback = null, children = null } = props

  if (condition) {
    return <Fragment>{children}</Fragment>
  }

  return <Fragment>{fallback}</Fragment>
}
