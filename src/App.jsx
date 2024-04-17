import AboutMe from "./components/AboutMe/AboutMe";
import ExperinceTab from "./components/ExperinceTab/ExperinceTab";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import TechStack from "./components/TechStack/TechStack";
import ContactMe from "./components/ContactMe/ContactMe";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex justify-center ">
        <div className="relative  py-16  xl:max-w-6xl w-full ">
          <div className="absolute inset-0 pointer-events-none border-l border-r border-gray-200"></div>
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none -z-10">
            <div className="col-span-1 border-dashed border-r border-gray-200"></div>
            <div className="col-span-1 border-dashed border-r border-gray-200"></div>
            <div className="col-span-1 border-dashed border-r border-gray-200"></div>
          </div>
          <div className="flex flex-col gap-20">
            <AboutMe id="aboutme" />
            <TechStack id="techstack" />
            <ExperinceTab id="experience" />
            <Portfolio id="portfolio" />
            <ContactMe id="contactme" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
