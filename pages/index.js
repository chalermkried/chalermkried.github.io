import Head from 'next/head'
import TopNav from 'components/top-nav'
import styled from 'styled-components'
import About from 'components/about'
import { CONTAINER_STYLE } from 'const'
import Exp from 'components/exp'
import Footer from 'components/footer'

const Main = styled.main`
  ${CONTAINER_STYLE}
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Chalermkried Sudjanakobkul</title>
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
