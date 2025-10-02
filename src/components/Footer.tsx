import { FaTwitter, FaInstagram, FaEnvelope, FaTelegram, FaGithub } from "react-icons/fa"
import { useTheme } from "./ThemeContext"

const Footer = () => {
  const { darkMode } = useTheme()

  return (
    <footer className={`p-6 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-black text-white"}`}>
      <div className={`text-start mt-4 text-smResponsive ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        © {new Date().getFullYear()} Sport News. All rights reserved.
      </div>
      <p className={`text-smResponsive mt-4 ${darkMode ? "text-gray-300" : "text-gray-200"}`}>
        All content, images, and materials displayed on this website are the exclusive property of [Your Website Name] unless otherwise stated. By accessing and using this site, you agree not to copy, reproduce, distribute, or modify any part of the content without prior written permission. [Your Website Name] reserves the right to update or change these terms at any time, and continued use of the site constitutes your acceptance of such changes.
      </p>
      <div className="mt-10 flex flex-row w-full justify-evenly">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 text-smResponsive"><FaTelegram /> @Death_Stalker_Owen</p>
          <p className="flex items-center gap-2 text-smResponsive"><FaInstagram /> @jawadvenom2019</p>
          <p className="flex items-center gap-2 text-smResponsive"><FaTwitter /> @jawadstalker</p>
          <p className="flex items-center gap-2 text-smResponsive"><FaEnvelope /> jawadvamps@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 text-smResponsive"><FaTelegram /> @ThePsychof</p>
          <p className="flex items-center gap-2 text-smResponsive"><FaGithub />@ThePsychof</p>
          <p className="flex items-center gap-2 text-smResponsive"><FaInstagram /> -</p>
          <p className="flex items-center gap-2 text-smResponsive"><FaEnvelope /> dutyofsell@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer