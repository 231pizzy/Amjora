import { useParams, Navigate, Link } from 'react-router-dom'
import { Check, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { breadcrumbSchema } from '@/lib/schema'
import { getProduct, products } from '@/data/products'

export function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) return <Navigate to="/products" replace />

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <SEO
        title={product.name}
        description={product.summary}
        path={`/products/${product.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />

      <PageHero image={`product-${product.slug}`} eyebrow={product.short} title={product.name}>
        <span
          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            product.statusTone === 'active' ? 'bg-cyan/15 text-cyan' : 'bg-white/10 text-white/55'
          }`}
        >
          {product.status}
        </span>
      </PageHero>

      <section className="bg-white py-24 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-midnight">Overview</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-midnight/65">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-midnight">Focus areas</h2>
              <ul className="mt-5 space-y-4">
                {product.focus.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-midnight/70">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-dim" strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="rounded-2xl border border-midnight/10 bg-mist p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-dim">Roadmap phase</p>
              <p className="mt-3 text-lg font-bold text-midnight">{product.phase}</p>
              <div className="mt-6 border-t border-midnight/10 pt-6">
                <p className="text-sm leading-relaxed text-midnight/55">
                  {product.statusTone === 'active'
                    ? 'This product reflects active engineering work at Amjora today.'
                    : 'This product is part of Amjora’s long-term roadmap and has not launched yet. We believe in being clear about what exists today versus what we’re building toward.'}
                </p>
              </div>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-cyan-dim"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all products
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="text-xl font-bold tracking-tight text-midnight">Explore more of the ecosystem</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  to={`/products/${p.slug}`}
                  className="block h-full rounded-2xl border border-midnight/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40"
                >
                  <p className="font-bold text-midnight">{p.name}</p>
                  <p className="mt-1.5 text-sm text-midnight/55">{p.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-12 flex justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Talk to us about {product.name}
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
