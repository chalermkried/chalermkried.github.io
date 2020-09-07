import { createGlobalStyle } from 'styled-components'
import SANITIZE_CSS from 'const/sanitize.css'
import { COLOR, TYPO } from 'const'
import useStore from 'components/store'

const hexDark = '#131d31'
const hexLight = '#fdfaec'

const GlobalStyle = createGlobalStyle`
  ${SANITIZE_CSS.toString()}

  html {
    scroll-behavior: smooth;
    
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    ${COLOR.primary}: ${(props) => (props.isDarkMode ? hexLight : hexDark)};
    ${COLOR.neutral}: ${(props) => (props.isDarkMode ? hexDark : hexLight)};
    ${COLOR.secondary}: ${(props) =>
  props.isDarkMode ? '#759EB8' : '#B68F40'};
    ${COLOR.lighten}: #738290;
    ${COLOR.accent}: #CE5082;
    ${COLOR.accentEmp}: ${(props) =>
  props.isDarkMode ? '#B03063' : '#E08FAF'};
  }

  body {
    background-color: var(${COLOR.neutral});
    color: var(${COLOR.primary});
  }

  .${TYPO.body1} {
    font-size: 16px;
  }
  .${TYPO.body2} {
    font-size: 14px;
  }
  .${TYPO.body3} {
    font-size: 12px;
  }
  .${TYPO.caption1} {
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
  }
  .${TYPO.caption2} {
    font-size: 16px;
    font-style: italic;
    font-weight: 500;
  }
  .${TYPO.h1} {
    display: block;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
  }
  .${TYPO.h2} {
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  .${TYPO.h3} {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  .${TYPO.subtitle1} {
    font-size: 18px;
    font-weight: 500;
  }
  .${TYPO.subtitle2} {
    font-size: 14px;
    font-weight: 500;
  }
`

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const isDarkMode = useStore((state) => state.isDarkMode)

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
