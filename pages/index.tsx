import type { NextPage } from 'next'
import Head from 'next/head'
import AboutSection from './components/AboutSection'
import Conclusion from './components/Conclusion'
import ConsultExperts from './components/ConsultExperts'
import DifferentSection from './components/DifferentSection'
import Header from './components/Header'
import LiberateSection from './components/LiberateSection'
import MoodSection from './components/MoodSection'
import PeriodBox from './components/PeriodBox'
import PeriodSection from './components/PeriodSection'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E5E5E5]">
      <Head>
        <title>dyeus_webD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-auto w-[375px]">
        <div className="bg h-auto">
          {/* header */}
          <Header />
          {/* about section */}
          <AboutSection />
        </div>
        {/* What makes us different? section */}
        <DifferentSection />
        {/* liberate section */}
        <LiberateSection />
        {/* mood section */}
        <MoodSection />
        {/* period section */}
        <PeriodSection />
        {/* consult experts section */}
        <ConsultExperts />
        {/* period box */}
        <PeriodBox />
        {/* conclusion */}
        <Conclusion />
        {/* footer */}
        <Footer />
      </main>
    </div>
  )
}

export default Home
