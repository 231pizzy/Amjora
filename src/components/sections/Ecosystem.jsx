import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { products } from '@/data/products'
import { getHeroImage } from '@/data/heroImages'

export function Ecosystem() {
  return (
    <section className="bg-grain relative overflow-hidden bg-midnight py-24 text-white lg:py-32">
      <div
        className="bg-mesh pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: `url(${getHeroImage('products')})` }}
        aria-hidden
      />
      <div className="container-page relative">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              Technology ecosystem
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Different solutions. One way of thinking.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Amjora Platform is our engineering foundation today. The rest of the ecosystem
            reflects where our long-term ambition is heading.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <Link
                to={`/products/${product.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider ${
                        product.statusTone === 'active'
                          ? 'bg-cyan/15 text-cyan'
                          : 'bg-white/10 text-white/50'
                      }`}
                    >
                      {product.status}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{product.short}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default Ecosystem
