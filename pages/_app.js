import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import SANITIZE_CSS from 'const/sanitize.css'

const GlobalStyle = createGlobalStyle`
  ${SANITIZE_CSS.toString()}

  html {
    --primary: #000;
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
