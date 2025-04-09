"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export function DownloadButton() {
  // Animation variants for the button
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.button className="relative flex items-center gap-2 rounded-full border cursor-pointer border-accent py-2.5 px-8 text-accent overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-accent"
          initial={{ x: "-100%" }}
          whileHover={{
            x: 0,
            transition: { duration: 0.3 },
          }}
          // This is the key fix - explicit transition for returning to initial state
          transition={{
            duration: 0.2, // Faster return to initial state
            ease: "easeOut",
          }}
        />
        <span className="relative z-10 flex items-center gap-2 group">
          <motion.span
            initial={{ color: "" }}
            whileHover={{
              color: "white",
              transition: { duration: 0.2 },
            }}
            // Faster transition back to original color
            transition={{ duration: 0.1 }}
          >
            Download CV
          </motion.span>
          <motion.span
            initial={{ color: "" }}
            whileHover={{
              color: "white",
              rotate: [0, 10, 0],
              y: [0, -3, 0],
              transition: {
                color: { duration: 0.2 },
                rotate: { duration: 0.5 },
                y: { duration: 0.5 },
              },
            }}
            // Faster transition back to original state
            transition={{ duration: 0.1 }}
          >
            <Download />
          </motion.span>
        </span>
      </motion.button>
    </motion.div>
  );
}
