export default function TechStack() {
  return (
    <div className="flex flex-row text-gray-800">
      <div className="flex-1 flex-col p-6">
        <h3 className=" text-sm font-bold text-fuchsia-500">Techstack</h3>
        <h1 className="text-6xl font-bold leading-tight mb-10">
          Technologies <br></br> and tools
        </h1>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          earum quam quaerat vitae dolor aut ad sunt.{" "}
        </p>
      </div>
      <div className="flex-1 p-6 text-base text-gray-600 bg-gray-50 shadow-md">
        <div className="flex ">
          <div className="flex-1">
            <div className="font-bold text-2xl pb-6">Development</div>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>NestJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Tailwind</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className=" font-bold text-2xl pb-6">Design</div>
            <ul className="flex flex-col gap-2">
              <li>Figma</li>
              <li>Sketch</li>
              <li>Adobe XD</li>
              <li>Adobe Creative Cloud </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
