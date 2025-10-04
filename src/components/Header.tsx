import { Link } from "react-router-dom"
import {
  Home as HomeIcon,
  Newspaper,
  Trophy,
  Users,
  FileText,
  LogIn,
  UserPlus
} from "lucide-react"
import { useTheme } from "./ThemeContext"

const Header = () => {
  const { darkMode } = useTheme()

  return (
    <header className={`top-0 flex items-center justify-between p-[1.2vw] shadow-md z-150 h-[6vh] transition-colors duration-300
      ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <nav>
        <ul className="flex space-x-[1vw]">
          {/* Home */}
          <li className="flex items-center gap-[0.5vw]">
            <HomeIcon className="w-[clamp(1rem,3vw,2rem)] h-auto" />
            <Link to="/" className={`transition hover:text-blue-400 text-smResponsive`}>
              Home
            </Link>
          </li>

          {/* News */}
          <li className="relative group flex items-center gap-[0.5vw] text-smResponsive">
            <Newspaper className="w-[clamp(1rem,3vw,2rem)] h-auto" />
            <Link to="/about" className="transition hover:text-blue-400">
              News
            </Link>
            <div className={`absolute left-0 mt-2 top-full w-48 rounded-md shadow-lg 
                             opacity-0 group-hover:opacity-100 
                             transform scale-95 group-hover:scale-100 
                             transition-all duration-300 ease-out
                             z-10
                             ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
              <ul className="py-2 z-50">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Latest</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Popular</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Archive</a></li>
              </ul>
            </div>
          </li>

          {/* Matches */}
          <li className="relative group flex items-center gap-[0.5vw] text-smResponsive">
            <Trophy className="w-[clamp(1rem,3vw,2rem)] h-auto" />
            <Link to="/contact" className="transition hover:text-blue-400">
              Matches
            </Link>
            <div className={`absolute left-0 mt-2 top-full w-48 rounded-md shadow-lg 
                             opacity-0 group-hover:opacity-100 
                             transform scale-95 group-hover:scale-100 
                             transition-all duration-300 ease-out
                             z-10
                             ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
              <ul className="py-2 z-50">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Upcoming</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Results</a></li>
              </ul>
            </div>
          </li>

          {/* Clubs */}
          <li className="relative group flex items-center gap-[0.5vw] text-smResponsive">
            <Users className="w-[clamp(1rem,3vw,2rem)] h-auto" />
            <Link to="/clubs" className="transition hover:text-blue-400">
              Clubs
            </Link>
            <div className={`absolute left-0 mt-2 top-full w-48 rounded-md shadow-lg 
                             opacity-0 group-hover:opacity-100 
                             transform scale-95 group-hover:scale-100 
                             transition-all duration-300 ease-out
                             z-10
                             ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
              <ul className="py-2 z-50">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Barcelona</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Juventus</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Manchester City</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Real Madrid</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition">Inter-Milan</a></li>
              </ul>
            </div>
          </li>

          {/* Posts */}
          <li className="flex items-center gap-[0.5vw] text-smResponsive">
            <FileText className="w-[clamp(1rem,3vw,2rem)] h-auto" />
            <Link to="/posts" className="transition hover:text-blue-400">
              Posts
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login / Sign Up */}
      <div className="flex space-x-[1vw] z-50">
        <Link to="/login" className="flex items-center gap-[0.4vw] transition hover:text-blue-400 text-smResponsive">
          <LogIn className="w-[clamp(1rem,3vw,2rem)] h-auto" />
          Login
        </Link>
        <Link to="/signup" className="flex items-center gap-[0.4vw] transition hover:text-blue-400 text-smResponsive">
          <UserPlus className="w-[clamp(1rem,3vw,2rem)] h-auto" />

          Sign up
        </Link>
      </div>
    </header>
  )
}

export default Header