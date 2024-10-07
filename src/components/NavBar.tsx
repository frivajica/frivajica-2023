export const NavBar = () => {
  return (
    <div className="flex h-12 w-full justify-around bg-background">
      <div className="font-fancy my-auto flex">This is a header</div>
      <div className="flex items-center gap-2 self-center">
        <div className="h-0.5 w-14 rounded bg-black" />
        <div className="h-2.5 w-2.5 rounded-full border-[1.5px] border-black" />
        <div className="h-0.5 w-14 rounded bg-black" />
      </div>
      <div className="font-fancy my-auto">This is a div</div>
    </div>
  );
};
