"use client";

import Navbar from "@/components/Navbar";
import Flavor from "@/sections/Flavor";
import Hero from "@/sections/Hero";
import Message from "@/sections/Message";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const Page = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    return () => smoother.kill();
  }, []);
  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
        </div>
      </div>
    </>
  );
};

export default Page;
