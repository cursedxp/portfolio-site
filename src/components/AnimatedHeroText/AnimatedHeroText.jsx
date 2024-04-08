import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedHeroText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["DEVELOPER", "UX DESIGNER"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className=" text-left ml-10">
      <span className=" text-emerald-500" ref={el} />
    </div>
  );
}
