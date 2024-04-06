import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");
    let time = 0;
    let animationFrameId;

    const color = (x, y, red, green, blue) => {
      canvasContext.fillStyle = `rgb(${red},${green},${blue})`;
      canvasContext.fillRect(x, y, 1, 1);
    };

    const runAnimation = () => {
      for (let x = 0; x < 32; x++) {
        for (let y = 0; y < 32; y++) {
          const red = Math.floor(
            248 + 20 * Math.cos((x * x - y * y) / 300 + time)
          );
          const green = Math.floor(
            192 +
              64 *
                Math.sin(
                  (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) /
                    300
                )
          );
          const blue = Math.floor(
            166 +
              20 *
                Math.sin(
                  5 * Math.sin(time / 9) +
                    ((x - 20) * (x - 20) + (y - 20) * (y - 20)) / 1100
                )
          );

          color(x, y, red, green, blue);
        }
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(runAnimation);
    };

    runAnimation();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-absolute top-0 left-0 w-full h-full z-10"
      width={32}
      height={32}
    />
  );
}
