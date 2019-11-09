import _ReactResponsiveEmbed from 'react-responsive-embed'
import React from 'react'
import Wide from './Wide'
import styled from 'styled-components'

const Normal = styled.div`
  margin: 0;
  padding: 0;
`

export const ReactResponsiveEmbed: React.FC<{
  allowFullScreen: boolean
  src: string
  narrow?: boolean
}> = ({ narrow, ...others }) =>
  // 1.66rem matches line height
  narrow ? (
    <Normal style={{ marginBottom: '1.66rem' }}>
      <_ReactResponsiveEmbed {...others} />
    </Normal>
  ) : (
    <Wide style={{ marginBottom: '1.66rem' }}>
      <_ReactResponsiveEmbed {...others} />
    </Wide>
  )
