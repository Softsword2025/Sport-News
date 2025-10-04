import React from "react";
import { User, Eye, Share2, Edit2 } from "lucide-react";

interface NewsPostsProps {
  title: string;
  mainImage: string;
  secondImage?: string;
  thirdImage?: string;
  author: string;
  views: string;
  shares: string;
  lastEdited: string;
  content: string[];
}

const NewsPosts: React.FC<NewsPostsProps> = ({
  title,
  mainImage,
  secondImage,
  thirdImage,
  author,
  views,
  shares,
  lastEdited,
  content,
}) => {
  const images = [mainImage, secondImage, thirdImage];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[90vw] mx-auto">
      <p className="text-slgResponsive font-bold mb-[2vh] px-[2vw] text-center">{title}</p>

      <div className="flex flex-col items-center w-full">
        <img src={mainImage} alt="Main News" className="w-[47vw] h-[50vh] sm:w-[90vw] sm:h-auto object-cover rounded mb-2" />
        
        <div className="flex justify-between w-full max-w-[90vw] text-mdResponsive text-gray-600 dark:text-gray-300 mb-6 px-[2vw]">
          <div className="flex items-center gap-2"><User size={20}/><span>{author}</span></div>
          <div className="flex items-center gap-2"><Eye size={20}/><span>{views}</span></div>
          <div className="flex items-center gap-2"><Share2 size={20}/><span>{shares}</span></div>
          <div className="flex items-center gap-2"><Edit2 size={20}/><span>{lastEdited}</span></div>
        </div>

        {content[0] && <div className="text-ssmResponsive leading-[3vh] text-justify px-[2vw] mb-8"><p>{content[0]}</p></div>}
      </div>

      <div className="flex flex-col gap-8 w-full">
        {images.slice(1).map((img, index) => (
          img && content[index + 1] && (
            <div key={index} className="flex flex-col items-center">
              <img
                src={img}
                alt={`Image ${index + 2}`}
                className="w-[47vw] h-[43vh] sm:w-[90vw] sm:h-auto object-cover rounded mb-2"
              />
              <div className="text-ssmResponsive leading-[3vh] text-justify pt-5 px-[2vw]">
                <p>{content[index + 1]}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default NewsPosts;
