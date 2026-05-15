"use client"

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 group cursor-pointer"
      aria-label="CodeForge Home"
    >
      {/* Professional CF Monogram */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
      >
        {/* Background rounded square */}
        <rect
          x="2"
          y="2"
          width="32"
          height="32"
          rx="8"
          className="fill-emerald-600 dark:fill-emerald-500"
        />
        {/* C letter */}
        <path
          d="M14.5 11C11.4624 11 9 13.4624 9 16.5V19.5C9 22.5376 11.4624 25 14.5 25C15.8807 25 17.1319 24.4672 18.071 23.5865C18.3475 23.3276 18.3618 22.8947 18.103 22.6183C17.8441 22.3418 17.4113 22.3275 17.1348 22.5863C16.4433 23.2352 15.5206 23.625 14.5 23.625C12.2218 23.625 10.375 21.7782 10.375 19.5V16.5C10.375 14.2218 12.2218 12.375 14.5 12.375C15.5206 12.375 16.4433 12.7648 17.1348 13.4137C17.4113 13.6725 17.8441 13.6582 18.103 13.3817C18.3618 13.1053 18.3475 12.6724 18.071 12.4135C17.1319 11.5328 15.8807 11 14.5 11Z"
          className="fill-white"
        />
        {/* F letter */}
        <path
          d="M22 11V25M22 11H27.5C27.7761 11 28 11.2239 28 11.5C28 11.7761 27.7761 12 27.5 12H22M22 17.5H26.5C26.7761 17.5 27 17.7239 27 18C27 18.2761 26.7761 18.5 26.5 18.5H22"
          className="stroke-white"
          strokeWidth="1.375"
          strokeLinecap="round"
        />
        {/* Anvil accent - small decorative element */}
        <rect
          x="21"
          y="24"
          width="7"
          height="1.2"
          rx="0.6"
          className="fill-white/40"
        />
      </svg>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight leading-none text-foreground">
          Code<span className="text-emerald-600 dark:text-emerald-400">Forge</span>
        </span>
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase leading-none mt-0.5">
          Developer Tools
        </span>
      </div>
    </button>
  )
}
