import styled from 'styled-components'
import { COLOR, CONTAINER_STYLE, TYPO, ICON, MEDIA_QUERY } from 'const'
import Icon from 'components/shared/icon'
import useStore from 'components/store'
import { useCallback, useEffect, useState } from 'react'

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
    left: 0;
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

    .btn {
      background-color: transparent;
      border: 0;
      display: flex;
      align-items: center;
      color: var(${COLOR.accent});
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(${COLOR.accentEmp});
      }
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
  const [isDarkMode, setIsDarkMode] = useState(false)
  const storeDarkMode = useStore((state) => state.isDarkMode)
  const toggleIsDarkMode = useStore(
    useCallback((state) => state.toggleIsDarkMode, []),
  )

  // Note: To solve issue with SSR, so, hack for only development.
  useEffect(() => {
    setIsDarkMode(storeDarkMode)
  }, [storeDarkMode])

  return (
    <Nav>
      <ul className="wrapper">
        <li className={`${TYPO.h3} logo`}>
          <Icon src={ICON.cog} />
          <span className="nav-label">Gear</span>
        </li>
        <li className={`${TYPO.subtitle2} link`}>ABOUT / EXPERIENCE</li>
        <li className="toggler">
          <button className="btn" onClick={toggleIsDarkMode} type="button">
            <Icon src={isDarkMode ? ICON.moon : ICON.light} />
            <span className={`${TYPO.subtitle2} nav-label`}>
              {isDarkMode ? 'DARK' : 'LIGHT'}
            </span>
          </button>
        </li>
      </ul>
    </Nav>
  )
}

export default TopNav
