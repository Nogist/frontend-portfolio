"use client";

import { motion, Variants } from "framer-motion";
import { Photo } from "./component/Photo";
import { Socials } from "./component/Socials";
import { DownloadButton } from "./component/DownloadButton";

export function Header() {
  // Animation variants for text elements with correct typing
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className="w-full flex md:flex-row flex-col items-start justify-center md:justify-between lg:py-10 py-4 md:px-8 px-4">
      <motion.div
        className="order-2 lg:order-none w-full flex flex-col items-center lg: lg:items-start lg:max-w-[500px]"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p
          className="text-base text-white/80"
          custom={0}
          variants={textVariants}
        >
          Software Developer
        </motion.p>
        <motion.div
          className="pt-4 pb-6 flex flex-col gap-2 lg:text-6xl text-4xl font-bold"
          custom={1}
          variants={textVariants}
        >
          <h1 className="text-center lg:text-left text-white/80">{`Hello I'm `}</h1>
          <h1 className="text-accent">Bill Lawrence</h1>
        </motion.div>
        <motion.p
          className="text-base text-center lg:text-left text-white/80"
          custom={2}
          variants={textVariants}
        >
          {`I excel at crafting digital experience and I am proficient in various programming languages and technologies`}
        </motion.p>

        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-4 my-4 cursor-pointer py-4">
          <DownloadButton />
          <Socials />
        </div>
      </motion.div>

      <motion.div
        className="order-1 lg:order-none mb-8 lg:mb-0 w-full justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        }}
      >
        <Photo />
      </motion.div>
    </div>
  );
}
