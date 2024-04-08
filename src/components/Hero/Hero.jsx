import CanvasBackground from "../CanvasBackground/CanvasBackground";
import BallAnimation from "../BallAnimation/BallAnimation";
import AnimatedHeroText from "../AnimatedHeroText/AnimatedHeroText";
export default function Hero() {
  return (
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
        <p className=" text-base font-normal max-w-md text text-gray-600">
          Based in Germany, I have nurtured a deep passion for crafting
          beautiful and intuitive digital experiences.
        </p>
      </div>
    </div>
  );
}
