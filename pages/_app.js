import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import SANITIZE_CSS from 'const/sanitize.css'
import { COLOR, TYPO } from 'const/style'

const GlobalStyle = createGlobalStyle`
  ${SANITIZE_CSS.toString()}

  html {
    ${COLOR.primary}: #0d1321;
    ${COLOR.neutral}: #ffeddf;
    ${COLOR.secondary}: #E57A44;
    ${COLOR.accent}: #5D43B1;
  }

  body {
    background-color: var(${COLOR.neutral});
    color: var(${COLOR.primary});
  }

  .${TYPO.body1} {}
  .${TYPO.body2} {}
  .${TYPO.h1} {
    font-size: 32px;
    margin: 0;
  }
  .${TYPO.h2} {
    font-size: 24px;
    margin: 0;
  }
  .${TYPO.h3} {}
  .${TYPO.h4} {}
  .${TYPO.subtitle1} {
    font-weight: 500;
    font-size: 20px;
  }
  .${TYPO.subtitle2} {
    font-weight: 500;
    font-size: 16px;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </>
    )
  }
}
