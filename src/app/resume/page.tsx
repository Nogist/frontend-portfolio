"use client";

import {
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGithub,
  FaPython,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { SiSolidity, SiTypescript } from "react-icons/si";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

const about = {
  title: "About me",
  description:
    "I’m a Frontend Developer with 4+ years of experience building high-performance web applications using React, Next.js, and TypeScript. I also specialize in smart contract development with Solidity and Web3, bridging the gap between Web2 and Web3 technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bill Lawrence",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 902 769 8566",
    },

    {
      fieldName: "Experience",
      fieldValue: "5+ Years of Experience",
    },
    {
      fieldName: "Email",
      fieldValue: "Lawrence.bill.520@gmail.com",
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  icon: FaReact,
  title: "Experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Sterling Bank",
      position: "Frontend Developer",
      duration: "2023- Present",
    },
    {
      company: "Witty Engineering",
      position: "Smart Contract Developer",
      duration: "2024-2025",
    },
    {
      company: "BitSaac",
      position: "Blockchain Developer",
      duration: "2022-2024",
    },
    {
      company: "Pade",
      position: "Frontend Developer",
      duration: "2023-2023",
    },
    {
      company: "Nimbus Media Limited",
      position: "FullStack Developer Intern",
      duration: "2022-2023",
    },
    {
      company: "HNG Hackathon Internship",
      position: "Frontend Developer",
      duration: "2021- 2021",
    },
  ],
};

const education = {
  icon: FaReact,
  title: "My Education",
  description: "My academic and technical background in software development.",
  items: [
    {
      institution: "Harvard Online University",
      degree: "CS50",
      duration: "2024",
    },
    {
      institution: "Yaba College of Technology",
      degree: "Higher National Diploma (HND)",
      duration: "2022-2024",
    },
    {
      institution: "Yaba College of Technology",
      degree: "Ordinary National Diploma (OND)",
      duration: "2019-2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "A collection of technologies and tools I work with.",
  skilllist: [
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiSolidity />,
      name: "Solidity",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },

    {
      icon: <FaGithub />,
      name: "Github",
    },
    { icon: <VscAzureDevops />, name: "Azure " },
    {
      icon: <FaPython />,
      name: "Python",
    },

    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap    ",
    },
  ],
};

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3, // Delay between each child animation
//       delayChildren: 2.4, // Starts after the initial page fade-in
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
//   show: {
//     opacity: 1,
//     x: 0, // Move to normal position
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

export default function Resume() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleOpen = (index: number) => {
    if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
    setActiveTooltip(index);
  };

  const handleClose = () => {
    // Add a small delay before closing for better user experience
    const id = setTimeout(() => setActiveTooltip(null), 200);
    setTimeoutId(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen  flex items-center justify-center py-12 px-4 lg:px-42 lg:py-0  "
    >
      <div className="w-full flex-1 h-full flex items-center justify-center">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px] w-full"
        >
          <TabsList className="flex flex-col w-full cursor-pointer max-w-[380px] mx-auto lg:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent "></span>
                          <p className=" text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent "></span>
                          <p className=" text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                  {skills.skilllist.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={200}>
                        <Tooltip open={activeTooltip === index}>
                          <TooltipTrigger
                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                            onClick={() => handleOpen(index)}
                            onMouseEnter={() => handleOpen(index)}
                            onMouseLeave={handleClose}
                          >
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left "
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-left">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((about, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center lg:justify-start gap-4"
                    >
                      <span className="text-white/60">{about.fieldName}</span>
                      <span className="md:text-xl text-sm">
                        {about.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
