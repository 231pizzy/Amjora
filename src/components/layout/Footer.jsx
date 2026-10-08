import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { footerNav } from '@/data/nav'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-midnight-deep text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" aria-label="Amjora home">
              <Logo tone="light" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Amjora is a technology company that builds trusted software, payment infrastructure
              and AI solutions that improve lives and power businesses.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              Finding Ways.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Amjora Forge Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-cyan">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
