import { useState } from "react"

interface Header1Props {
  onSelectCategory: (category: string) => void
}

const Header1: React.FC<Header1Props> = ({ onSelectCategory }) => {
  const [active, setActive] = useState<string>("breaking")

  const buttons = [
    { label: "Breaking News", key: "breaking" },
    { label: "Top News", key: "top" },
    { label: "Latest News", key: "latest" },
    { label: "Popular", key: "popular" }
  ]

  return (
    <header className="flex justify-between gap-3 py-4 px-[2vw] bg-black text-white z-[101] text-lgResponsive font-semibold">
      {buttons.map((btn) => (
        <button
          key={btn.key}
          onClick={() => {
            setActive(btn.key)
            onSelectCategory(btn.key)
          }}
          className={`px-4 py-2 rounded transition-colors duration-300 hover:cursor-pointer ${
            active === btn.key ? " text-blue-500" : "bg-black text-white"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </header>
  )
}

export default Header1
