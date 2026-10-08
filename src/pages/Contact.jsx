import { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/ui/SEO'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { breadcrumbSchema } from '@/lib/schema'

const inputClasses =
  'w-full rounded-xl border border-midnight/15 bg-white px-4 py-3 text-[15px] text-midnight placeholder:text-midnight/35 transition-colors focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30'

export function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const nextErrors = {}

    if (!form.get('name')?.toString().trim()) nextErrors.name = 'Please enter your name.'
    const email = form.get('email')?.toString().trim() || ''
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.get('message')?.toString().trim()) nextErrors.message = 'Please add a short message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // NOTE: no backend is wired up yet — connect this to an email or CRM
    // endpoint (e.g. a serverless function or a service like Formspree)
    // before launch. For now we confirm submission locally.
    setStatus('submitted')
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Amjora. Whether it's a partnership, a role, or a problem worth solving together — let's find a way forward."
        path="/contact"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <PageHero
        image="contact"
        eyebrow="Contact"
        title="Let's find a way forward."
        description="Whether you're exploring a partnership, a role, or a problem worth solving together — we'd like to hear from you."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-midnight">Get in touch</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-midnight/60">
                Send us a message and a member of the Amjora team will get back to you. We read
                every message that comes through this form.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-xl border border-midnight/10 bg-mist px-5 py-4">
                <Mail className="h-5 w-5 text-cyan-dim" />
                <a href="mailto:hello@amjora.com" className="text-[15px] font-medium text-midnight hover:text-cyan-dim">
                  hello@amjora.com
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              {status === 'submitted' ? (
                <div
                  role="status"
                  className="flex flex-col items-start gap-4 rounded-2xl border border-cyan/30 bg-mist p-8"
                >
                  <CheckCircle2 className="h-8 w-8 text-cyan-dim" />
                  <div>
                    <h3 className="text-lg font-bold text-midnight">Message received.</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-midnight/60">
                      Thank you for reaching out to Amjora. We&rsquo;ll be in touch soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-midnight">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className={inputClasses}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-midnight">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputClasses}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-midnight">
                      What&rsquo;s this about?
                    </label>
                    <select id="topic" name="topic" className={inputClasses}>
                      <option>General inquiry</option>
                      <option>Partnership</option>
                      <option>Careers</option>
                      <option>Press</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-midnight">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className={inputClasses}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-midnight px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-midnight-deep"
                  >
                    Send message
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
