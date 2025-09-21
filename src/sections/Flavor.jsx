"use client";

import FlavorSlider from "@/components/FlavorSlider";
import FlavorTitle from "@/components/FlavorTitle";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Flavor = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".flavor-section",
      start: "top 0%",
      end: "top -660%",
      pin: true,
    });
  });

  return (
    <section className="flavor-section w-[100%] h-[100vh] relative bg-[var(--color-milk)]">
      <FlavorTitle />
      <FlavorSlider />
      <button className="btn absolute bottom-[4%] left-1/2 translate-x-[-50%]">
        Get it now
      </button>
    </section>
  );
};

export default Flavor;
