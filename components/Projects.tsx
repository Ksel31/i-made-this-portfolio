'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: 'thermo',
    index: '02 / 02',
    title: 'THERMO\nTHINGY.',
    hook: "Premier projet de la série, un thermomètre/hygromètre ambiant avec écran. Parce que c'était un projet à ma portée pour me lancer, et que j'avais envie de me faire un petit dashboard météo sur mon bureau.",
    desc: "Thermomètre/hygromètre ambiant avec écran 1.69\" IPS en temps réel. Modélisé dans SolidWorks. Le tout propulsé par un ESP32-C3 avec un capteur DHT22, les données sont envoyées à Home Assistant via Wifi et MQTT.",
    tags: ['Terminé', 'ESP32', 'ESPHome', 'SolidWorks'],
    specs: ['ESP32-C3', 'DHT22', '1.69" IPS', 'ESPHome', 'Home Assistant'],
    image: '/renders/thermo.jpg',
    href: '/thermothingy',
  }, 
  {
    id: 'pinas',
    index: '01 / 02',
    title: 'PiNAS\nTHINGY.',
    hook: "Projet de NAS maison que j'ai réalisé pour ne plus avoir à dépendre de solutions propriétaires pour stocker mes données, et aussi parce que j'avais envie de me faire un petit serveur multimédia pour mon salon.",
    desc: "Conçu pour le stack Raspberry Pi 5 + Geekworm X1005 dual NVMe. Le boitier est modélisé dans Solidworks.",
    tags: ['En cours', 'SolidWorks', 'Blender', 'FDM'],
    specs: ['Pi 5 + X1005', 'Dual NVMe', 'OMV + Docker', 'Jellyfin', 'FDM PLA'],
    image: '/renders/pinas.jpg',
    href: '/pinas',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const targetOffset = useRef(0)
  const currentOffset = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const animate = () => {
      currentOffset.current += (targetOffset.current - currentOffset.current) * 0.08
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${currentOffset.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section || window.innerWidth <= 768) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const scrollable = (projects.length - 1) * window.innerHeight
      const scrolled = Math.max(0, window.scrollY - sectionTop)
      const progress = Math.min(scrolled / scrollable, 1)
      targetOffset.current = progress * (projects.length - 1) * window.innerWidth
      const idx = Math.min(Math.round(progress * (projects.length - 1)), projects.length - 1)
      setCurrent(idx)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <>
    <div id="projets" />
    {/* Desktop — scroll horizontal pinné */}
    <div ref={sectionRef}
      style={{ height: `${projects.length * 150}vh` }}
      className="relative hidden md:block">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full" style={{ willChange: 'transform' }}>
          {projects.map((project, i) => (
            <div key={project.id} className="flex-shrink-0 w-screen h-screen relative flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/95" />
              <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 pb-14 grid grid-cols-2 gap-8 items-end">
                <div>
                  <span className="text-white/35 text-[11px] font-semibold uppercase tracking-[2px] block mb-4">{project.index}</span>
                  <h2 className="text-[76px] font-bold leading-none tracking-[-2.5px] text-white mb-4 whitespace-pre-line">{project.title}</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15 bg-white/10 text-white/80">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <p className="text-white font-semibold text-base leading-relaxed text-right max-w-sm">{project.hook}</p>
                  <p className="text-white/55 text-sm leading-relaxed text-right max-w-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {project.specs.map(spec => (
                      <span key={spec} className="text-[11px] font-semibold text-white/40 bg-white/7 px-2 py-1 rounded font-mono">{spec}</span>
                    ))}
                  </div>
                  <a href={project.href} className="mt-2 bg-white text-[#0A0A12] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full hover:bg-[#4AF0A0] transition-colors">
                    Voir le projet →
                  </a>
                </div>
              </div>
              <div className="absolute top-8 right-8 flex gap-2 z-20">
                {projects.map((_, j) => (
                  <div key={j} className={`w-1.5 h-1.5 rounded-full transition-colors ${j === current ? 'bg-white' : 'bg-white/25'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Mobile — slides verticales */}
    <div id="projets-mobile" className="md:hidden">
      {projects.map((project) => (
        <div key={project.id} className="relative h-screen flex flex-col justify-end">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/95" />
          <div className="relative z-10 px-5 pb-10">
            <span className="text-white/35 text-[10px] uppercase tracking-[2px] block mb-3">{project.index}</span>
            <h2 className="text-[52px] font-bold leading-none tracking-[-2px] text-white mb-3 whitespace-pre-line">{project.title}</h2>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15 bg-white/10 text-white/80">{tag}</span>
              ))}
            </div>
            <p className="text-white font-semibold text-sm leading-relaxed mb-4">{project.hook}</p>
            <a href={project.href} className="inline-block bg-white text-[#0A0A12] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full">
              Voir le projet →
            </a>
          </div>
        </div>
      ))}
    </div>
  </>
)
}