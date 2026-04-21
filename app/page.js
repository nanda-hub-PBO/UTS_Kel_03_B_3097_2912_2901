// ✅ GANTI semua import menjadi:
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Features from './components/Features'
import VisionMission from './components/VisionMission'
import Contact from './components/Contact'
import Bottom from './components/Bottom'

export default function Home() {
  return (
    <main className="platform-shell">
      <Hero />
      <StatsBar />
      <Features />
      <VisionMission />
      <Contact />
      <Bottom />
    </main>
  )
}