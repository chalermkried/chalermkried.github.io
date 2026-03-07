import styled from 'styled-components'
import {
  COLOR,
  CONTAINER_STYLE,
  TYPO,
  ICON,
  MEDIA_QUERY,
  EL_ABOUT,
  CONTENT_EXP,
} from '@/const'
import { Icon } from '@/components/shared/icon'
import { useStore } from '@/components/store'
import { MouseEvent, useEffect, useRef, useState } from 'react'

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

  .exp-nav-group {
    position: relative;

    &:hover .exp-dropdown,
    &.exp-nav-group--open .exp-dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &:hover .exp-chevron,
    &.exp-nav-group--open .exp-chevron {
      transform: rotate(180deg);
    }
  }

  .exp-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 240px;
    max-width: 320px;
    background: var(${COLOR.neutral});
    border: 1px solid var(${COLOR.accent});
    border-radius: 10px;
    padding: 6px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
    z-index: 10;

    &::before {
      content: '';
      position: absolute;
      top: -8px;
      right: 18px;
      border: 7px solid transparent;
      border-bottom-color: var(${COLOR.accent});
      border-top: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: -6px;
      right: 19px;
      border: 6px solid transparent;
      border-bottom-color: var(${COLOR.neutral});
      border-top: none;
    }
  }

  .exp-dropdown-item {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    font-size: 13px;
    color: var(${COLOR.primary});
    text-decoration: none;
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(${COLOR.accent}) 10%,
        transparent
      );
      color: var(${COLOR.accent});
    }

    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      border-radius: 0 0 10px 10px;
    }

    .dropdown-title {
      display: block;
    }

    .dropdown-subtitle {
      display: block;
      color: var(${COLOR.secondary});
    }
  }

  .exp-chevron {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    margin-left: 5px;
    vertical-align: middle;
    transition: transform 0.18s ease;
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
    font-weight: bold;
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

    .exp-nav-group {
      position: static;

      &:hover .exp-dropdown {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-6px);
      }

      &:hover .exp-chevron {
        transform: none;
      }

      &.exp-nav-group--open .exp-dropdown {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      &.exp-nav-group--open .exp-chevron {
        transform: rotate(180deg);
      }
    }

    .exp-dropdown {
      top: calc(100% + 8px);
      right: 0;
      left: 0;
      min-width: 0;
      max-width: none;
      border-radius: 10px;
      white-space: normal;

      &::before,
      &::after {
        display: none;
      }
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

function toggleIsDarkMode(e: MouseEvent<any>) {
  useStore.getState().toggleIsDarkMode()
  const target = e?.target as HTMLElement | undefined

  if (target) {
    target.blur()
    target.parentElement?.blur()
    target.parentElement?.parentElement?.blur()
  }
}

export function TopNav() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isExpOpen, setIsExpOpen] = useState(false)
  const storeDarkMode = useStore((state) => state.isDarkMode)
  const expGroupRef = useRef<HTMLSpanElement>(null)

  // Note: To solve issue with SSR, so, hack for only development.
  useEffect(() => {
    setIsDarkMode(storeDarkMode)
  }, [storeDarkMode])

  useEffect(() => {
    if (!isExpOpen) return
    const handleOutside = (e: Event) => {
      if (!expGroupRef.current?.contains(e.target as Node)) {
        setIsExpOpen(false)
      }
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [isExpOpen])

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
          <span
            className={`exp-nav-group${
              isExpOpen ? ' exp-nav-group--open' : ''
            }`}
            ref={expGroupRef}
          >
            <button
              className="btn"
              onClick={() => setIsExpOpen((v) => !v)}
              type="button"
            >
              EXPERIENCE
              <span className="exp-chevron" />
            </button>
            <div className="exp-dropdown" role="menu">
              {CONTENT_EXP.data.map((item) => (
                <a
                  key={item.id}
                  className={`${TYPO.caption1} exp-dropdown-item`}
                  href={`#${item.id}`}
                  onClick={() => setIsExpOpen(false)}
                  role="menuitem"
                >
                  <span className="dropdown-title">{item.title}</span>
                  <span className="dropdown-subtitle">{item.subtitle}</span>
                </a>
              ))}
            </div>
          </span>
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
