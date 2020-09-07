import Head from 'next/head'
import TopNav from 'components/top-nav'
import styled from 'styled-components'
import About from 'components/about'
import { CONTAINER_STYLE } from 'const'
import Exp from 'components/exp'
import Footer from 'components/footer'
import { META } from 'const/content'

const Main = styled.main`
  ${CONTAINER_STYLE}
`

export default function Home() {
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Heebo&family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TopNav />
      <Main role="main">
        <About />
        <Exp />
      </Main>
      <Footer />
    </>
  )
}
