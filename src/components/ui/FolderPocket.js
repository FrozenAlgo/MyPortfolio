"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

const SPRING = { type: "spring", stiffness: 280, damping: 22 };

// Clean, readable animation states for each layer
const docVariants = [
  // Card 1 (Back-Left)
  {
    rest: { y: 8, x: -4, rotate: -6 },
    hover: { y: -22, x: -12, rotate: -10 },
  },
  // Card 2 (Middle-Front)
  {
    rest: { y: 4, x: 0, rotate: -1 },
    hover: { y: -28, x: -2, rotate: -2 },
  },
  // Card 3 (Back-Right)
  {
    rest: { y: 6, x: 4, rotate: 5 },
    hover: { y: -34, x: 10, rotate: 8 },
  },
];

const pocketVariants = {
  rest: { rotateX: 0, y: 0 },
  hover: { rotateX: -16, y: 2 },
};

export default function FolderPocket({ project }) {
  const { title, subtitle, ctaLabel, docs = [] } = project;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="group w-full cursor-pointer select-none"
    >
      {/* FOLDER STAGE (perspective enables the 3D pocket hinge) */}
      <div className="relative w-full pt-12 [perspective:1000px]">
        {/* LAYER 1 (z-0): Back Folder Wall & Top-Left Tab */}
        <div className="absolute inset-x-0 top-16 bottom-0 z-0 rounded-2xl rounded-tl-none bg-stone-200/90 dark:bg-zinc-800/90 border border-stone-300/80 dark:border-zinc-700/80">
          <div className="absolute -top-4 -left-[1px] h-4 w-24 rounded-t-xl bg-stone-200/90 dark:bg-zinc-800/90 border-t border-x border-stone-300/80 dark:border-zinc-700/80" />
        </div>

        {/* LAYER 2 (z-10): 3 Tucked Document Cards (Mapped cleanly!) */}
        <div className="relative z-10 h-36 mx-4">
          {docs.slice(0, 3).map((src, idx) => (
            <motion.div
              key={idx}
              variants={docVariants[idx]}
              transition={SPRING}
              style={{ zIndex: idx === 1 ? 3 : idx + 1 }}
              className={`absolute top-5 w-[72%] p-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-stone-200/90 dark:border-zinc-700/80 shadow-md ${
                idx === 0
                  ? "left-1"
                  : idx === 1
                    ? "left-1/2 -translate-x-1/2"
                    : "right-1"
              }`}
            >
              {/* Tiny document header bar matching the screenshot */}
              <div className="flex items-center gap-1 mb-1 px-0.5 text-zinc-400">
                <FileText className="w-3 h-3 shrink-0" />
                <div className="h-1 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700" />
              </div>

              <img
                src={src}
                alt={`${title} preview ${idx + 1}`}
                className="w-full h-auto rounded-lg object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* LAYER 3 (z-20): Glassmorphic Front Pocket with Top-Left Tab + Fold Shadow */}
        <motion.div
          variants={pocketVariants}
          transition={SPRING}
          style={{ transformOrigin: "bottom center" }}
          className="relative z-20 -mt-12 h-38 sm:h-32 rounded-2xl rounded-tl-none bg-stone-100/10 dark:bg-zinc-900/80 backdrop-blur-md border border-stone-300/80 dark:border-zinc-700/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] p-5 flex items-end justify-between"
        >
          {/* Front Pocket Top-Left Tab with Document Icon (seen in your screenshot!) */}
          <div className="absolute -top-4 -left-[1px] h-4 w-28 rounded-t-xl bg-stone-100/65 dark:bg-zinc-900/95 backdrop-blur-md border border-t border-x border-stone-300/80 dark:border-zinc-700/80 flex items-center pl-4 border-b-0">
            <FileText className="w-3 h-3 text-zinc-400" />
            <span className="text-zinc-400 text-[9px] ms-1">Help yourself</span>
          </div>

          {/* Subtle right-side vertical fold shadow from your screenshot */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-2xl bg-gradient-to-l from-black/[0.06] dark:from-white/[0.04] to-transparent" />

          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight max-w-[72%]">
            {title}
          </h3>

          <span className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 p-2.5 rounded-xl shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </motion.div>
      </div>

      {/* LAYER 4: Subtitle & CTA Row Below Folder */}
      <div className="mt-3.5 flex items-center justify-between text-xs px-1">
        <span className="text-zinc-500 dark:text-zinc-400">{subtitle}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline">
          {ctaLabel}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
