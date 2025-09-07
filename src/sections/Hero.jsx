"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".h-wrapper",
        start: "top top",
        scrub: 0.5,
        end: "bottom top",
      },
    });
    tl2
      .to(".h-wrapper", {
        rotate: "10deg",
        y: "42vh",
        width: "82%",
      })
      .to(
        ".hero-content .title",
        {
          fontSize: "6vw",
          height: "15vh",
        },
        "<"
      )
      .to(
        ".hero-content .des",
        {
          width: "27vw",
        },
        "<"
      );
  }, []);

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
    <div className="pb-[-200px] bg-[#222123] overflow-hidden w-[100%] flex justify-center align-center">
      <div className="h-wrapper bg-[var(--color-milk)] w-[100%] h-screen relative overflow-hidden">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          controls=""
          className="w-[100%] h-[100%] object-cover hidden md:block"
        ></video>
        <Image
          src="/images/hero-bg.png"
          alt="img"
          fill
          priority
          className="object-contain scale-[1.8] overflow-hidden max-[330px]:translate-y-[-25%] max-[400px]:translate-y-[-19.8%] max-[580px]:translate-y-[-15%] md:hidden"
        />
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
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </p>
          <div className="btn">Chug a Spylt</div>
        </div>
        <div className="w-[85%] h-[100%] absolute left-1/2 translate-x-[-50%] max-[340px]:top-[29%] max-[440px]:top-[34%] max-[540px]:top-[44%] max-[640px]:top-[50%] sm:top-[65%] md:hidden">
          <Image
            src="/images/hero-img.png"
            alt="img"
            fill
            priority
            sizes="652"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
