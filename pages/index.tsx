import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-500">
      <Head>
        <title>dyeus_webD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-[375px]">
        {/* header */}
        <Header />
      </main>
    </div>
  )
}

export default Home
