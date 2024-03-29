import Image from "next/image";

export const Logo = () => {
  return (
    <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
      <Image src="/mascot.svg" alt="logo" height={40} width={40} />
      <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
        Lingo
      </h1>
    </div>
  );
};
