import FirstSee from "../components/FirstSee"
import Header1 from "../components/Header1"
import NewsCard from "../components/NewsCard"
import Offers from "../components/Offers"
import PlanCard from "../components/PlanCard"
import TopBN from "../components/TopBN"
import { useEffect, useState } from "react"
import { useTheme } from "../components/ThemeContext"
import { Sun, Moon } from "lucide-react"

function FSSwitcher() {
  const configs = [
    { srcBack: "/2.png", srcCE: "/Ellipse 1.png", srcCH: "/FC-CH.png",widthch:"32.5%" },
    { srcBack: "/1.png", srcCE: "/Ellipse 1.png", srcCH: "/MAN-CH.png",widthch:"35%" },
    { srcBack: "/3.png", srcCE: "/Ellipse 1.png", srcCH: "/JU-CH.png",widthch:"35%" },
    { srcBack: "/4.png", srcCE: "/Ellipse 1.png", srcCH: "/IN-CH.png",widthch:"35%" }
  ]
  const [index, setIndex] = useState(0)
  const [fadeIn, setFade] = useState(true)
  const { darkMode } = useTheme()
 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % configs.length)
        setFade(true)
      }, 150)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`overflow-hidden w-[100vw] h-[100wh] relative transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className={`transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
        <FirstSee {...configs[index]} />
      </div>
    </div>
  )
}


export default function Home() {
  const [category, setCategory] = useState("breaking")
  const { darkMode, setDarkMode } = useTheme()
  const [animating, setAnimating] = useState(false)


  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [darkMode])
  const handleClick = () => {
    setDarkMode(!darkMode)
    setAnimating(true)
    setTimeout(() => setAnimating(false), 500) 
  }

  return (
    <main className={`flex flex-col gap-10 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div id="home" className=" overflow-hidden w-[100vw] h-[100vh] object-cover relative">
        <FSSwitcher />
        <div className="rounded-[15px] p-3 w-[800px] top-[20vh] absolute">
          <TopBN />
        </div>
      </div>
      <div className="-top-21 z-10 relative w-full -mb-20">
          <Header1 onSelectCategory={setCategory} />
      </div>
      <div className=" flex flex-wrap justify-center gap-[2vw] px-[0.5vw] py-[0.5vh]">
        {/* Breaking News */}
        {category === "breaking" && (
          <>
            <NewsCard
              editBy="Alice"
              views="1420"
              share="87"
              lastEdited="Alice Smith"
              src="/Cnn_logo_red_background.png"
              w1="w-[30%]"
              h1="h-[20%]"
              scrollableText
              link=""
              text="Barcelona and Real Madrid played out a tense 1-1 draw in the latest El Clásico. The match featured end-to-end action, with both teams creating numerous scoring opportunities. Barcelona’s defense held strong against relentless attacks, while Vinícius Jr. scored a superb goal for Real Madrid. Despite the draw, the intensity and rivalry were palpable throughout the 90 minutes. Coaches from both sides emphasized tactical discipline and squad rotation in post-match interviews. Fans praised the competitive spirit and the high-quality football exhibited on the pitch..."
            />
            <NewsCard
              editBy="jamine"
              views="1420"
              share="87"
              lastEdited="Alice Smith"
              src="/Inter-Milan-Nicolo-Barella-1-scaled.jpg"
              w1="w-[30%]"
              h1="h-[20%]"
              scrollableText
              link=""
              text="Juventus managed a thrilling 3-2 victory over AC Milan in a closely contested Serie A encounter. The match saw numerous lead changes, with both sides showing attacking flair and defensive resilience. Paulo Dybala scored a crucial penalty in the 78th minute to give Juventus the advantage, after Milan had equalized twice earlier. Fans were on the edge of their seats as goalkeepers made several spectacular saves. Coaches highlighted the importance of maintaining concentration and using tactical substitutions effectively. The victory keeps Juventus firmly in the title race and boosts morale ahead of the next fixtures..."
            />
            <NewsCard
              editBy="Alice"
              views="1420"
              share="87"
              lastEdited="Alice Smith"
              src="p2.jpg"
              w1="w-[30%]"
              h1="h-[20%]"
              scrollableText
              link=""
              text="Manchester United staged an incredible comeback against Liverpool in a thrilling 3-2 match at Old Trafford. After falling behind early, the Red Devils adjusted their formation and pressed high, creating multiple chances. Bruno Fernandes scored a decisive penalty in stoppage time, completing a remarkable turnaround. Fans praised the tactical adjustments by Erik ten Hag, while players celebrated their fighting spirit on the pitch. Analysts noted that the midfield dominance and rapid transitions were key factors in Manchester United’s comeback."
            />
            <NewsCard
              editBy="Alice"
              views="1420"
              share="87"
              lastEdited="Alice Smith"
              src="/leaks.jpg"
              w1="w-[30%]"
              h1="h-[20%]"
              scrollableText
              link=""
              text="Juventus overturned a 2-goal deficit to beat AC Milan 4-3 in a thrilling Serie A encounter. The match was a rollercoaster, with goals coming from both sides in quick succession. Paulo Dybala scored a crucial equalizer before Morata sealed the dramatic victory. Juventus’ resilience and tactical substitutions were lauded by experts. The atmosphere in the stadium was electric as fans witnessed one of the most exciting matches of the season. Analysts highlighted that Juventus’ attacking strategy in the final 20 minutes made the decisive difference."
            />
            <NewsCard
              editBy="Eva"
              views="890"
              share="53"
              lastEdited="Eva Martinez"
              src="/wp15282929-desire-doue-wallpapers.jpg"
              w1="w-[30%]"
              h1="h-[20%]"
              scrollableText
              link=""
              text="Liverpool secured a dominant 4-1 win against Chelsea at Anfield, showcasing their high pressing and quick transitions. Mohamed Salah opened the scoring in the 12th minute with a precise finish, followed by goals from Diaz and Firmino. Chelsea managed a consolation goal through Havertz, but Liverpool’s defense remained largely untroubled. The crowd celebrated the team’s attacking cohesion and relentless energy throughout the match. Post-match interviews emphasized the squad’s hard work, fitness, and tactical awareness. The result strengthens Liverpool’s push for a top-four finish in the Premier..."
            />
            <NewsCard
              editBy="Isabella"
              views="1230"
              share="88"
              lastEdited="Isabella Rossi"
              src="/0_FC-Barcelona-v-Valencia-CF-LaLiga-EA-Sports.jpg"
              w1="w-[30%]"
              h1="h-[20%]"
              scrollableText
              link=""
              text="Tottenham Hotspur made an incredible comeback to beat Leicester City 3-2 after trailing 0-2 at halftime. Son Heung-min and Harry Kane led the charge with precise finishes, while Spurs’ midfield controlled the tempo in the second half. Leicester pushed back but couldn’t find the net again. The victory demonstrates Tottenham’s fighting spirit and adds excitement to the Premier League standings."
            />
          </>
        )}

        {/* Top News */}
        {category === "top" && (
          <>
            <NewsCard editBy="Bob" views="987" share="45" lastEdited="Bob Johnson" src="/p1.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Barcelona and Real Madrid played out a tense 1-1 draw in the latest El Clásico. The match saw end-to-end action, with both teams creating several clear chances. Barcelona’s defense held strong against relentless attacks, while Vinícius Jr. scored a superb goal for Real Madrid. The draw keeps the title race open and leaves fans eagerly anticipating the next encounter." />
            <NewsCard editBy="Frank" views="1120" share="69" lastEdited="Frank Zhang" src="/wp2235198-messi-celebration-wallpapers.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Chelsea produced an impressive 3-0 home win over Tottenham Hotspur. Kai Havertz scored twice, while Mason Mount added a composed finish late in the second half. Tottenham struggled to contain Chelsea’s quick passing and high pressing style. The victory boosts Chelsea’s confidence as they aim for a top-four finish in the Premier League." />
            <NewsCard editBy="Bob" views="987" share="45" lastEdited="Bob Johnson" src="/6351233.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Liverpool secured a dominant 4-1 win against Chelsea at Anfield, showcasing their high pressing and quick transitions. Mohamed Salah opened the scoring in the 12th minute with a precise finish, followed by goals from Diaz and Firmino. ." />
            <NewsCard editBy="Frank" views="1120" share="69" lastEdited="Frank Zhang" src="/116.png" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Chelsea produced an impressive 3-0 home win over Tottenham Hotspur. Kai Havertz scored twice, while Mason Mount added a composed finish late in the second half. Tottenham struggled to contain Chelsea’s quick passing and high pressing style. The victory boosts Chelsea’s confidence as they aim for a top-four finish in the Premier League." />
            <NewsCard editBy="Frank" views="1120" share="69" lastEdited="Frank Zhang" src="/110.webp" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Chelsea produced an impressive 3-0 home win over Tottenham Hotspur. Kai Havertz scored twice, while Mason Mount added a composed finish late in the second half. Tottenham struggled to contain Chelsea’s quick passing and high pressing style. The victory boosts Chelsea’s confidence as they aim for a top-four finish in the Premier League." />
            <NewsCard editBy="Frank" views="1120" share="69" lastEdited="Frank Zhang" src="/15.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Chelsea produced an impressive 3-0 home win over Tottenham Hotspur. Kai Havertz scored twice, while Mason Mount added a composed finish late in the second half. Tottenham struggled to contain Chelsea’s quick passing and high pressing style. The victory boosts Chelsea’s confidence as they aim for a top-four finish in the Premier League." />
          </>
        )}

        {/* Latest News */}
        {category === "latest" && (
          <>
            <NewsCard editBy="Clara" views="1560" share="112" lastEdited="Clara Lee" src="/connor-coyne-OgqWLzWRSaI-unsplash.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Juventus overturned a 2-goal deficit to beat AC Milan 4-3 in a thrilling Serie A encounter. The match was a rollercoaster, with goals coming in quick succession from both sides. Paulo Dybala scored the equalizer before Morata sealed the dramatic victory. Fans hailed the team’s fighting spirit and praised Massimiliano Allegri’s bold substitutions that changed the course of the game." />
            <NewsCard editBy="Grace" views="1450" share="101" lastEdited="Grace Chen" src="/gettyimages-2084800828.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Atletico Madrid drew 1-1 with Sevilla in a hard-fought La Liga clash. Despite dominating possession in parts of the match, Atletico struggled to convert chances into goals. Sevilla’s disciplined defense and quick counterattacks kept the game evenly poised. Coach Simeone praised his team’s tactical organization and resilience in the post-match interview." />
            <NewsCard editBy="Clara" views="1560" share="112" lastEdited="Clara Lee" src="/111.jpeg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Liverpool secured a dominant 4-1 win against Chelsea at Anfield, showcasing their high pressing and quick transitions. Mohamed Salah opened the scoring in the 12th minute with a precise finish, followed by goals from Diaz and Firmino. " />
            <NewsCard editBy="Clara" views="1560" share="112" lastEdited="Clara Lee" src="/11.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Liverpool secured a dominant 4-1 win against Chelsea at Anfield, showcasing their high pressing and quick transitions. Mohamed Salah opened the scoring in the 12th minute with a precise finish, followed by goals from Diaz and Firmino. " />
            <NewsCard editBy="Clara" views="1560" share="112" lastEdited="Clara Lee" src="/3.webp" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Liverpool secured a dominant 4-1 win against Chelsea at Anfield, showcasing their high pressing and quick transitions. Mohamed Salah opened the scoring in the 12th minute with a precise finish, followed by goals from Diaz and Firmino. " />
            <NewsCard editBy="Clara" views="1560" share="112" lastEdited="Clara Lee" src="/5.webp" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Liverpool secured a dominant 4-1 win against Chelsea at Anfield, showcasing their high pressing and quick transitions. Mohamed Salah opened the scoring in the 12th minute with a precise finish, followed by goals from Diaz and Firmino. " />
          </>
        )}

        {/* Popular News */}
        {category === "popular" && (
          <>
            <NewsCard editBy="David" views="1345" share="78" lastEdited="David Kim" src="/champions-league_esporte.webp" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Bayern Munich dominated Borussia Dortmund in a 5-1 victory at Allianz Arena. Lewandowski scored a hat-trick, while Musiala and Gnabry added brilliant goals showcasing their attacking flair. Dortmund struggled to cope with Bayern’s relentless pressing and quick transitions. The win strengthens Bayern’s lead at the top of the Bundesliga, signaling their intent to claim another title." />
            <NewsCard editBy="Henry" views="980" share="60" lastEdited="Henry Wilson" src="/newsEXAMPLE.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Inter Milan secured a 2-0 win against Napoli, thanks to goals from Dzeko and Lautaro Martinez. The Nerazzurri controlled the midfield and created several clear-cut chances. Napoli pushed hard for an equalizer but failed to break down Inter’s organized defense. This result strengthens Inter’s position in Serie A and boosts morale ahead of upcoming fixtures." />
            <NewsCard editBy="David" views="1345" share="78" lastEdited="David Kim" src="/112.avif" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Inter Milan secured a 2-0 win against Napoli, thanks to goals from Dzeko and Lautaro Martinez. The Nerazzurri controlled the midfield and created several clear-cut chances. Napoli pushed hard for an equalizer but failed to break down Inter’s organized defense. This result strengthens Inter’s position in Serie A and boosts morale ahead of upcoming fixtures." />
            <NewsCard editBy="David" views="1345" share="78" lastEdited="David Kim" src="/113.jpg" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Inter Milan secured a 2-0 win against Napoli, thanks to goals from Dzeko and Lautaro Martinez. The Nerazzurri controlled the midfield and created several clear-cut chances. Napoli pushed hard for an equalizer but failed to break down Inter’s organized defense. This result strengthens Inter’s position in Serie A and boosts morale ahead of upcoming fixtures." />
            <NewsCard editBy="David" views="1345" share="78" lastEdited="David Kim" src="/8.webp" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Inter Milan secured a 2-0 win against Napoli, thanks to goals from Dzeko and Lautaro Martinez. The Nerazzurri controlled the midfield and created several clear-cut chances. Napoli pushed hard for an equalizer but failed to break down Inter’s organized defense. This result strengthens Inter’s position in Serie A and boosts morale ahead of upcoming fixtures." />
            <NewsCard editBy="David" views="1345" share="78" lastEdited="David Kim" src="/2.webp" w1="w-[30%]" h1="h-[20%]" scrollableText link="" text="Inter Milan secured a 2-0 win against Napoli, thanks to goals from Dzeko and Lautaro Martinez. The Nerazzurri controlled the midfield and created several clear-cut chances. Napoli pushed hard for an equalizer but failed to break down Inter’s organized defense. This result strengthens Inter’s position in Serie A and boosts morale ahead of upcoming fixtures." />
          </>
        )}
      </div>

      <div>
        <Offers item="/cloth.png" price="12.99$" itemName="Barcelona black kit" time="30% off on 10 july" />
      </div>

      <div className="text-center text-slgResponsive font-bold">⚽ Plans</div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <PlanCard
          src="/Dragon.png"
          title="Dragon plan"
          price="13.99$"
          features={["FREE API", "Unlimited Calls", "Premium Support", "Live Updates"]}
          imgSize="w-[80px]"
        />
        <PlanCard
          src="/Warrior.png"
          title="Warrior Plan"
          price="20.99$"
          features={["FREE API", "Faster Response", "More Requests", "Support"]}
          imgSize="w-[46px]"
        />
        <PlanCard
          src="/Horse.png"
          title="Horse Plan"
          price="29.99$"
          features={["FREE API", "Custom API Key", "Analytics", "Support"]}
          imgSize="w-[80px]"
        />
      </div>
      <button
  onClick={handleClick}
  className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg
    ${animating ? "animate-pop" : ""}
    ${darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}
    transform transition-transform duration-200 hover:scale-110`}
>
  {darkMode ? (
    <Sun className={`w-6 h-6 ${animating ? "animate-spin" : ""}`} />
  ) : (
    <Moon className={`w-6 h-6 ${animating ? "animate-spin" : ""}`} />
  )}
</button>
    </main>
  )
}