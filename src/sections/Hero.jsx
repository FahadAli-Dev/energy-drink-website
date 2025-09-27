"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useEffect(() => {
    const width = window.innerWidth;
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".h-wrapper",
        start: "bottom 99%",
        scrub: 0.5,
        end: "bottom 0%",
      },
    });
    tl2.to(".h-wrapper", {
      ease: "linear",
      rotate: `${width > 768 ? "10deg" : "7deg"}`,
      y: `${width > 768 ? "38vh" : "12vh"}`,
      width: "82%",
    });
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
      <div className="[container-type:inline-size] h-wrapper bg-[var(--color-milk)] w-[100%] h-screen relative overflow-hidden">
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
        <div className="hero-content w-[100%] md:w-[65%] lg:w-[55%] xl:w-[53%] flex flex-col items-center justify-center absolute top-[10.5%] md:top-[25%] xl:top-[18%] 2xl:top-[16%] left-1/2 translate-x-[-50%]">
          <h1
            ref={ftRef}
            className="ht title-secondary flex justify-center items-center"
          >
            Freaking Delicious
          </h1>
          <div
            ref={stRef}
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="bg-[var(--color-yellow-brown)] mt-[1.6vw] md:mt-[0rem] px-[1vw] pb-[1vw] backface-hidden border-[3px] md:border-[7.5px] border-solid border-[#faeade] rotate-358 md:rotate-357"
          >
            <h1 className="ht title-secondary text-[#fce1cd] w-[100%] h-[100%] text-center pr-[0.2rem]">
              Protein + Caffeine
            </h1>
          </div>
          <p className="text-[4.4cqw] min-[384px]:text-[3.5cqw] min-[481px]:text-[2.6cqw] sm:text-[2.2cqw] md:text-[1.4cqw] lg:text-[1.05cqw] leading-[1.2rem] font-proxima text-center m-[1.5rem_0rem_2.5rem_0rem] sm:m-[1.2rem_0rem_2.5rem_0rem] md:m-[1.6rem_0rem_2.1rem_0rem] lg:m-[1.8rem_0rem_2.3rem_0rem] xl:m-[2rem_0rem_2.5rem_0rem] 2xl:m-[2.7rem_0rem_3.5rem_0rem] w-[80%] sm:w-[76%] md:w-[52%]">
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
