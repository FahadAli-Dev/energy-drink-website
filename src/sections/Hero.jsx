"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(SplitText);

  const tl = gsap.timeline({
    delay: 0.7,
  });

  const ftRef = useRef();
  const stRef = useRef();

  useGSAP(() => {
    const split = SplitText.create(ftRef.current, { type: "chars" });

    tl.from(".hero-content", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    })
      .from(
        split.chars,
        {
          y: 100,
          opacity: 0,
          stagger: 0.03,
          ease: "power4.out",
        },
        ">"
      )
      .from(
        stRef.current,
        {
          clipPath: "inset(0 50% 0 50%)",
          duration: 0.7,
          ease: "power4.out",
        },
        "<"
      );
  });

  return (
    <div className="w-[100%] h-screen relative">
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        controls=""
        className="w-[100%] h-[100%] object-cover"
      ></video>
      <div className="hero-content w-[53%] mx-auto flex flex-col items-center justify-center absolute top-[16%] left-[23.4%]">
        <div>
          <h1 className="title" ref={ftRef}>
            Freaking Delicious
          </h1>
        </div>
        <div
          ref={stRef}
          className="bg-[var(--color-yellow-brown)] w-[96%] mt-[0.3rem] rotate-357 outline-[7px] outline-solid outline-[#faeade]"
        >
          <h1 className="title text-[#fce1cd] pb-[0.8rem] w-[100%] text-center">
            Protein + Caffeine
          </h1>
        </div>
        <p className="des text-center m-[3rem_0rem_4rem_0rem]  w-[52%]">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>
        <div className="btn">Chug a Spylt</div>
      </div>
    </div>
  );
};

export default Hero;
