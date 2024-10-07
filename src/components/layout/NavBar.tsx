import { HorizontalBtn } from '@/components/common/HorizontalBtn';
import { VerticalBtn } from '@/components/common/VerticalBtn';

export const NavBar = () => {
  return (
    <div className="flex w-full justify-around border-b-2 border-primary bg-background px-12 pb-3 pt-6">
      <HorizontalBtn className="w-32">About</HorizontalBtn>
      <VerticalBtn className="w-32">Experience</VerticalBtn>
      <button className="w-32">Tech</button>
      <button className="w-32">Contact</button>
    </div>
  );
};
