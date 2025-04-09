"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    text: "Years of Experience",
  },
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 5,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

export function Stats() {
  return (
    <div className="w-full flex  flex-wrap items-center justify-center  mb-4">
      <div className="w-full  flex flex-wrap items-center justify-center  sm:flex  gap-6 sm:justify-center">
        {stats.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-4 w-auto   ">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="md:text-6xl text-3xl font-extrabold text-white"
              />
              <p className="leading-snug text-left capitalize text-xs md:text-sm text-white/80 w-24 md:w-32 whitespace-normal block line-clamp-2">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
