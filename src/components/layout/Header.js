"use client";
import { Ellipsis, LucideEllipsis, Moon } from "lucide-react";
import RollingIcon from "../ui/RollingIcon";

export default function Header() {
  return (
    <header className="py-6">
      <nav className="bg-white w-max mx-auto text-black flex items-center justify-between min-w-2xs px-4 py-2 rounded-2xl">
        <div className=" text-2xl font-bitcount font-semibold tracking-wider uppercase">
          Arham
        </div>
        <div className="flex items-center gap-1">
          <div className="switchMode ">
            <RollingIcon
              icon={Moon}
              className="hover:shadow-md rounded-lg  hover:bg-zinc-200 text-black py-2 px-3 transition-colors ease-in-out duration-200 hover:rounded-lg"
            />
          </div>
          <div className=" ">
            <RollingIcon
              icon={LucideEllipsis}
              className="shadow-md stroke-3 bg-black text-white py-2 px-3 rounded-lg hover:bg-white hover:text-black"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
