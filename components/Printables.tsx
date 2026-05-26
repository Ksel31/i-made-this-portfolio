export default function Printables() {
  return (
    <section className="bg-[#F5F0E8] py-24 px-8 text-center" id="printables">
      <span className="inline-block bg-[#0A0A12] text-[#4AF0A0] text-[10px] font-bold uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-6">
        Fichiers STL
      </span>
      <h2 className="text-[52px] font-bold tracking-[-2px] leading-tight text-[#0A0A12] max-w-3xl mx-auto mb-4">
        Les modèles sont disponibles sur Printables.
      </h2>
      <p className="text-[#8C8A82] text-sm leading-relaxed max-w-sm mx-auto mb-9">
        Fichiers STL gratuits, instructions d'assemblage incluses. Si t'imprimes un truc, envoie une photo.
      </p>
      <a
        href="https://www.printables.com"
        target="_blank"
        className="inline-flex items-center gap-2 bg-[#0A0A12] text-white text-xs font-bold uppercase tracking-wide px-7 py-3.5 rounded-full hover:bg-[#4AF0A0] hover:text-[#0A0A12] transition-colors"
      >
        Voir sur Printables ↗
      </a>
    </section>
  )
}