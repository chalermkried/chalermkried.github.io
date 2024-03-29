import { createGlobalStyle, css } from 'styled-components'
import { TYPO } from './typo'

export const COLOR = {
  primary: '--p',
  neutral: '--n',
  secondary: '--s',
  lighten: '--l',
  accent: '--a',
  accentEmp: '--ae',
}

export const MEDIA_QUERY = {
  belowTablet: '(max-width: 767px)',
  smallPhone: '(max-width: 480px)',
  highDesktop: '(min-width: 1281px)',
  tabletOnly: '(min-width: 768px) and (max-width: 1024px)',
}

export const CONTAINER_STYLE = css`
  margin: auto;
  width: 80%;
  max-width: 720px;

  @media ${MEDIA_QUERY.belowTablet} {
    width: 100%;
  }
`

const hexDark = '#131d31'
const hexLight = '#fdfaec'

export const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  html {
    scroll-behavior: smooth;
    
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    --ff: system-ui, /* macOS 10.11-10.12 */ -apple-system,
      /* Windows 6+ */ 'Segoe UI', /* Android 4+ */ 'Roboto',
      /* Ubuntu 10.10+ */ 'Ubuntu', /* Gnome 3+ */ 'Cantarell',
      /* KDE Plasma 5+ */ 'Noto Sans', /* fallback */ sans-serif,
      /* macOS emoji */ 'Apple Color Emoji', /* Windows emoji */ 'Segoe UI Emoji',
      /* Windows emoji */ 'Segoe UI Symbol', /* Linux emoji */ 'Noto Color Emoji';
    ${COLOR.primary}: ${(props) => (props.isDarkMode ? hexLight : hexDark)};
    ${COLOR.neutral}: ${(props) => (props.isDarkMode ? hexDark : hexLight)};
    ${COLOR.secondary}: ${(props) =>
  props.isDarkMode ? '#759EB8' : '#628BA7'};
    ${COLOR.lighten}: #738290;
    ${COLOR.accent}: #CE5082;
    ${COLOR.accentEmp}: ${(props) =>
  props.isDarkMode ? '#B03063' : '#E08FAF'};
  }

  body {
    background-color: var(${COLOR.neutral});
    color: var(${COLOR.primary});
  }
    
  html,
  button {
    font-family: 'Heebo', var(--ff);
  }

  .${TYPO.body1} {
    font-size: 16px;
    letter-spacing: 0.8px;
    line-height: 1.7;
  }
  .${TYPO.body2} {
    font-size: 14px;
    letter-spacing: 0.7px;
    line-height: 1.9;
  }
  .${TYPO.body3} {
    font-size: 12px;
  }
  .${TYPO.caption1} {
    font-size: 16px;
    font-style: italic;
    font-weight: 700;
  }
  .${TYPO.caption2} {
    font-family: 'Fira Code', var(--ff);
    font-size: 12px;
    font-weight: 700;
  }
  .${TYPO.h1} {
    display: block;
    font-family: 'Oswald', var(--ff);
    font-size: 36px;
    margin: 0;
    letter-spacing: 1.8px;
  }
  .${TYPO.h2} {
    display: block;
    font-family: 'Oswald', var(--ff);
    font-size: 28px;
    margin: 0;
    letter-spacing: 1px;
  }
  .${TYPO.h3} {
    font-size: 24px;
    font-family: 'Oswald', var(--ff);
    margin: 0;
    letter-spacing: 0.6px;
  }
  .${TYPO.subtitle1} {
    font-family: 'Fira Code', var(--ff);
    font-size: 18px;
    font-weight: 700;
  }
  .${TYPO.subtitle2} {
    font-family: 'Fira Code', var(--ff);
    font-size: 14px;
    font-weight: 700;
  }
`
