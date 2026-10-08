import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { Reveal } from '@/components/ui/Reveal'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { getInsight, insights } from '@/data/insights'

export function InsightDetail() {
  const { slug } = useParams()
  const post = getInsight(slug)

  if (!post) return <Navigate to="/insights" replace />

  const more = insights.filter((i) => i.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        type="article"
        jsonLd={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path: `/insights/${post.slug}`,
            date: post.date,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
        ]}
      />

      <article className="bg-white pb-24 pt-36 lg:pt-44">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-midnight/50 hover:text-cyan-dim"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-cyan-dim">
              {post.category}
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-midnight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-sm text-midnight/45">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span aria-hidden>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose-content mt-12 flex flex-col gap-6 border-t border-midnight/10 pt-12">
            {post.content.map((block, i) =>
              block.type === 'h2' ? (
                <h2 key={i} className="mt-4 text-xl font-bold tracking-tight text-midnight">
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="text-[16px] leading-[1.8] text-midnight/70">
                  {block.text}
                </p>
              )
            )}
          </Reveal>
        </div>
      </article>

      <section className="border-t border-midnight/10 bg-mist py-20">
        <div className="container-page max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-midnight/40">
            Continue reading
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {more.map((item) => (
              <Link
                key={item.slug}
                to={`/insights/${item.slug}`}
                className="block rounded-2xl border border-midnight/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-cyan/40"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-dim">
                  {item.category}
                </span>
                <p className="mt-2 font-bold text-midnight">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default InsightDetail
