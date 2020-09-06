import styled from 'styled-components'
import { COLOR, CONTAINER_STYLE, TYPO, ICON, MEDIA_QUERY } from 'const'
import Icon from 'components/shared/icon'

const Nav = styled.nav`
  ${CONTAINER_STYLE}
  color: var(${COLOR.accent});
  position: sticky;
  top: 0;
  margin: 32px auto 0;
  padding: 12px 0;
  
  &::after {
    content: '';
    width: 100%;
    height: 175%;
    background: linear-gradient(180deg, var(${COLOR.neutral}) 50%, hsla(0, 0%, 100%, 0));
    position: absolute;
    z-index: 0;
    top: 0;
  }

  .wrapper {
    display: flex;
    align-items: center;
    height: 40px;
    position: relative;
    z-index: 1;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-grow: 1;

    .icon {
      margin-right: 4px;
      animation-name: spin;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
  
  .link {
    margin-right: 40px;
  }

  .toggler {
    display: flex;
    align-items: center;
    margin-left: 20px;
    text-align: right;

    .icon {
      margin-right: 4px;
    }
  }
  
  @media ${MEDIA_QUERY.belowTablet} {
    margin-top: 0;

    .wrapper {
      padding: 0 16px;
    }

    .link {
      margin-right: 0;
    }

    .toggler {
      margin-left: 0;
      flex-grow: 1;
      justify-content: flex-end;

      .icon {
        margin-right: 0;
      }
    }
    
    .nav-label {
      display: none;
    }
  }
`

function TopNav() {
  return (
    <Nav>
      <ul className="wrapper">
        <li className={`${TYPO.subtitle1} logo`}>
          <Icon src={ICON.cog} />
          <span className="nav-label">Gear</span>
        </li>
        <li className={`${TYPO.subtitle1} link`}>About / Experience</li>
        <li className={`${TYPO.subtitle1} toggler`}>
          <Icon src={ICON.light} />
          <span className="nav-label">Light</span>
        </li>
      </ul>
    </Nav>
  )
}

export default TopNav
