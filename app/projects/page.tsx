import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Thermothingy from '../../components/projects/Thermothingy'
import Pinasthingy from '../../components/projects/Pinasthingy'

export default function Projects() {
  return (
    <main className="bg-[#F5F0E8]">
      <Nav />
      <Thermothingy />
      <Pinasthingy />
      <Footer />
    </main>
  )
}