const stats = [
  { value: '2',  label: 'Projets\nterminés',           color: '#4AF0A0' },
  { value: '1',  label: 'Ender 3 Pro\npresque domptée', color: '#E8B84A' },
  { value: '2',  label: 'Crises de nerfs\névitées',     color: '#DA6A6A' },
  { value: '56', label: 'Tasses de café\nconsommées',   color: '#5BA8D9' },
]

export default function CounterBar() {
  return (
    <div className="bg-[#000000]">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1400px] w-[92%] mx-auto">
        {stats.map((stat, i) => (
          <div key={i} className="px-6 py-7 border-r border-white/[0.06] last:border-r-0">
            <div className="text-4xl font-bold tracking-tight mb-2" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-[11px] text-[#8C8A82] font-medium uppercase tracking-wide leading-snug whitespace-pre-line">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}