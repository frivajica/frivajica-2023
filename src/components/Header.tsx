export const Header = () => {
  return (
    <div className="flex justify-around h-12 w-screen bg-red-700">
      <div className="flex font-fancy my-auto">This is a header</div>
      <div className="flex self-center items-center gap-2">
        <div className="h-0.5 w-14 bg-black rounded" />
        <div className="h-2.5 w-2.5 border-[1.5px] border-black rounded-full" />
        <div className="h-0.5 w-14 bg-black rounded" />
      </div>
      <div className="font-fancy my-auto">This is a div</div>
    </div>
  );
};
