interface FirstSeeProps {
  srcBack: string
  srcCH: string
  srcCE: string
  widthch: string;
}

const FirstSee: React.FC<FirstSeeProps> = ({ srcBack, srcCH, srcCE, widthch }) => {
  return (
    <div className="relative flex w-screen h-[95vh] items-center justify-center overflow-hidden">
      {/* Background shifted left */}
      <img
        src={srcBack}
        alt="Background"
        className="absolute inset-0 w-[118vw] h-full object-cover -left-[18vw]"
      />

      {/* Circle */}
      <img
        src={srcCE}
        alt="Circle"
        className="absolute top-0 right-0 h-full object-contain"
      />

      {/* Character */}
      <img
        src={srcCH}
        alt="Character"
        style={{width:widthch}}
        className="absolute bottom-0 right-0 max-w-[700px] object-contain"
      />
    </div>
  )
}

export default FirstSee