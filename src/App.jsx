import AboutMe from "./components/AboutMe/AboutMe";
import BallAnimation from "./components/BallAnimation/BallAnimation";
import CanvasBackground from "./components/CanvasBackground/CanvasBackground";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        <CanvasBackground />
        <BallAnimation />
      </div>

      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
