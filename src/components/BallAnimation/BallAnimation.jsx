import { useEffect, useRef } from "react";

export default function BallAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.imageSmoothingEnabled = true;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function Circle(x, y, radius, colorOne, colorTwo, vx, vy) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.colorOne = colorOne;
      this.colorTwo = colorTwo;
      this.vx = vx; // Velocity in the x-direction
      this.vy = vy; // Velocity in the y-direction

      this.draw = function () {
        const gradient = context.createRadialGradient(
          this.x,
          this.y,
          10,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, this.colorOne);
        gradient.addColorStop(1, this.colorTwo);

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fillStyle = gradient;
        context.fill();
      };
      // Update the position of the circle
      this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx = -this.vx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.draw();
      };
    }

    const circles = [
      new Circle(100, 100, 64, "rgb(255,226,132)", "rgb(220,168,0)", 2, 2),
      new Circle(200, 300, 48, "rgb(255,143,215)", "rgb(233,94,183)", 3, 3),
      new Circle(500, 200, 32, "rgb(155,207,255)", "rgb(53,153,246)", 4, 4),
    ];

    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas

      circles.forEach(function (circle) {
        circle.update();
      });
    }

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-10"
    ></canvas>
  );
}
