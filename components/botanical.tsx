// Minimal single-line botanical illustration used as an elegant editorial decoration.
export function Botanical({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 218C60 160 58 96 62 40"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path d="M61 150C61 150 34 146 24 122C48 120 61 150 61 150Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M61 120C61 120 88 114 98 90C74 90 61 120 61 120Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M61 92C61 92 36 86 27 63C50 62 61 92 61 92Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M62 66C62 66 87 58 95 36C72 37 62 66 62 66Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M62 44C62 44 58 22 70 6C78 24 62 44 62 44Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}
