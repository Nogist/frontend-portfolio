"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

export function Socials() {
  const socialMap = [
    { icon: <FaGithub />, path: "https://github.com/Nogist" },
    {
      icon: <TiSocialLinkedin />,
      path: "https://www.linkedin.com/in/harnylawrence/",
    },
    { icon: <FaYoutube />, path: "/" },
    { icon: <FaTwitter />, path: "http://x.com/LawrenceBill3" },
  ];

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3, // Delay before starting the first child animation
      },
    },
  };

  // Variants for each social icon
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex gap-3 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialMap.map((social, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
              rotate: { duration: 0.5 },
              scale: { duration: 0.2 },
            },
          }}
        >
          <Link
            href={social.path}
            target="_blank"
            className="relative text-xl block overflow-hidden rounded-full p-2 text-accent border border-accent"
          >
            <motion.div
              className="absolute inset-0 bg-accent rounded-full"
              initial={{ y: "100%" }}
              whileHover={{
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />
            <motion.div
              className="relative z-10"
              whileHover={{
                color: "white",
                transition: { duration: 0.2 },
              }}
            >
              {social.icon}
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
