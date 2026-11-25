"use client";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

export default function ScrollFlipImage({ children }) {
  const trackRef = useRef(null);
  const [showThirdFace, setShowThirdFace] = useState(false);
  // Tracks scroll across the 300vh container (from top of hero to bottom of section 2)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
  });

  // 1. Flip 0deg (Face 1) -> 180deg (Face 2) -> 360deg (Face 3)
  const rotateY = useTransform(
    smooth,
    [0.08, 0.42, 0.58, 0.92],
    [0, 180, 180, 360],
  );

  // Stays centered at [0, 0.58], then slides diagonally LEFT (-26vw) and DOWN (+90px) from 0.58 -> 0.92
  const x = useTransform(smooth, [0, 0.58, 0.92], ["0vw", "0vw", "-26vw"]);
  const y = useTransform(smooth, [0, 0.42, 0.58, 0.92], [120, 0, 0, 90]);
  const scale = useTransform(smooth, [0, 0.5, 1], [1, 1.08, 1.05]);

  // Swap front face from Photo (Face 1) to Card 3 once rotated past 270deg
  useMotionValueEvent(rotateY, "change", (latest) => {
    setShowThirdFace(latest > 270);
  });
  return (
    <div ref={trackRef} className="relative h-[300vh]">
      {/* Sticky viewport layer that carries the flipping image across both sections */}
      <div className="sticky top-0 h-screen pointer-events-none flex items-center justify-center [perspective:1200px] ">
        <motion.div
          style={{ rotateY, x, y, scale }}
          className="relative w-56 h-72 sm:w-64 sm:h-80 [transform-style:preserve-3d]"
        >
          {/* FRONT: Your portrait starting under < SOFTWARE ENGINEER /> */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl [backface-visibility:hidden]">
            {!showThirdFace ? (
              <Image
                src="/images/Dummy.png"
                fill
                className="object-cover"
                alt="Arham picture"
                priority
              />
            ) : (
              /* FACE 3: Shown on the LEFT in Section 3 */
              <div className="w-full h-full border border-zinc-200 dark:border-zinc-800 bg-emerald-950 text-emerald-100 p-6 flex flex-col justify-between">
                <span className="font-sanscode text-xs uppercase tracking-widest text-emerald-400">
                  // Core Stack
                </span>
                <div>
                  <h3 className="font-bitcount text-2xl uppercase">
                    Full-Stack &amp; AI
                  </h3>
                  <p className="text-xs mt-2 opacity-80 leading-relaxed">
                    Next.js, Python, FastAPI, RAG pipelines &amp; interactive
                    UI.
                  </p>
                </div>
                <span className="font-sanscode text-xs text-emerald-400">
                  02 / Skills
                </span>
              </div>
            )}
          </div>

          {/* BACK: Revealed once flipped into the second section */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <span className="font-sanscode text-xs uppercase tracking-widest opacity-60">
              // About Me
            </span>
            <div>
              <h3 className="font-bitcount text-2xl uppercase">Arham</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">
                Building interactive AI &amp; full-stack web experiences.
              </p>
            </div>
            <span className="font-sanscode text-xs">@2026</span>
          </div>
        </motion.div>
      </div>

      {/* Background sections (Hero + Second Section) passed as children */}
      <div className="absolute inset-0 flex flex-col">{children}</div>
    </div>
  );
}
