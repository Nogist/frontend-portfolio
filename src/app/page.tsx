"use client";
import { Stats } from "@/components/Stats";
import { Header } from "@/components/header/Header";

export default function Home() {
  return (
    <div className="  md:py-20 py-4 md:space-y-20 space-y-4 ">
      <Header />
      <Stats />
    </div>
  );
}
