import React from "react"
import { FaEdit, FaEye, FaShareAlt, FaUser } from "react-icons/fa"
import { useTheme } from "./ThemeContext"

interface NewsCardProps {
  src: string
  text: string
  link: string
  w1?: string
  w2?: string
  h1?: string
  h2?: string
  scrollableText?: boolean
  editBy?: string
  lastEdited?: string
  views?: string
  share?: string
}

const NewsCard: React.FC<NewsCardProps> = ({
  src,
  text,
  link,
  w1 = "w-[25%]",
  h1 = "h-130",
  h2 = "h-60",
  scrollableText = false,
  editBy,
  views,
  share,
  lastEdited
}) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`flex flex-col ${w1} ${h1} items-center gap-2 rounded-lg p-3 shadow-md min-w-[250px]
        hover:-translate-y-2 hover:shadow-none hover:cursor-pointer 
        transition-all duration-300 ease-in-out 
        ${darkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-black"}`}
    >
      <img src={src} alt="news" className={`${h2} w-[90%] rounded-lg object-cover`} />

      <div className="flex justify-center w-full mt-2 gap-3">
        <div className="flex items-center gap-4">
          <FaEdit className="text-lg" />
          {editBy && <span className={`text-ssm Responsive ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <p>Edited by {editBy}</p>
            </span>}
        </div>
        <div className="flex items-center gap-1">
          <FaEye className="text-lg" />
          {views && <span className={`text-ssmResponsive ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{views}</span>}
        </div>
        <div className="flex items-center gap-1">
          <FaShareAlt className="text-lg" />
          {share && <span className={`text-ssmResponsive  ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{share}</span>}
        </div>
        <div className="flex items-center gap-1">
          <FaUser className="text-lg" />
          {lastEdited && <span className={`text-ssm Responsive ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{lastEdited}</span>}
        </div>
      </div>

      <div
        className={`text-smResponsive text-left max-w-[90%] flex-1 mt-2 ${
          scrollableText ? "overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200" : ""
        }`}
      >
        {text}
      </div>

      <button
        className={`px-3 py-1 rounded-lg mt-2 hover:-translate-y-2 hover:shadow-none hover:cursor-pointer 
          transition-all duration-300 ease-in-out 
          ${darkMode ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-black text-white hover:bg-gray-700"}`}
        onClick={() => (window.location.href = link)}
      >
        Read More...
      </button>
    </div>
  )
}

export default NewsCard