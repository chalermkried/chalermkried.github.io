import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR, TYPO } from 'const'

const Div = styled.div`
  background-color: var(${COLOR.secondary});
  color: var(${COLOR.neutral});
  border-radius: 48px;
  padding: 4px 8px;
`

function Chip({ children, className }) {
  return (
    <Div className={`${TYPO.subtitle2}${className ? ` ${className}` : ''}`}>
      {children}
    </Div>
  )
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Chip.defaultProps = {
  className: '',
}

export default Chip
