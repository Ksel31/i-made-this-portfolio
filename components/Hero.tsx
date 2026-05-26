'use client'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-between md:justify-end">
      <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/renders/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />
    
      {/* HAUT — titre mobile uniquement */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pt-24 md:hidden">
        <h1 className="text-[72px] font-bold leading-none tracking-[-3px] text-white">
          I made this!
        </h1>
      </div>
    
      {/* BAS — desktop complet */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pb-14 hidden md:block">
        <h1 className="text-[96px] font-bold leading-none tracking-[-3px] text-white mb-5">
          I made this!
        </h1>
        <p className="text-white/55 text-sm leading-relaxed max-w-[380px] mb-8">
          Ce portfolio a vocation de montrer mes projets DIY que je réalise sur mon temps libre. Bonne visite !
        </p>
        <div className="flex gap-3">
          <a href="#projets" className="bg-white text-[#0A0A12] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full hover:bg-[#4AF0A0] transition-colors">
            Voir les projets ↓
          </a>
          <a href="#printables" className="bg-white/10 text-white text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full border border-white/15">
            Fichiers STL
          </a>
        </div>
      </div>
    
      {/* BAS — boutons mobile uniquement */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pb-10 md:hidden">
        <p className="text-white/55 text-sm leading-relaxed mb-6">
          Ce portfolio a vocation de montrer mes projets DIY que je réalise sur mon temps libre. Bonne visite !
        </p>
        <div className="flex gap-3">
          <a href="#projets" className="bg-white text-[#0A0A12] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full">
            Voir les projets ↓
          </a>
          <a href="#printables" className="bg-white/10 text-white text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full border border-white/15">
            Fichiers STL
          </a>
        </div>
      </div>
    
      {/* Scroll CTA desktop */}
      <div className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-6 h-10 border border-white/25 rounded-full relative flex justify-center">
          <div className="w-0.5 h-1.5 bg-white/70 rounded-full absolute top-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}