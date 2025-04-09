"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { WorkSliderBtns } from "./components/WorkSliderBtns";
import type { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Study Quiz App",
    description:
      "A Study Quiz app, where anyone can learn and earn amazing rewards",
    stack: [{ name: "Nextjs" }, { name: "Tailwind" }, { name: "Typescript" }],
    image: "/plearnty.png",
    live: "https://plearnty.unifyedu.ng/",
    github: "/",
  },
  {
    num: "02",
    category: "Blockchain",
    title: "Simoles",
    description:
      "A Decentralized platform that allows users send free messages to friends, a Dapp and Nft Marketplace",
    stack: [{ name: "Solidity" }, { name: "Javascript" }, { name: "Hardhat" }],
    image: "/simole.png",
    live: "https://www.simoles.com/",
    github: "/",
  },
  {
    num: "03",
    category: "Web & MObile",
    title: "Fusion",
    description:
      "A lifestyle for communities, connections , social networking and live updates",
    stack: [
      { name: "React Native" },
      { name: "Redux" },
      { name: "TYpescript" },
    ],
    image: "/fusion.png",
    live: "https://fusion.ng/",
    github: "/",
  },
  {
    num: "04",
    category: "Frontend Ecommerce",
    title: "Healthbanc",
    description:
      "An ecommerce platform with multiple payment modules and easy shopping",
    stack: [{ name: "Nextjs" }, { name: "Redux" }, { name: "TYpescript" }],
    image: "/healthbanc.png",
    live: "https://healthbanc.ng/",
    github: "/",
  },
  {
    num: "05",
    category: "Blockchain",
    title: "Witty",
    description:
      "A Decentralize platform that allows swapping, purchasing tokens, referral earnings and making earnings",
    stack: [{ name: "Hardhat" }, { name: "Solidity" }, { name: "Javascript" }],
    image: "/witty.png",
    live: "https://wittytech.io/",
    github: "/",
  },
  {
    num: "06",
    category: "Frontend Education",
    title: "Verticul",
    description:
      "An app for learning, purchasing course and publishing courses yet earn some rewards",
    stack: [{ name: "Reactjs" }, { name: "Typescript" }, { name: "Apis" }],
    image: "/verticul.png",
    live: "https://goverticul.io/",
    github: "/",
  },
  {
    num: "07",
    category: "Blockchain ",
    title: "Thumbs",
    description: "An NFT platform collection, staking and earning rewards",
    stack: [{ name: "Thirdweb" }, { name: "Nextjs" }, { name: "web3js" }],
    image: "/thumbs.png",
    live: "https://thumbssss.vercel.app/",
    github: "/",
  },
  {
    num: "08",
    category: "Frontend ",
    title: "Bassse3",
    description: "A platform for learning , consultation and social networking",
    stack: [{ name: "Nextjs" }, { name: "Gsap" }, { name: "Javascript" }],
    image: "/base3.png",
    live: "https://bassse3.vercel.app/",
    github: "/",
  },
  {
    num: "09",
    category: "Mobile Development ",
    title: "Flashchange",
    description: "A platform buying, swap and purchasing gift cards",
    stack: [{ name: "ReactNative" }, { name: "Solidity" }, { name: "Api" }],
    image: "/flashchange.png",
    live: "https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dio.flashchange.app&sa=D&source=docs&ust=1742583587171251&usg=AOvVaw1KviIc8jBfygQ900HgH4ER",
    github: "/",
  },
  {
    num: "10",
    category: "Frontend Development ",
    title: "One Drug Store",
    description: "An Ecommerce mainly for your health needs",
    stack: [{ name: "Nextjs" }, { name: "Typescript" }, { name: "Redux" }],
    image: "/onedrugstore.png",
    live: "https://onedrugstore.ng/",
    github: "/",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh]  flex items-center justify-center py-12 px-4 lg:px-42 lg:py-0  "
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] hover:rotate-45 transition-all duration-500 h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5   flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-8 bottom00 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        quality={100}
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent  hover:bg-accent-hover text-black text-primary text-[22px] p-1.5 rounded-full flex justify-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
