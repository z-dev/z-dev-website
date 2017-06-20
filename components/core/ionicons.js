import React from 'react'
import Link from 'components/core/link'
import styled from 'styled-components'

export const Ionicon = styled.span`
  font-size: 2em;
  color: ${props => props.theme.primaryColor};
`

export const IoniconLink = ({ url, icon }) => {
  return (
    <Link href={url}>
      <Ionicon className={icon} />
    </Link>
  )
}
