import styled from 'styled-components'
import { COLOR, CONTAINER_STYLE, TYPO, cssQuery, BREAKPOINT } from 'const/style'

const Nav = styled.nav`
  ${CONTAINER_STYLE}
  color: var(${COLOR.accent});
  position: sticky;
  top: 0;
  margin: 32px auto 0;
  padding: 12px 0;
  
  ${cssQuery(BREAKPOINT.belowTablet)`
    margin-top: 0;
  `}
  
  &::after {
    content: '';
    width: 100%;
    height: 175%;
    background: linear-gradient(180deg, var(${
      COLOR.neutral
    }) 50%, hsla(0, 0%, 100%, 0));
    position: absolute;
    z-index: 0;
    top: 0;
  }

  .wrapper {
    display: flex;
    position: relative;
    z-index: 1;
    
    ${cssQuery(BREAKPOINT.belowTablet)`padding: 0 20px;`}
  }
  
  .logo {
    flex-grow: 1;

    ${cssQuery(BREAKPOINT.belowTablet)`display: none;`}
  }
  
  .link {
    margin-right: 40px;
  }

  .toggler {
    margin-left: 20px;
    text-align: right;

    ${cssQuery(BREAKPOINT.belowTablet)`
      margin-left: 0;
      flex-grow: 1;
    `}
  }
`

function TopNav() {
  return (
    <Nav>
      <ul className="wrapper">
        <li className={`${TYPO.subtitle1} logo`}>Gear</li>
        <li className={`${TYPO.subtitle2} link`}>About</li>
        <li className={`${TYPO.subtitle2} link`}>Experience</li>
        <li className={`${TYPO.subtitle2} toggler`}>Light</li>
      </ul>
    </Nav>
  )
}

export default TopNav
