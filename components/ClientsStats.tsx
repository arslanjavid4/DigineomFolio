'use client'

const stats = [
  ['04', 'Featured case studies'],
  ['05', 'Core capabilities'],
  ['2020', 'Studio founded'],
  ['Global', 'Digital delivery'],
]

export default function ClientsStats() {
  return (
    <section className="border-y border-[#d9d9dd]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="border-r border-[#d9d9dd] p-5 last:border-r-0 sm:p-8">
              <div className="mb-2 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">{value}</div>
              <div className="eyebrow text-neutral-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

