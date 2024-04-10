import { useState } from "react";

export default function Portfolio() {
  const [displayCount, setDisplayCount] = useState(3);

  const handleDisplayCount = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="flex flex-col text-gray-800">
      <div className="flex-1 flex-col p-6">
        <h3 className=" text-sm font-bold text-fuchsia-500">Projcets</h3>
        <h1 className="text-6xl font-bold leading-tight ">Portfolio</h1>
      </div>
      <div className="flex-1 px-6 text-base text-gray-600 max-w-3xl">
        <p className="mb-8">
          My path in the realm of design and development is deeply rooted in a
          robust academic background and a steadfast dedication to the
          principles of user-centered design.
        </p>
      </div>

      <div className="flex gap-8 px-8">
        <div className="relative bg-yellow-500 w-1/3 shadow-lg">
          <img src="https://picsum.photos/400/600" alt="" />
          <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-black  h-full w-full flex flex-col justify-end">
            <div className="p-4 text-white ">
              <div className="font-bold mb-4">Project name</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quod, quia, quae, quos doloremque quibusdam voluptatem
                necessitatibus dolorem fugit quidem
              </p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 w-1/3 shadow-lg">
          <img src="https://picsum.photos/400/600 " alt="" />
        </div>
        <div className="bg-yellow-500 w-1/3 shadow-lg">
          <img src="https://picsum.photos/400/600" alt="" />
        </div>
      </div>
    </div>
  );
}
