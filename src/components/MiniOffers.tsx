interface OffersProps {
  item: string
  price: string
  itemName: string
  time: string
  off: string
}

const Offers: React.FC<OffersProps> = ({ item, price, itemName, time, off }) => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-[2vh] px-[1vw] rounded-lg shadow">
      {/* Image */}
      <img src={item} alt={itemName} className="w-40 h-auto object-contain" />

      {/* Text */}
      <div className="text-center mt-[1vh]">
        <p className="text-smResponsive text-black font-semibold">
          {off} {time}
        </p>
        <p className="text-smResponsive text-black">{itemName} is available in store</p>
        <p className="text-glgResponsive font-bold text-black mt-[1vh]">{price}</p>
      </div>
    </div>
  )
}

export default Offers