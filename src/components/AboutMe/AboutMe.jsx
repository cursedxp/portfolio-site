export default function AboutMe() {
  return (
    <div className="flex justify-center">
      <div className="relative  py-16 px-4 max-w-6xl">
        <div className="absolute inset-0 pointer-events-none border-l border-r border-gray-200"></div>
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
          <div className="col-span-1 border-dashed border-r border-gray-200"></div>
          <div className="col-span-1 border-dashed border-r border-gray-200"></div>
          <div className="col-span-1 border-dashed border-r border-gray-200"></div>
        </div>
        <div className="flex flex-row ">
          <h1 className="flex-1 text-6xl font-bold leading-tight text-gray-800 p-6 ">
            My <br></br> development - design odyssey
          </h1>
          <div className="flex-1 p-6">
            <p className="text-base text-gray-600">
              My path in the realm of design and development is deeply rooted in
              a robust academic background and a steadfast dedication to the
              principles of user-centered design. This combination has not only
              shaped my approach but has also been instrumental in my successful
              involvement in enhancing digital platforms for various web and
              mobile projects. At the core of these endeavors was my commitment
              to improving user experiences through rigorous, data-driven
              research and comprehensive analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
