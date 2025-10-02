import { useTheme } from "./ThemeContext"

interface OffersProps {
  item: string
  price: string
  itemName: string
  time: string
}

const Offers: React.FC<OffersProps> = ({ item, price, itemName, time }) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`w-full h-[25vh] relative transition-colors duration-300 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="absolute right-0 top-0 w-[55vw] h-full">
        <img
          src="/DUDE.png"
          alt="dude"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 ml-[6vw]">
          <p className={`text-mdResponsive ${darkMode ? "text-gray-200" : "text-white"}`}>
            {time}
          </p>
          <p className={`text-smResponsive ${darkMode ? "text-gray-100" : "text-white"}`}>
            {itemName} is available in store
          </p>
          <p className={`font-bold text-mdResponsive ${darkMode ? "text-yellow-400" : "text-white"}`}>
            {price}
          </p>
          <button
            className={`text-smResponsive bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl shadow hover:shadow-md transition ${
              darkMode ? "hover:bg-blue-400" : "hover:bg-blue-600"
            }`}
          >
            Go to Shop
          </button>
        </div>
      </div>

      {/* Left-side item image */}
      <img src={item} alt="cloth" className="absolute -left-[0.5vw] top-[1vh] h-[17vh] m-5" />
    </div>
  )
}

export default Offers