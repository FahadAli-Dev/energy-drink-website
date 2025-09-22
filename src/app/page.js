"use client";

import Footer from "@/sections/Footer";
import Navbar from "@/components/Navbar";
import Benefit from "@/sections/Benefit";
import Flavor from "@/sections/Flavor";
import Hero from "@/sections/Hero";
import Message from "@/sections/Message";
import Nutritions from "@/sections/Nutritions";
import Testimonial from "@/sections/Testimonial";
import VideoPin from "@/sections/VideoPin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const Page = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutritions />
          <Benefit />
          <VideoPin />
          <Testimonial />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
