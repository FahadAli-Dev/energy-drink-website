"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(SplitText);

  const tl = gsap.timeline({
    delay: 0.6,
  });

  const ftRef = useRef();
  const stRef = useRef();

  useGSAP(() => {
    const split = SplitText.create(ftRef.current, { type: "chars" });
    split.chars.forEach((e) => {
      e.style.display = "flex";
    });

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
        className="w-[100%] h-[100%] object-cover hidden md:block"
      ></video>
      <div className="hero-content w-[100%] md:w-[65%] lg:w-[55%] xl:w-[53%] flex flex-col items-center justify-center absolute top-[10.5%] md:top-[25%] xl:top-[18%] 2xl:top-[16%] md:left-[17%] lg:left-[23.4%]">
        <div className="h-[auto]">
          <h1 className="title flex justify-center items-center" ref={ftRef}>
            Freaking Delicious
          </h1>
        </div>
        <div
          style={{
            clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          }}
          ref={stRef}
          className="flex justify-center items-center max-[401px]:pb-[0.3rem] pb-[0.6rem] sm:pb-[0rem] sm:py-[0.5rem] 2xl:py-[0rem] bg-[var(--color-yellow-brown)] 2xl:w-[97.5%] backface-hidden max-[401px]:mt-[0.4rem] max-[540px]:mt-[1rem] max-[640px]:mt-[1.2rem] sm:mt-[0.8rem] md:mt-[-0.4rem] lg:mt-[-0.3rem] xl:mt-[-0.8rem] 2xl:mt-[-0.1rem] border-[3px] sm:border-[7.5px] border-solid border-[#faeade]  rotate-357"
        >
          <h1 className="title flex justify-center items-center text-[#fce1cd] sm:pb-[1.2rem] 2xl:pb-[1rem] px-[0.3rem] sm:px-[1rem] 2xl:px-[0rem] w-[100%] text-center">
            Protein + Caffeine
          </h1>
        </div>
        <p className="des text-center m-[1.5rem_0rem_2.5rem_0rem] sm:m-[1.2rem_0rem_2.5rem_0rem] md:m-[1.6rem_0rem_2.1rem_0rem] lg:m-[1.8rem_0rem_2.3rem_0rem] xl:m-[2rem_0rem_2.5rem_0rem] 2xl:m-[2.7rem_0rem_3.5rem_0rem] w-[80%] sm:w-[76%] md:w-[52%]">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>
        <div className="btn">Chug a Spylt</div>
      </div>
    </div>
  );
};

export default Hero;
