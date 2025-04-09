"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Stairs() {
  const [stairCount, setStairCount] = useState(6);

  useEffect(() => {
    const updateStairCount = () => {
      setStairCount(window.innerWidth < 768 ? 4 : 6); // 4 for mobile (<768px), 6 otherwise
    };

    updateStairCount(); // Set initial value
    window.addEventListener("resize", updateStairCount);

    return () => window.removeEventListener("resize", updateStairCount);
  }, []);

  const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };

  const reverseIndex = (index: number) => stairCount - index - 1;

  return (
    <>
      {[...Array(stairCount)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}
