"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(SplitText);

  const tl = gsap.timeline({
    delay: 0.8,
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
      .to(
        stRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
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
          style={{
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          }}
          ref={stRef}
          className="bg-[var(--color-yellow-brown)] w-[97.5%]   backface-hidden border-[7.5px] mt-[-0.1rem] border-solid border-[#faeade]  rotate-357"
        >
          <h1 className="title text-[#fce1cd] pb-[0.8rem] w-[100%] text-center">
            Protein + Caffeine
          </h1>
        </div>
        <p className="des text-center m-[2.7rem_0rem_3.5rem_0rem]  w-[52%]">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>
        <div className="btn">Chug a Spylt</div>
      </div>
    </div>
  );
};

export default Hero;
