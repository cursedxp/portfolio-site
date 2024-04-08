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

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className=" text-left ml-10">
      <span className=" text-emerald-500" ref={el} />
    </div>
  );
}
