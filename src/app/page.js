import ScrollFlipImage from "@/components/home/ScrollFlipImage";
import RollingIcon from "@/components/ui/RollingIcon";
import RollingTextButton from "@/components/ui/RollingTextButton";
import { LucideEllipsis } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <ScrollFlipImage>
        <section className="min-h-screen flex flex-col justify-between">
          <div className="flex pt-10 items-center justify-center mt-20">
            <h1 className="flex flex-col items-center text-9xl sm:text-9xl font-bold uppercase tracking-wide leading-none select-none ">
              <span className="relative">
                <span className="absolute -left-10 sm:-left-24 top-1/2 -translate-y-1/2 text-4xl sm:text-9xl font-medium drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                  &lt;
                </span>
                Software
              </span>
              <span className="relative">
                Engineer
                <span className="absolute -right-14 sm:-right-32 bottom-1 text-4xl sm:text-9xl font-medium drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                  /&gt;
                </span>
              </span>
            </h1>
          </div>
          {/* <div className="flex justify-center -mt-10">
            <Image
              src="/images/Dummy.png"
              className="w-[15%] h-3/12"
              width={30}
              height={30}
              alt="arham picture "
            />
          </div> */}
          <div className="flex justify-between text-2xl px-6 pb-6 font-sanscode">
            <span className="font-bold text-5xl">@2026</span>
            <span>
              {"{{ "}
              /AI & FULL-STACK DEVELOPMENT
              <span className=" ms-1 h-2.5 border border-l-black animate-ping"></span>
              {" }}"}
            </span>
          </div>
        </section>
        {/* SECTION 2: Next 100vh (Where the flipped card lands) */}
        <section className="min-h-screen flex items-center justify-between px-8 sm:px-16">
          <div className="max-w-sm">
            <h2 className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4">
              01 / Introduction
            </h2>
            <h4 className="font-sanscode text-3xl tracking-wide">
              Hi, I'm Muhammad Arham Rehan. <br /> Full-Stack Developer.
            </h4>
            <p className="my-4 text-xl font-light ">
              Recent BSCS grad. I build full-stack products, ship client work,
              and learn by making things that actually get used.
            </p>
            <div className="">
              <hr className="text-gray-300 my-4" />
              <h6 className="font-semibold opacity-75 tracking-tight text-sm">
                Currently at :
              </h6>
              <p className="font-bold text-xl my-2">
                OFFSCRIPT Marketing Agency
              </p>
              <p className="font-semibold">Co-Founder </p>
              <p>Islamabad , Pakistan</p>
            </div>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-sm opacity-75 my-4">
              Scroll further to explore ,my skills, interactive projects and my
              work.
            </p>
            <RollingTextButton
              icon="ArrowDown"
              className="shadow-md stroke-3 bg-white dark:bg-black text-black dark:text-white py-2 px-3 rounded-lg hover:bg-white hover:text-black"
              btn_text="My Projects"
            />
          </div>
        </section>
        {/* SECTION 3: Third 100vh (Card slides LEFT, content sits on the RIGHT) */}
        <section className="min-h-screen flex items-center justify-end px-8 sm:px-20">
          <div className="w-full md:w-1/2 space-y-4">
            <span className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4">
              02 / What I Do
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Turning ideas into interactive products.
            </h2>
            <h4 className="font-semibold opacity-85">
              I ship websites, internal tools, and personal systems.
            </h4>
            <ul className="text-sm sm:text-base opacity-80 leading-relaxed">
              Most of my recent work lives in two places:
              <li className="list-disc list-inside">
                Client projects through OFFSCRIPT (Next.js sites)
              </li>
              <li className="list-disc list-inside">
                Personal systems like Operation Liftoff (a mission-control style
                goal tracker)
              </li>
            </ul>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              I started with PHP + MySQL in a real business environment, then
              moved into modern React/Next.js. Still learning AI tooling —
              deliberately, not as a marketing claim.
            </p>
          </div>
        </section>
      </ScrollFlipImage>
      <section className="min-h-screen   px-8 sm:px-20">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4">
              03 / How I Do It
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold">Tech Stack.</h2>
          </div>
          {/* <h1 className="font-sanscode text-3xl tracking-wide">Tech Stack </h1> */}
          <p>The tools behind my work.</p>
        </div>
      </section>
    </div>
  );
}
