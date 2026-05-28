import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

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

        {/* LE CONCEPT */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Le concept</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">What's this ?</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Un capteur de température et d'humidité ambiant qui affiche les données en temps réel sur un écran IPS intégré. Il se connecte en WiFi et remonte les données dans Home Assistant automatiquement.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            L'idée c'était simple : avoir un objet posé sur le bureau qui donne la temp et l'humidité d'un coup d'œil, sans sortir le téléphone. Et que ce soit quelque chose de fait maison, pas un truc acheté sur Amazon.
          </p>
        </div>

        {/* HARDWARE */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Hardware</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">Les composants.</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Le cerveau c'est un ESP32-C3 supermini, WiFi intégré, largement suffisant pour la tâche. Le capteur DHT22 relève température et humidité toutes les quelques secondes. L'écran 1.69" IPS affiche tout ça directement sur l'écran.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            L'alimentation se fait en USB-C. Pas de batterie, c'est un objet de bureau.
          </p>
        </div>

        {/* IMAGE */}
        <div className="mb-16">
          <img src="/images/exploded-view.svg" alt="Vue éclatée ThermotHINGY" className="w-full" />
        </div>

        {/* ENCLOSURE */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Enclosure</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">Le boîtier.</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Modélisé dans SolidWorks avec les cotes exactes de chaque composant. Le DHT22 est exposé en façade pour une lecture précise, l'écran est encadré par le boîtier supérieur, et le tout s'assemble avec des vis M2.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            Imprimé en PLA sur une Ender 3 Pro. Plusieurs itérations pour affiner les tolérances — la première version serrait trop, la deuxième avait trop de jeu. La troisième était la bonne.
          </p>
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden mb-16">
          <img src="/images/sw_screenshot.jpg" alt="ThermotHINGY" className="w-full object-cover" style={{ aspectRatio: '16/9', objectPosition: 'center 50%' }} />
        </div>

        {/* FIRMWARE */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8C8A82]">Firmware</span>
            <div className="flex-1 h-px bg-black/8" />
          </div>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-bold tracking-[-1.5px] mb-5">C++ & MQTT.</h2>
          <p className="text-[15px] leading-[1.8] max-w-[640px] mb-4">
            Le firmware est écrit en C++ avec le framework Arduino. La lib DHT gère la lecture du capteur, Arduino_GFX et Adafruit_GFX s'occupent de l'affichage sur l'écran IPS, et PubSubClient publie les données en MQTT vers un broker Mosquitto.
          </p>
          <p className="text-[15px] leading-[1.8] max-w-[640px]">
            Home Assistant se connecte au broker et récupère les valeurs automatiquement. ArduinoOTA permet de flasher le firmware en WiFi.
          </p>
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