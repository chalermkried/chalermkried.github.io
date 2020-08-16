import Head from 'next/head'
import TopNav from 'components/top-nav'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chalermkried Sudjanakobkul</title>
      </Head>

      <TopNav />

      <main>Hello World!</main>
    </div>
  )
}
