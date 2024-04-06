export default function Header() {
  return (
    <header className=" z-50 fixed top-0 left-0 flex justify-between w-full p-4 text-lg items-center">
      <div className="flex flex-col">
        Anil Ozsoy
        <span className="text-sm">Software Developer/UX Designer</span>
      </div>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Skills</li>
      </ul>
    </header>
  );
}
