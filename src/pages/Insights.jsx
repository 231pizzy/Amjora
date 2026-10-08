import { Link } from 'react-router-dom'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'
import { insights } from '@/data/insights'

export function Insights() {
  return (
    <>
      <SEO
        title="Insights"
        description="Perspectives from Amjora's engineering culture — on software craftsmanship, financial infrastructure, AI and the philosophy behind how we build."
        path="/insights"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ])}
      />

      <PageHero
        image="insights"
        eyebrow="Insights"
        title="Perspectives from our engineering culture."
        description="Writing on the philosophy, standards and thinking behind how Amjora builds — not company news, but the ideas underneath the work."
      />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page">
          <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {insights.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  to={`/insights/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-midnight/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-midnight/5"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-dim">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-midnight group-hover:text-cyan-dim">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-midnight/55">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-midnight/40">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span aria-hidden>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  )
}

export default Insights
