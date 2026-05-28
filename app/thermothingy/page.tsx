import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ThermothingyContent from '../../content/thermothingy.mdx'

export default function Thermothingy() {
  return (
    <main className="bg-[#F5F0E8]">
      <Nav />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/renders/thermo-orange-debout.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/94" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 pb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h1 className="text-[clamp(48px,7vw,88px)] font-bold leading-none tracking-[-3px] text-white mb-4">
              THERMO<br />THINGY.
            </h1>
            <div className="flex flex-wrap gap-1.5">
              {['Terminé', 'ESP32', 'ESPHome', 'SolidWorks', 'FDM PLA'].map(tag => (
                <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15 bg-white/10 text-white/80">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <p className="text-white font-semibold text-lg leading-relaxed md:text-right max-w-sm">
              Un thermomètre/hygromètre WiFi avec écran, fait maison de A à Z.
            </p>
            <p className="text-white/50 text-sm leading-relaxed md:text-right max-w-sm">
              ESP32-C3, DHT22, écran 1.69" IPS, boîtier imprimé en 3D, firmware ESPHome et intégration Home Assistant native.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[960px] w-[92%] mx-auto py-20">

        <a href="/" className="inline-flex items-center gap-2 text-[#8C8A82] text-xs font-semibold uppercase tracking-wide mb-12 hover:text-[#0A0A12] transition-colors">
          ← Retour aux projets
        </a>

        {/* ARTICLE */}
        <div>
          <ThermothingyContent />
        </div>

        {/* SPECS */}
        <div className="bg-[#0A0A12] rounded-2xl p-10 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Hardware',
              items: [['MCU', 'ESP32-C3 Supermini'], ['Capteur', 'DHT22'], ['Écran', 'Waveshare 1.69" IPS'], ['Alim', 'USB-C 5V']]
            },
            {
              title: 'Software',
              items: [['Firmware', 'Arduino C++'], ['Broker', 'Mosquitto MQTT'], ['Intégration', 'Home Assistant'], ['OTA', 'ArduinoOTA']]
            },
            {
              title: 'Enclosure',
              items: [['CAO', 'SolidWorks'], ['Impression', 'FDM PLA'], ['Imprimante', 'Ender 3 Pro'], ['Rendu', 'Blender']]
            }
          ].map(group => (
            <div key={group.title}>
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82] mb-4">{group.title}</div>
              <div className="flex flex-col gap-3">
                {group.items.map(([label, value]) => (
                  <div key={label}>
                    <div className="text-[10px] text-[#8C8A82] uppercase tracking-wide">{label}</div>
                    <div className="text-[14px] font-semibold text-white font-mono">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-16">
          <img src="/renders/thermo-face-haut.jpg" alt="THERMOTHINGY" className="w-full object-cover" style={{objectPosition: 'center 50%' }} />
        </div>

        {/* PROJET SUIVANT */}
        <a href="/pinas" className="bg-[#0A0A12] rounded-2xl px-10 py-9 flex justify-between items-center hover:-translate-y-1 transition-transform mb-20">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82] mb-2">Projet suivant</div>
            <div className="text-2xl font-bold text-white tracking-[-1px]">PiNASTHINGY.</div>
          </div>
          <div className="text-[#4AF0A0] text-3xl">→</div>
        </a>

      </div>

      <Footer />
    </main>
  )
}