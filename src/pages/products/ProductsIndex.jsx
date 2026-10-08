import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'
import { products } from '@/data/products'

export function ProductsIndex() {
  return (
    <>
      <SEO
        title="Products"
        description="The Amjora technology ecosystem — Amjora Platform, Payments, AI, Cloud, Health and Labs. Different solutions, one way of thinking."
        path="/products"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
        ])}
      />

      <PageHero
        image="products"
        eyebrow="Products"
        title="Different solutions. One way of thinking."
        description="Amjora Platform is our engineering foundation today. The rest of this ecosystem — Payments, AI, Cloud, Health and Labs — reflects our long-term ambition, staged honestly across the phases we're building toward."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <Link
                  to={`/products/${product.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-midnight/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-midnight/5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider ${
                          product.statusTone === 'active'
                            ? 'bg-cyan/15 text-cyan-dim'
                            : 'bg-midnight/5 text-midnight/45'
                        }`}
                      >
                        {product.status}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-midnight/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-dim" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold tracking-tight text-midnight">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-[13px] font-medium text-midnight/45">{product.short}</p>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-midnight/60">
                      {product.summary}
                    </p>
                  </div>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-midnight/35">
                    {product.phase}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1} className="mt-14 rounded-2xl border border-cyan/20 bg-mist p-7">
            <p className="text-sm leading-relaxed text-midnight/60">
              <span className="font-semibold text-midnight">A note on timing:</span> Amjora
              Platform and Amjora Labs reflect active engineering work today. Amjora Payments, AI,
              Cloud and Health represent our long-term product roadmap and are not yet available —
              we believe in being clear about that distinction.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default ProductsIndex
