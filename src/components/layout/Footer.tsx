import { Boxes } from '../ui/background-boxes';

export const Footer = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#686458]">
      <Boxes />
      <h1 className="relative z-20 text-xl text-white md:text-4xl">Tailwind is Awesome</h1>
      <p className="relative z-20 mt-2 text-center text-neutral-300">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
};
