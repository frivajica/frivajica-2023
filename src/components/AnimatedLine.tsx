import { useEffect, useRef } from "react";
import gsap from "gsap";

const lines = [
  "Hello there",
  "You can call me Fran",
  "I love my job",
  "Building things, optimizing stuff",
  "Thanks for comming",
];

interface AnimatedLineProps {
  text: string;
  delay?: number;
  duration?: number;
}

export const AnimatedLine = ({ text, delay = 0, duration = 2 }: AnimatedLineProps) => {
  const loadNewLine = () => setText(lines.shift());
  const textContainer = useRef(null);

  useEffect(() => {
    gsap
      .timeline({repeat: 4, repeatDelay: 1})
      .from(
        textContainer.current,
        {
          delay,
          duration,
          y: 40,
          opacity: 0,
          ease: "power2.inOut",
        },
      )
      .to(
        textContainer.current,
        {
          duration: duration - 0.5,
          delay: 0.5,
          opacity: 0,
          ease: "power2.inOut",
        },
      )
      .add(loadNewLine);
  }, []);

  return (
    <>
      <p ref={textContainer} className="text-[20vw] font-fancy">{text}</p>
    </>
  );
};
