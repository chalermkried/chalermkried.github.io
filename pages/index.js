import Head from 'next/head'
import TopNav from 'components/top-nav'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chalermkried Sudjanakobkul</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {<TopNav />}

      <main>
        Hello World!
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
