import { isRouteMatch } from "next/dist/server/future/route-matches/route-match";
import Image from "next/image";
import { useState } from "react";

export default function BlurImage({image,buttonUrl, buttonUrl2}) {
  const [isLoading, setLoading] = useState(true);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-6 relative">
        <Image
          alt=""
          src={image}          
          layout="fill"
          objectFit="cover"
          className={`
            duration-700 ease-in-out
            ${isHovered ? "opacity-75" : ""}
            ${isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"}
          `}
          onLoadingComplete={() => setLoading(false)}
        />
        {isHovered && (

          <div className="absolute inset-0 flex items-center justify-center">
            <ul>
              <li className="p-2">
            <button className=" w-screen bg-teal-500 text-white px-4 py-2 rounded-lg font-burtons font-extrabold shadow-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" onClick={()=> window.open(buttonUrl, "_blank")}>
              SITE
            </button> 
            </li>
              <li className="p-2">
            <button className=" w-screen bg-teal-500 text-white px-4 py-2 rounded-lg font-burtons font-extrabold shadow-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] stroke-black stroke-2" onClick={()=> window.open(buttonUrl2, "_blank")}>
              CODE
            </button> 
              </li>
            </ul>
                       
          </div>         

        )}
      </div>
    </a>
  );
}
