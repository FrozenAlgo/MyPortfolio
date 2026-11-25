import ScrollFlipImage from "@/components/home/ScrollFlipImage";
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
            <h2 className="font-sanscode text-2xl uppercase tracking-widest opacity-60">
              01 / Introduction
            </h2>
            <p className="mt-3 text-2xl font-semibold">
              Crafting fast, playful software with modern web &amp; AI stacks.
            </p>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-sm opacity-75">
              Scroll further to explore interactive projects, puzzles, and my AI
              assistant.
            </p>
          </div>
        </section>
        {/* SECTION 3: Third 100vh (Card slides LEFT, content sits on the RIGHT) */}
        <section className="min-h-screen flex items-center justify-end px-8 sm:px-20">
          <div className="w-full md:w-1/2 space-y-4">
            <span className="font-sanscode text-xs uppercase tracking-widest opacity-60">
              02 / What I Do
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Turning ideas into interactive products.
            </h2>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Your right-side content goes here—tech stack highlights,
              experience summary, or interactive badges aligned beside the card
              on the left.
            </p>
          </div>
        </section>
      </ScrollFlipImage>
    </div>
  );
}
