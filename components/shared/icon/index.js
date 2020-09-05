import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Svg = styled.svg`
  width: 40px;
  height: 40px;
  opacity: 0;
  transition: opacity 0.2s linear;

  &.loaded {
    opacity: 1;
  }
`

function Icon({ className, src }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Svg className={`icon${isLoaded ? ' loaded' : ''}${className}`}>
      <use href={src} />
    </Svg>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
}

Icon.defaultProps = {
  className: '',
  src: undefined,
}

export default Icon
