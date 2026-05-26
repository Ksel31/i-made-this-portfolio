import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function Thermothingy() {
  return (
    <main className="bg-[#F5F0E8]">
      <Nav />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-cover bg-center scale-105"
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
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-[960px] w-[92%] mx-auto py-20">

        <a href="/" className="inline-flex items-center gap-2 text-[#8C8A82] text-xs font-semibold uppercase tracking-wide mb-12 hover:text-[#0A0A12] transition-colors">
          ← Retour aux projets
        </a>

        {/* ORIGINE */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Origine</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">Long story short.</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            J'avais regardé pendant des années une chaîne YouTube appelée Abrège, en admirant le travail, sans jamais trouver le courage de me lancer. J'avais quelques compétences, mais l'électronique me semblait être le territoire de quelqu'un d'autre.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Puis un jour j'ai installé Home Assistant chez moi. Et après un moment, acheter des capteurs tout faits a commencé à me sembler paresseux. Alors j'ai commencé à lire des trucs sur l'ESP32.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px] italic text-[#8C8A82]">
            Il me fallait un premier projet. Quelque chose d'assez simple pour ne pas tuer ma motivation dès le jour un. Un capteur de température, ça semblait bien.
          </p>
        </div>

        {/* OMG IT WORKS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Étape 1</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">"YES, CA MARCHE !"</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            J'ai acheté un ESP32-C6 et un DHT22, j'ai essayé de faire fonctionner le truc et d'afficher la temp et l'humidité de la pièce. Et mon premier projet Arduino a fonctionné.
          </p>
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-16 bg-[#0A0A12]">
          <img src="/renders/thermo-esp-naked.jpg" alt="ThermotHINGY" className="w-full object-cover" style={{ aspectRatio: '16/9', objectPosition: 'center 30%' }} />
        </div>

        {/* POURQUOI S'ARRÊTER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Étape 2</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">OK, et après?</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Maintenant j'avais un thermomètre peu pratique avec des câbles qui pendouillent, et je devais regarder mon téléphone pour avoir les infos. Alors j'ai pensé : "après tout, pourquoi pas ? Pourquoi ne pas concevoir et construire MON PROPRE thermomètre avec un écran et tout ?"
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            J'ai commencé à chercher des inspirations, à dessiner un truc dans ma tête et sur papier. Et je me suis retrouvé avec quelque chose.
          </p>
        </div>

        {/* CONCEPTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Étape 3</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">SolidWorks + patience.</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Modélisation dans SolidWorks. Chaque composant mesuré, chaque tolérance d'impression calculée. Le boîtier accueille l'ESP32-C3, l'écran 1.69" IPS, le DHT22 en façade et la connectique USB-C.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            Plusieurs itérations d'impression sur l'Ender 3 Pro avant d'arriver à quelque chose de propre. L'imprimante a eu des opinions sur le sujet, comme d'habitude.
          </p>
        </div>

        {/* SPECS */}
        <div className="bg-[#0A0A12] rounded-2xl p-10 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Hardware',
              items: [['MCU', 'ESP32-C3'], ['Capteur', 'DHT22'], ['Écran', '1.69" IPS'], ['Alim', 'USB-C 5V']]
            },
            {
              title: 'Software',
              items: [['Firmware', 'ESPHome'], ['Intégration', 'Home Assistant'], ['Protocole', 'WiFi / MQTT']]
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