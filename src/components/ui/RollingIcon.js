"use client";

import { motion } from "framer-motion";

export default function RollingIcon({
  icon: Icon,
  className = "",
  onClick,
  // btn_text,
}) {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.92 }}
      className={` relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* {btn_text && <span>{btn_text}</span>} */}
      <motion.span
        variants={{
          rest: { y: "0%" },
          hover: { y: "-140%" },
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="flex items-center justify-center"
      >
        <Icon className="w-5 h-5" />
      </motion.span>

      <motion.span
        variants={{
          rest: { y: "140%" },
          hover: { y: "0%" },
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Icon className="w-5 h-5" />
      </motion.span>
    </motion.button>
  );
}
