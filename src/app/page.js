"use client";
import ScrollFlipImage from "@/components/home/ScrollFlipImage";
import FolderPocket from "@/components/ui/FolderPocket";
import RollingIcon from "@/components/ui/RollingIcon";
import RollingTextButton from "@/components/ui/RollingTextButton";
import { FOLDER_PROJECTS } from "@/data/projectsList";
import { TECH_STACK } from "@/data/techStack";
import { Bot, LucideEllipsis } from "lucide-react";
import Image from "next/image";

// D:\CODES\my-portfolio\src\assets\walk.json

export default function Home() {
  const STEP_OFFSETS = ["md:mt-0", "md:mt-16", "md:mt-32"];
  return (
    <div className="">
      <ScrollFlipImage>
        <section className="min-h-screen flex flex-col justify-between ">
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
            <h2 className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4 flex justify-between items-center border-b border-b-gray-200">
              01 / Introduction
              <Image
                src="/OrangeCatPeeping-ezgif.com-crop.gif"
                width={40}
                height={40}
                // className="flex items-center w-10 h-10"
                alt="cat peeping gif"
              />
            </h2>
            <h4 className=" text-3xl tracking-wide font-bold">
              Hi, I'm Muhammad Arham Rehan. <br /> Full-Stack Developer.
            </h4>
            <p className="my-4 text-lg font-light ">
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
              Scroll down if you're curious. Or don't. I'm not your manager.
            </p>
            <RollingTextButton
              icon="ArrowDown"
              className="shadow-md stroke-3 bg-white dark:bg-black text-black dark:text-white py-2 px-3 rounded-lg hover:bg-white hover:text-black"
              btn_text="Show me the work"
            />
          </div>
        </section>
        {/* SECTION 3: Third 100vh (Card slides LEFT, content sits on the RIGHT) */}
        <section className="min-h-screen flex items-center justify-end px-8 sm:px-20">
          <div className="w-full md:w-1/2 space-y-4">
            <h4 className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4 flex justify-between items-center border-b border-b-gray-200 me-8">
              02 / What I Do
              <Image
                src="/OrangeCatPeeping-ezgif.com-crop.gif"
                width={40}
                height={40}
                // className="flex items-center w-10 h-10"
                alt="cat peeping gif"
              />
            </h4>

            <h2 className="text-3xl sm:text-5xl font-bold">
              {/* Turning ideas into interactive products. */}I ship websites
              and break things until they work.
            </h2>
            <h4 className="font-semibold opacity-85">
              {/* I ship websites, internal tools, and personal systems. */}
              Mostly client work + random experiments that somehow become real
              projects.
            </h4>
            <ul className="text-sm sm:text-base opacity-80 leading-relaxed">
              Most of my recent work lives in two places:
              <li className="list-disc list-inside">
                Client websites through OFFSCRIPT (Next.js + Tailwind) and some
                special ingredients
              </li>
              <li className="list-disc list-inside">
                Real business systems with PHP + MySQL (yes, still relevant)
              </li>
              <li className="list-disc list-inside">
                Whatever interactive stuff I feel like building that week
              </li>
            </ul>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              {/* I started with PHP + MySQL in a real business environment, then
              moved into modern React/Next.js. Still learning AI tooling —
              deliberately, not as a marketing claim. */}
              Started in PHP, moved into React/Next.js, currently poking at AI
              tooling without pretending I'm an expert. Honesty &gt; . &lt; .
            </p>
          </div>
        </section>
      </ScrollFlipImage>
      <section className="min-h-screen   px-8 sm:px-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4 flex justify-between items-center border-b border-b-gray-200">
              03 / How I Do It
              <Image
                src="/OrangeCatPeeping-ezgif.com-crop.gif"
                width={40}
                height={40}
                // className="flex items-center w-10 h-10"
                alt="cat peeping gif"
              />
            </h2>
            <h2 className="text-3xl sm:text-5xl font-bold">Tech Stack.</h2>
          </div>
          {/* <h1 className="font-sanscode text-3xl tracking-wide">Tech Stack </h1> */}
          <p>
            {/* The tools behind my work. */}
            The tools I actually use. Not the ones I put on my resume to look
            cool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 my-6">
          {TECH_STACK.map((category, index) => (
            <div
              key={category.title}
              // className={`border-t-2 border-t-black pt-4 ${STEP_OFFSETS[index] || ""}`}
            >
              <div
                className={`relative border-b-2 border-b-black pt-4 ${STEP_OFFSETS[index] || ""}`}
              >
                <img
                  src="/walk.gif"
                  alt="Walking robot"
                  className="absolute -bottom-3 w-14 h-14 animate-walk-across pointer-events-none"
                />
              </div>
              <h3 className="text-2xl font-bold my-2 font-sanscode">
                {category.title}
              </h3>
              <p className="text-sm opacity-60 mb-6">{category.subtitle}</p>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-5 py-6 rounded-md text-sm cursor-zoom-in transition-colors font-sanscode ${
                      skill.highlighted
                        ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                        : "bg-zinc-100 hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-8 sm:px-20 py-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-sanscode text-xl uppercase tracking-widest opacity-60 my-4 flex justify-between items-center border-b border-b-gray-200">
              04 / Selected Work
              <Image
                src="/OrangeCatPeeping-ezgif.com-crop.gif"
                width={40}
                height={40}
                // className="flex items-center w-10 h-10"
                alt="cat peeping gif"
              />
            </h2>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Things I actually shipped.
            </h2>
          </div>
          <p>
            Client work, internship stuff, and experiments. Click a folder if
            you're curious.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOLDER_PROJECTS.map((project) => (
            <FolderPocket key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
