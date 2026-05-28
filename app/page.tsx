import Nav from '../components/Nav'
import Hero from '../components/Hero'
import CounterBar from '../components/CounterBar'
import Projects from '../components/Projects' 
import Printables from '../components/Printables'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-[#F5F0E8]">
      <Nav />
      <Hero />
      <CounterBar />
      <Projects />
      <Printables />  
      <Footer />
    </main>
  )
}