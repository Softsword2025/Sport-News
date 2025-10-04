import { FaEye, FaShareAlt, FaUser } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

interface MiniNewsProps {
  src: string;
  text: string;
  link?: string;
  views?: number;
  shares?: number;
  author?: string;
  w1?: string;
  w2?: string;
}

const MiniNews: React.FC<MiniNewsProps> = ({
  src,
  text,
  link = "",
  views = 0,
  shares = 0,
  author = "Unknown",
  w1 = "w-[clamp(5vw,9vw,12vw)]",
  w2 = "w-full",
}) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-cols-[auto_1fr] gap-[0.5vw] px-[0.5vw] py-[0.5vh] -mr-[2vw] rounded transition-colors duration-300
        w-full
        bg-cover
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      {/* Image section */}
      <div className={`${w1} flex justify-start items-center`}>
        <img
          className="w-full h-full object-cover rounded cursor-pointer"
          src={src}
          alt=""
          onClick={() => link && (window.location.href = link)}
        />
      </div>

      {/* Content section */}
      <div className={`${w2} grid grid-rows-[auto_auto_auto] gap-1`}>
        {/* Text */}
        <p className="text-gsmResponsive">{text}</p>

        {/* Views and shares */}
        <div
          className={`flex items-center gap-4 text-xs ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <div className="flex items-center gap-1 text-microResponsive">
            <FaEye />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1 text-microResponsive">
            <FaShareAlt />
            <span>{shares}</span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-1 text-microResponsive">
          <FaUser />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default MiniNews
