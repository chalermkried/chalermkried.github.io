import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.2s linear;

  &.loaded {
    opacity: 1;
  }
`

export function Icon({ className, src }: { className?: string; src: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Svg
      className={`icon${isLoaded ? ' loaded' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      <use href={src} />
    </Svg>
  )
}
