import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/flag/bd.svg"
            alt="Bengali"
            height={32}
            width={40}
          />
          Bengali
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/flag/hr.svg"
            alt="Croatian"
            height={32}
            width={40}
          />
          Croatian
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/flag/es.svg"
            alt="Spanish"
            height={32}
            width={40}
          />
          Spanish
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/flag/fr.svg"
            alt="French"
            height={32}
            width={40}
          />
          French
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/flag/it.svg"
            alt="Italian"
            height={32}
            width={40}
          />
          Italian
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            className="mr-4 rounded-md"
            src="/flag/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
};
