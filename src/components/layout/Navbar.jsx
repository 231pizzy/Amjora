import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { primaryNav } from '@/data/nav'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
        <Link to="/" className="relative z-10" aria-label="Amjora home">
          <Logo tone="light" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu((cur) => (cur === item.label ? null : cur))}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-[14.5px] font-medium text-white/85 transition-colors hover:text-white"
                  aria-expanded={openMenu === item.label}
                  onClick={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-midnight-deep shadow-2xl shadow-black/40">
                        <ul className="p-2">
                          {item.items.map((sub) => (
                            <li key={sub.to}>
                              <Link
                                to={sub.to}
                                className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-white/5"
                              >
                                <span className="block text-[14px] font-semibold text-white">{sub.label}</span>
                                {sub.description && (
                                  <span className="mt-0.5 block text-[12.5px] leading-snug text-white/55">
                                    {sub.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Button to="/contact" variant="cyan" size="sm">
            Let&rsquo;s talk
          </Button>
        </div>

        <button
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

export default Navbar
