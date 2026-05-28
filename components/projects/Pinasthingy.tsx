import PinasthingyContent from '../../content/pinasthingy.mdx'

export default function Pinas() {
  return (
    <>
      {/* HERO */}
      <section id="pinasthingy" className="relative h-screen overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/renders/pinas.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/94" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 pb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h1 className="text-[clamp(48px,7vw,88px)] font-bold leading-none tracking-[-3px] text-white mb-4">
              PiNAS<br />THINGY.
            </h1>
            <div className="flex flex-wrap gap-1.5">
              {['En cours', 'Raspberry Pi 5', 'SolidWorks', 'Blender', 'FDM PLA'].map(tag => (
                <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15 bg-white/10 text-white/80">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <p className="text-white font-semibold text-lg leading-relaxed md:text-right max-w-sm">
              Un serveur NAS DIY fait maison.
            </p>
            <p className="text-white/50 text-sm leading-relaxed md:text-right max-w-sm">
              Raspberry Pi 5, dual NVMe, OpenMediaVault, Docker, et un boîtier imprimé en 3D qui fait tourner les têtes.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <div className="bg-[#F5F0E8]">
        <div className="max-w-[960px] w-[92%] mx-auto py-20">

          <a href="/" className="inline-flex items-center gap-2 text-[#8C8A82] text-xs font-semibold uppercase tracking-wide mb-12 hover:text-[#0A0A12] transition-colors">
            ← Retour aux projets
          </a>

          {/* ARTICLE */}
          <div>
            <PinasthingyContent />
          </div>

          {/* SPECS */}
          <div className="bg-[#0A0A12] rounded-2xl p-10 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hardware',
                items: [['SBC', 'Raspberry Pi 5 4GB'], ['HAT', 'Geekworm X1005'], ['Stockage', 'Crucial P5 Plus 1To ×2'], ['Refroid.', 'Active Cooler Pi 5']]
              },
              {
                title: 'Software',
                items: [['OS', 'Pi OS Lite 64-bit'], ['NAS', 'OpenMediaVault 8'], ['Containers', 'Docker + Portainer'], ['Réseau', 'Tailscale']]
              },
              {
                title: 'Enclosure',
                items: [['CAO', 'SolidWorks'], ['Rendu', 'Blender (Cycles)'], ['Impression', 'FDM PLA'], ['Imprimante', 'Ender 3 Pro']]
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

        </div>
      </div>
    </>
  )
}