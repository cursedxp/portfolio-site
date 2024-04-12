import { useState } from "react";

export default function Portfolio() {
  const [displayCount, setDisplayCount] = useState(3);

  const handleDisplayCount = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  const portfolioItems = [
    { title: "Project 1", description: "Description for Project 1" },
    { title: "Project 2", description: "Description for Project 2" },
    { title: "Project 3", description: "Description for Project 3" },
    { title: "Project 4", description: "Description for Project 4" },
    { title: "Project 5", description: "Description for Project 5" },
    { title: "Project 6", description: "Description for Project 6" },
  ];

  return (
    <div className="flex flex-col text-gray-800">
      <div className="p-6">
        <h3 className="text-sm font-bold text-fuchsia-500">Projects</h3>
        <h1 className="text-6xl font-bold leading-tight">Portfolio</h1>
      </div>
      <div className="px-6 text-base text-gray-600 max-w-3xl">
        <p className="mb-8"></p>
      </div>
      <div className="flex flex-wrap gap-12 px-8 justify-center">
        {portfolioItems.slice(0, displayCount).map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[30%] max-w-[30%] relative bg-yellow-500 shadow-lg"
          >
            <img src="https://picsum.photos/400/600" alt="" />
            <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black h-full w-full flex flex-col justify-end">
              <div className="p-4 text-white">
                <div className="font-bold mb-4">{item.title}</div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {displayCount < portfolioItems.length && (
        <div className=" relative flex justify-center mt-16">
          <button
            onClick={handleDisplayCount}
            className="px-4 py-2 border-2 border-emerald-500 bg-white text-emerald-500 rounded-md"
          >
            Load More
          </button>
          <div className="absolute top-3 -z-10 left-0 w-full px-32 py-2">
            <div className="border-t border-dashed border-emerald-500 w-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}
