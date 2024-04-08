export default function Header() {
  return (
    <header className=" z-50 fixed top-0 left-0  w-full p-6">
      <nav className="flex justify-between  items-center  mx-auto">
        <div className="flex flex-col">
          <span className="text-gray-600">
            Hi there, 👋 I am
            <span className=" font-bold text-emerald-500"> Anil</span>
          </span>
          <span className="text-gray-600 text-xs">
            Frontend Developer/UX Designer
          </span>
        </div>
        <ul className="flex gap-5 text-gray-800">
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Skills</li>
        </ul>
      </nav>
    </header>
  );
}
