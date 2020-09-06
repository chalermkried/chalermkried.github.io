import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import SANITIZE_CSS from 'const/sanitize.css'
import { COLOR, TYPO } from 'const'

const GlobalStyle = createGlobalStyle`
  ${SANITIZE_CSS.toString()}

  html {
    ${COLOR.primary}: #0d1321;
    ${COLOR.neutral}: #fdfaec;
    ${COLOR.secondary}: #738290;
    ${COLOR.accent}: #C94277;
    ${COLOR.accentLight}: #E9AFC6;
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
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
  .${TYPO.h4} {}
  .${TYPO.subtitle1} {
    font-size: 18px;
    font-weight: 500;
  }
  .${TYPO.subtitle2} {
    font-size: 14px;
    font-weight: 500;
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
