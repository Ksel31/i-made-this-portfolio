export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] border-t border-black/8 px-8 py-6 flex justify-between items-center">
      <p className="text-[#8C8A82] text-[11px] italic">
        "It's the job that's never started as takes longest to finish." — Samwise Gamgee
      </p>
      <img src="/logo.png" alt="Logo" className="h-7 w-auto opacity-15" style={{ filter: 'invert(1)' }} />
    </footer>
  )
}