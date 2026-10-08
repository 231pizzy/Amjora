import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { insights } from '@/data/insights'

export function InsightsPreview() {
  const featured = insights.slice(0, 3)

  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">
              Insights
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl">
              Perspectives from our engineering culture.
            </h2>
          </div>
          <Link
            to="/insights"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-midnight hover:text-cyan-dim"
          >
            All insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                to={`/insights/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-midnight/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-xl hover:shadow-midnight/5"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-dim">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-midnight group-hover:text-cyan-dim">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-midnight/55">
                  {post.excerpt}
                </p>
                <span className="mt-5 text-xs font-medium text-midnight/40">{post.readTime}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

export default InsightsPreview
