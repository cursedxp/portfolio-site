import AboutMe from "./components/AboutMe/AboutMe";
import BallAnimation from "./components/BallAnimation/BallAnimation";
import CanvasBackground from "./components/CanvasBackground/CanvasBackground";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AnimatedHeroText from "./components/AnimatedHeroText/AnimatedHeroText";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        <CanvasBackground />
        <BallAnimation />
        <div
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-9xl flex flex-col  justify-center items-start gap-2 z-20"
          style={{ color: "#F241B3" }}
        >
          <div>MULTI-</div>
          <div className="ml-40">DISCIPLINED</div>
          <AnimatedHeroText />
          <p
            className=" text-sm font-normal max-w-96 text"
            style={{ color: "#3E3E3E" }}
          >
            Based in Germany, I have nurtured a deep passion for crafting
            beautiful and intuitive digital experiences.
          </p>
        </div>
      </div>

      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
