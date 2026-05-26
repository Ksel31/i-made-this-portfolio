export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5">
      <a href="/">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </a>
      <div className="flex gap-6 items-center">
        <a href="#projets" className="text-white/70 text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors">
          Fichiers STL
        </a>
        <a href="https://www.printables.com" target="_blank" className="bg-[#FEFCF6] text-[#0A0A12] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide hover:bg-[#4AF0A0] transition-colors">
          Printables ↗
        </a>
      </div>
    </nav>
  )
}