"use client";

import FlavorSlider from "@/components/FlavorSlider";
import FlavorTitle from "@/components/FlavorTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Flavor = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap.to(".f-container", {
      translateX: "-400%",
      ease: "linear",
      scrollTrigger: {
        trigger: ".f-wrapper",
        start: "top 0%",
        end: "top -150%",
        scrub: 1,
        // markers: true,
        scroller: "body",
        pin: true,
      },
    });
  });
  return (
    <div className="f-wrapper w-[100%] relative h-screen bg-[var(--color-milk)]">
      <div className="f-container h-[100%] relative">
        <FlavorTitle />
        <FlavorSlider />
      </div>
      <button className="btn absolute bottom-[4%] left-1/2 translate-x-[-50%]">
        Get it now
      </button>
    </div>
  );
};

export default Flavor;
