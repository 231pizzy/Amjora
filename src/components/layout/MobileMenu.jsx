import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { primaryNav } from '@/data/nav'

export function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 top-16 z-60 overflow-y-auto bg-midnight lg:hidden"
        >
          <div className="container-page flex min-h-full flex-col py-8">
            <ul className="flex flex-col divide-y divide-white/10">
              {primaryNav.map((item) => (
                <li key={item.label} className="py-1">
                  {item.items ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-white"
                        onClick={() => setExpanded((cur) => (cur === item.label ? null : item.label))}
                        aria-expanded={expanded === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 text-white/60 transition-transform ${
                            expanded === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === item.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            {item.items.map((sub) => (
                              <li key={sub.to}>
                                <Link
                                  to={sub.to}
                                  onClick={onClose}
                                  className="block py-3 pl-1 text-[15px] text-white/70 hover:text-cyan"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="block py-4 text-lg font-semibold text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Button to="/contact" variant="cyan" onClick={onClose} className="w-full">
                Let&rsquo;s talk
              </Button>
              <Button to="/careers" variant="ghost" onClick={onClose} className="w-full">
                Careers
              </Button>
            </div>

            <p className="mt-auto pt-10 text-sm text-white/40">Amjora — Finding Ways.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default MobileMenu
