"use client";
import { Ellipsis, LucideEllipsis, Moon, Sun } from "lucide-react";
import RollingIcon from "../ui/RollingIcon";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="py-6">
      <nav className="dark:bg-white bg-black w-max mx-auto text-white dark:text-black flex items-center justify-between min-w-2xs px-4 py-2 rounded-2xl">
        <div className=" text-2xl font-bitcount font-semibold tracking-wider uppercase">
          Arham
        </div>
        <div className="flex items-center gap-1">
          <div className="switchMode ">
            <RollingIcon
              onClick={() => setTheme(isDark ? "light" : "dark")}
              icon={isDark ? Sun : Moon}
              className="hover:shadow-md rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-white hover:text-black dark:text-black dark:hover:text-white py-2 px-3 transition-colors ease-in-out duration-200"
            />
          </div>
          <div className=" ">
            <RollingIcon
              icon={LucideEllipsis}
              className="shadow-md stroke-3 bg-white dark:bg-black text-black dark:text-white py-2 px-3 rounded-lg hover:bg-white hover:text-black"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
