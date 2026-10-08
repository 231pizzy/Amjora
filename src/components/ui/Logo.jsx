// Recreation of the Amjora mark as described in the Master Brand Blueprint:
// a geometric "A" formed from two strokes, with an electric-cyan accent stroke.
// Swap the <path> data below for the official vector export when available —
// do not alter the proportions or colour roles elsewhere in the site.

export function Mark({ className = 'h-8 w-8', tone = 'light' }) {
  const stroke = tone === 'light' ? '#ffffff' : '#0A0545'
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Amjora"
    >
      <path
        d="M24 6L4 42H14L24 24L34 42H44L24 6Z"
        fill={stroke}
      />
      <path d="M27 30L21 42H31L34 36L27 30Z" fill="#2DD4FF" />
    </svg>
  )
}

export function Logo({ className = '', tone = 'light', wordmark = true }) {
  const textColor = tone === 'light' ? 'text-white' : 'text-midnight'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="h-7 w-7 shrink-0" tone={tone} />
      {wordmark && (
        <span className="flex flex-col leading-none">
          <span className={`text-[17px] font-extrabold tracking-tight ${textColor}`}>
            AMJORA
          </span>
        </span>
      )}
    </span>
  )
}

export default Logo
