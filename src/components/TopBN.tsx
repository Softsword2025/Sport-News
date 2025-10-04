import MiniNews from "./MiniNews"
import { useTheme } from "./ThemeContext"

const TopBN = () => {
  const { darkMode } = useTheme()

  const breakingNews = [
    {
      src: "/5689.webp",
      text: "Manchester City signs a new striker ahead of the Champions League clash.",
      views: 1200,
      shares: 350,
      author: "John Doe",
    },
    {
      src: "/lewandowski-2825.jpg",
      text: "Liverpool prepares for new transfers before summer ends.",
      views: 980,
      shares: 210,
      author: "Alice Smith",
    },
    {
      src: "p3.jpg",
      text: "Real Madrid wins the friendly tournament against rivals.",
      views: 1500,
      shares: 420,
      author: "Robert Brown",
    },
    {
      src: "p7.jpg",
      text: "Real Madrid wins the friendly tournament against rivals.",
      views: 1500,
      shares: 420,
      author: "Robert Brown",
    },
  ];

  const latestNews = [
    {
      src: "/Inter-Milan-Nicolo-Barella-1-scaled.jpg",
      text: "Chelsea announces new coaching staff for upcoming season.",
      views: 800,
      shares: 120,
      author: "Emma Johnson",
    },
    {
      src: "/p4.jpg",
      text: "Manchester United eyes a new midfielder this summer.",
      views: 1100,
      shares: 300,
      author: "David Lee",
    },
    {
      src: "/newsEXAMPLE.jpg",
      text: "Barcelona signs promising young talent from academy.",
      views: 950,
      shares: 200,
      author: "Sophia Wilson",
    },
    {
      src: "/p8.webp",
      text: "Barcelona signs promising young talent from academy.",
      views: 950,
      shares: 200,
      author: "Sophia Wilson",
    },
    {
      src: "/p9.webp",
      text: "Barcelona signs promising young talent from academy.",
      views: 950,
      shares: 200,
      author: "Sophia Wilson",
    },
    {
      src: "/p10.avif",
      text: "Barcelona signs promising young talent from academy.",
      views: 950,
      shares: 200,
      author: "Sophia Wilson",
    },
  ]

  const repeatedBreaking = [...breakingNews, ...breakingNews]
  const repeatedLatest = [...latestNews, ...latestNews]

  return (
    <div className={` flex flex-row gap-[0.5vw] px-[1vw] py-[1vh] w-[60vw] ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black rounded-[20px]" }`}>
      {/* Breaking News */}
      <div className="flex flex-col items-start p-2">
        <p className="font-bold text-slgResponsive mb-6">Breaking News</p>
        <div className="overflow-hidden relative w-full h-[36vh] group">
          <div className="flex flex-col gap-[1.5vh] animate-scrollNews group-hover:animation-paused">
            {repeatedBreaking.map((news, idx) => (
              <MiniNews
                key={idx}
                src={news.src}
                text={news.text}
                views={news.views}
                shares={news.shares}
                author={news.author}
                w1="w-[10vw]"
                w2="w-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="flex flex-col items-start p-2">
        <p className="font-bold text-slgResponsive mb-6">Latest News</p>
        <div className="overflow-hidden relative w-full h-[36vh] group">
          <div className="flex flex-col gap-[1.5vh] animate-scrollNews group-hover:animation-paused">
            {repeatedLatest.map((news, idx) => (
              <MiniNews
                key={idx + repeatedBreaking.length}
                src={news.src}
                text={news.text}
                views={news.views}
                shares={news.shares}
                author={news.author}
                w1="w-[10vw]"
                w2="w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBN
