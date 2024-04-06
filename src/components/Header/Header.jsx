export default function Header() {
  return (
    <header className=" z-50 fixed top-0 left-0 flex justify-between w-full p-4 text-lg">
      <div>
        Anil Ozsoy
        <span>Software Developer/UX Designer</span>
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
