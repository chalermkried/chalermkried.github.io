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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{META.title}</title>
        <meta name="title" content={META.title} />
        <meta name="description" content={META.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.url} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.desc} />
        <meta property="og:image" content={META.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={META.url} />
        <meta property="twitter:title" content={META.title} />
        <meta property="twitter:description" content={META.desc} />
        <meta property="twitter:image" content={META.image} />
        <link rel="canonical" href={META.url} />
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
