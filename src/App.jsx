import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import TechStack from "./components/TechStack/TechStack";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex justify-center">
        <div className="relative  py-16  max-w-6xl">
          <div className="absolute inset-0 pointer-events-none border-l border-r border-gray-200"></div>
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none -z-10">
            <div className="col-span-1 border-dashed border-r border-gray-200"></div>
            <div className="col-span-1 border-dashed border-r border-gray-200"></div>
            <div className="col-span-1 border-dashed border-r border-gray-200"></div>
          </div>
          <AboutMe />
          <TechStack />
        </div>
      </main>

      <Skills />
    </>
  );
}

export default App;
