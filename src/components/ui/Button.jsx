import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-midnight text-white hover:bg-midnight-deep focus-visible:outline-cyan',
  cyan:
    'bg-cyan text-midnight hover:bg-cyan-dim',
  outline:
    'border border-midnight/20 text-midnight hover:border-midnight hover:bg-midnight/5',
  ghost:
    'text-white hover:bg-white/10 border border-white/25',
}

export function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  children,
  ...props
}) {
  const sizeClasses = size === 'lg' ? 'px-7 py-3.5 text-[15px]' : 'px-5 py-2.5 text-sm'
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 ${sizeClasses} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.25} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${base}`} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${base}`} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={`group ${base}`} {...props}>
      {content}
    </button>
  )
}

export default Button
