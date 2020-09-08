import styled from 'styled-components'
import { COLOR, CONTAINER_STYLE, TYPO, ICON, MEDIA_QUERY } from 'const'
import Icon from 'components/shared/icon'
import useStore from 'components/store'
import { useEffect, useState } from 'react'
import { EL_ABOUT, EL_EXP } from 'const/element'

const Nav = styled.nav`
  ${CONTAINER_STYLE}
  position: sticky;
  top: 0;
  margin: 32px auto 0;
  padding: 12px 0;

  &::after {
    content: '';
    width: 100%;
    height: 110px;
    background: linear-gradient(
      180deg,
      var(${COLOR.neutral}) 50%,
      hsla(0, 0%, 100%, 0)
    );
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
    color: var(${COLOR.secondary});

    .icon {
      margin-right: 4px;
      animation-name: spin;
      animation-duration: 2.5s;
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

  .links,
  .toggler {
    color: var(${COLOR.accent});
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

  .btn {
    background-color: transparent;
    border: 0;
    display: inline-flex;
    align-items: center;
    color: var(${COLOR.accent});
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: color 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      color: var(${COLOR.accentEmp});
    }

    @media ${MEDIA_QUERY.belowTablet} {
      &:hover {
        color: inherit;
      }

      &:active {
        color: var(${COLOR.accentEmp});
      }
    }
  }

  @media ${MEDIA_QUERY.belowTablet} {
    margin-top: 0;

    .wrapper {
      padding: 0 16px;
    }

    .links {
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

function toggleIsDarkMode(e) {
  useStore.getState().toggleIsDarkMode()

  if (e?.target) {
    e.target.blur()
    e.target.parentElement?.blur()
    e.target.parentElement.parentElement?.blur()
  }
}

function TopNav() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const storeDarkMode = useStore((state) => state.isDarkMode)

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
        <li className={`${TYPO.subtitle2} links`}>
          <a className="btn" href={`#${EL_ABOUT}`}>
            ABOUT
          </a>
          &nbsp;/&nbsp;
          <a className="btn" href={`#${EL_EXP}`}>
            EXPERIENCE
          </a>
        </li>
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
