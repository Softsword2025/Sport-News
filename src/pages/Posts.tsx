import React, {useEffect } from "react"
import Thumbnail from "../components/Thumbnail"
import MiniNews from "../components/MiniNews"
import MiniOffers from "../components/MiniOffers"
import { useTheme } from "../components/ThemeContext"
import NewsPosts from "../components/NewsPosts";

const Post: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme()

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [darkMode])
  
  const content = [
"Arsenal booked their place in the Europa League quarter-finals after a dramatic 2-1 victory over Sporting CP at Emirates Stadium last night. The North London club had been under pressure following a 1-1 draw in the first leg, but a spirited second-half performance gave them the edge. The decisive goal came in the 88th minute when substitute Gabriel Martinelli converted a low cross from Bukayo Saka.The match began at a frantic pace, with Sporting creating the first clear-cut chance inside five minutes. Arsenal responded quickly, dominating possession but struggling to break down the Portuguese side’s compact defence. Captain Martin Ødegaard’s precise passing eventually unlocked the backline, leading to an equalizer before halftime.", "With the win, Arsenal continue their impressive European campaign and remain one of the favourites to lift the trophy in Dublin this May. Manager Mikel Arteta praised his squad’s resilience in the post-match press conference, calling the result “a massive step” for the team. Sporting, meanwhile, will focus on their domestic league as their European journey comes to an end.",    
    "Manchester United advanced to the Champions League quarter-finals after a thrilling 3-2 win against Bayern Munich at Old Trafford. United had been trailing twice in the first half, but a pair of goals from Bruno Fernandes and a late strike from Marcus Rashford sealed the comeback. The stadium erupted as the Red Devils secured their spot in the next round.Manchester United advanced to the Champions League quarter-finals after a thrilling 3-2 win against Bayern Munich at Old Trafford. United had been trailing twice in the first half, but a pair of goals from Bruno Fernandes and a late strike from Marcus Rashford sealed the comeback. The stadium erupted as the Red Devils secured their spot in the next round.",
    "Real Madrid defeated Juventus 2-0 in a tense first-leg clash at Santiago Bernabéu. The Spanish side controlled possession for most of the match, breaking the deadlock with a stunning long-range effort from Vinícius Júnior in the 67th minute. A late header from Karim Benzema ensured Madrid took a strong advantage into the second leg in Turin."
  ];
  
  const leftNewsData = [
    { src: "/p2.jpg", text: "Manchester City signs a new striker ahead of the Champions League clash." },
    { src: "/2.webp", text: "Liverpool secures a dramatic 2-1 win against Chelsea in Premier League." },
    { src: "3.webp", text: "Barcelona's star player scores a hat-trick in the last match." },
    { src: "/4.webp", text: "Real Madrid plans new transfer strategy for the upcoming season." },
    { src: "/5.webp", text: "Juventus faces tough challenges in Serie A this week." },
    { src: "/6.webp", text: "Bayern Munich strengthens defense ahead of Champions League." },
    { src: "/7.webp", text: "Paris Saint-Germain signs a promising young midfielder." },
    { src: "/8.webp", text: "Inter Milan dominates the midfield against Napoli." },
    { src: "/9.webp", text: "Manchester United launches new academy program." },
    { src: "/10.jpeg", text: "Atletico Madrid wins thrilling derby match." },
    { src: "/leaks.jpg", text: "Tottenham Hotspur advances to Europa League semi-finals." },
    { src: "/Inter-Milan-Nicolo-Barella-1-scaled.jpg", text: "AC Milan's striker scores a decisive goal in Serie A." },
    { src: "/wp15282929-desire-doue-wallpapers.jpg", text: "Chelsea coach praises team's resilience after tough match." },
    { src: "/wp2235198-messi-celebration-wallpapers.jpg", text: "Liverpool's goalkeeper sets a new clean sheet record." },
    { src: "/1.webp", text: "Real Madrid vs Barcelona match postponed due to weather." },
    { src: "/110.webp", text: "Real Madrid vs Barcelona match postponed due to weather." },
    { src: "/112.avif", text: "Real Madrid plans new transfer strategy for the upcoming season." },
    { src: "/113.jpg", text: "Atletico Madrid wins thrilling derby match." },
    { src: "/111.jpeg", text: "Atletico Madrid wins thrilling derby match." },
    { src: "/116.png", text: "Liverpool secures a dramatic 2-1 win against Chelsea in Premier League." }
  ]


  const rightNewsData = [
    { src: "/p1.jpg", text: "Sports analytics show top scorers of the season." },
    { src: "/11.jpg", text: "Olympic hopefuls train hard for upcoming games." },
    { src: "/12.jpg", text: "Formula 1 championship race highlights and results." },
    { src: "/13.jpg", text: "Tennis Grand Slam sees unexpected champions." },
    { src: "/14.jpg", text: "Basketball league finals bring record viewership." },
    { src: "/10.jpeg", text: "Golf tournament pushes boundaries for young players." },
    { src: "/5.webp", text: "Cricket world cup teams announce final squads." },
    { src: "/6.webp", text: "Swimming championships break previous records." },
    { src: "/1.webp", text: "Rugby league match ends in thrilling draw." },
    { src: "/2.webp", text: "Athletics meet showcases emerging talents." },
    { src: "/9.webp", text: "Volleyball championship kicks off this week." },
    { src: "/7.webp", text: "Ice hockey finals bring unexpected twists." },
    { src: "/15.jpg", text: "Gymnastics world cup medals awarded." },
    { src: "/12.jpg", text: "Martial arts championship highlights top performers." },
    { src: "/14.jpg", text: "Cycling race concludes with photo finish." },
    { src: "/1.webp", text: "Real Madrid vs Barcelona match postponed due to weather." },
    { src: "/116.png", text: "Liverpool secures a dramatic 2-1 win against Chelsea in Premier League." },
    { src: "/110.webp", text: "Real Madrid vs Barcelona match postponed due to weather." },
    { src: "/112.avif", text: "Real Madrid plans new transfer strategy for the upcoming season." },
    { src: "/113.jpg", text: "Atletico Madrid wins thrilling derby match." },
    { src: "/111.jpeg", text: "Atletico Madrid wins thrilling derby match." },
  
  ]
  
  return (
    <div
      className={`homepage flex flex-col items-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full">
        <Thumbnail
          srcTH="BR-Thumb.png"
          srcThCh= "BR-Thumb-CH.png"
          GBperMonth="+3000"
          FreeDownload="+4500"
          FreeTicket="+10,000"
        />
      </div>
      <div className="px-[0.75vw] py-7 grid grid-cols-12 w-full justify-evenly">
        <div className="col-span-3 flex flex-col gap-2 items-center">
          <p className="bg-blue-400 rounded-2xl text-center w-[20vw] text-mdResponsive p-[5%]">Breaking News</p>
          <div className="flex flex-col gap-2">
            {leftNewsData.map((news, i) => (
            <div key={i} className="transition-transform duration-300 hover:-translate-y-1 hover:brightness-110 hover:rounded-6xl">
            <MiniNews src={news.src} text={news.text} />
            </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 flex flex-col">
          <NewsPosts
            title="Liverpool Stuns Barcelona in Thrilling Comeback"
            mainImage="/p6.jpg"
            secondImage="/6351233.jpg"
            thirdImage="/italia.jpg"
            author="Alice Smith"
            views="1.4k"
            shares="150k"
            lastEdited="Last edited on 6 September"
            content={content }
          />          
        </div>
        
        <div className="col-span-3 flex flex-col gap-2 items-center">
          <p className="bg-blue-400 rounded-2xl w-[20vw] text-mdResponsive text-center p-[5%]">Main News</p>
          <div className="flex flex-col gap-2">
            {rightNewsData.map((news, i) => (
            <div key={i} className="transition-transform duration-300 hover:-translate-y-1 hover:brightness-110">
            <MiniNews src={news.src} text={news.text} />
            </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 w-full max-w-7xl mt-6 left-[0.2vw]">
        <div className="clothes col-span-3 flex flex-col gap-4 self-end">
          <MiniOffers item="/shirt.png" price="$12.99" off="30% off" itemName="Barcelona black kit" time="on 10 july"/>
          <MiniOffers item="/shirt.png" price="$12.99" off="30% off" itemName="Barcelona black kit" time="on 10 july"/>
        </div>

        <div className="col-span-3 col-start-10 flex flex-col gap-4 self-end right-[0.2vw]">
          <MiniOffers item="/Ball.png" price="$12.99" off="50% off" itemName="Champions League Ball" time="23/24"/>
          <MiniOffers item="/Ball.png" price="$12.99" off="50% off" itemName="Champions League Ball" time="23/24"/>
        </div>

        <div className="comments col-span-6 col-start-4 flex flex-col gap-[1vh] row-start-1 self-end">
          <p className="text-slgResponsive">Comments</p>
          <textarea
            className="w-full p-2 border rounded h-[35vh] bg-white dark:bg-gray-800 text-black dark:text-white text-Responsive"
            placeholder="Tell us what you think about this..."
          />
          <p className="text-smResponsive my-[3vh]">
            Arsenal booked their place in the Europa League quarter-finals after a dramatic 2-1 victory over Sporting CP at Emirates Stadium last night...
          </p>
        </div>
      </div>

      <button
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}
        onClick={() => setDarkMode(!darkMode)}
        >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  )
}

export default Post
