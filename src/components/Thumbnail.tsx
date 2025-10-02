interface ThumbnailProps {
  srcTH: string
  srcThCh: string
  GBperMonth: string
  FreeDownload: string
  FreeTicket: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ srcTH, srcThCh, GBperMonth, FreeDownload, FreeTicket }) => {
  return (
    <div className="relative w-full">
      {/* Background Images */}
      <img
        className="w-full h-auto relative z-0"
        src={srcTH}
        alt="thumbnail"
      />
      <img
        className="absolute bottom-0 right-0 w-2/5 z-10"
        src={srcThCh}
        alt="thumbnail-CH"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-15 grid grid-rows-[1fr_auto] text-white p-[1vh] mr-[45vw]">
        {/* Row 1 → 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-glgResponsive font-semibold">{GBperMonth}</p>
            <p className="text-lgResponsive">GB per Month</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-glgResponsive font-semibold">{FreeDownload}</p>
            <p className="text-lgResponsive">Free Download</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-glgResponsive font-semibold">{FreeTicket}</p>
            <p className="text-lgResponsive">Free Ticket</p>
          </div>
        </div>

        {/* Row 2 → Button */}
        <div className="flex justify-center items-center mt-4">
  <button
    className="
      flex justify-center items-center
      px-3 sm:px-5 md:px-6
      py-2 sm:py-3
      w-24 sm:w-36 md:w-40
      h-8 sm:h-10 md:h-11
      text-xs sm:text-sm md:text-base
      font-semibold rounded-lg
      bg-gradient-to-r from-red-500 to-red-600 text-white
      shadow-lg hover:shadow-xl
      transform transition-all duration-300
      hover:scale-105 active:scale-95
      focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
    "
  >
    Buy Now
  </button>
</div>

</div>
    </div>
  )
}

export default Thumbnail