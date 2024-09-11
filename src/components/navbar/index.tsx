import { Signature } from "lucide-react";
import Link from "next/link";
import { BMCLogo } from "./bmc-logo";

const NavBar = () => {
  return (
    <div className="py-4 px-6 flex border border-b-gray-300 justify-between items-center bg-background-100">
      <Link href="/" className="flex text-primary-700 gap-1 items-center">
        <Signature className="color-primary text-primary-700" size={32} />
        <div className="font-bold font-mono md:text-2xl text-xl">Signature</div>
      </Link>
      <Link href="https://www.buymeacoffee.com/w4r10ck" target="_blank">
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=w4r10ck&button_colour=007f80&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
          alt="buymeacoffee"
          className="hidden md:block w-40"
        />
        <div className="h-10 w-10 md:hidden  bg-background-700 flex items-center content-center rounded p-3">
          <BMCLogo />
        </div>
      </Link>
    </div>
  );
};
export { NavBar };
