"use client";

import { motion } from "framer-motion";
import { Ellipsis, ArrowRight, Sparkles, ArrowDown } from "lucide-react";

const ICONS = {
  ArrowDown: ArrowDown,
  Ellipsis: Ellipsis,
  ArrowRight: ArrowRight,
  Sparkles: Sparkles,
};
export default function RollingTextButton({
  icon,
  btn_text,
  className = "",
  onClick,
}) {
  const Icon = typeof icon === "string" ? ICONS[icon] : icon;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.92 }}
      className={`relative overflow-hidden inline-flex items-center justify-center cursor-pointer ${className}`}
    >
      {/* Layer 1: Slides up and out */}
      <motion.span
        variants={{
          rest: { y: "0%" },
          hover: { y: "-140%" },
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="flex items-center justify-center gap-2"
      >
        {btn_text && <span>{btn_text}</span>}
        {Icon && <Icon className="w-5 h-5" />}
      </motion.span>

      {/* Layer 2: Slides up from bottom into center */}
      <motion.span
        variants={{
          rest: { y: "140%" },
          hover: { y: "0%" },
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="absolute inset-0 flex items-center justify-center gap-2"
      >
        {btn_text && <span>{btn_text}</span>}
        {Icon && <Icon className="w-5 h-5" />}
      </motion.span>
    </motion.button>
  );
}
