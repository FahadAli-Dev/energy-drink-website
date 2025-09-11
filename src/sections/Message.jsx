"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const Message = () => {
  const tl = gsap.timeline();
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const split = SplitText.create(textRef.current, { type: "words" });
    const split2 = SplitText.create(textRef2.current, { type: "words" });
    const split3 = SplitText.create(".desSplit", { type: "words" });

    tl.from(split.words, {
      stagger: 1,
      opacity: 0.3,
      scrollTrigger: {
        trigger: ".m-wrapper",
        start: "top 60%",
        end: "30% 70%",
        scrub: true,
      },
    })
      .to(
        ".box",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power1.in",
          opacity: 1,
          scrollTrigger: {
            trigger: ".m-wrapper",
            start: "top 28%",
            end: "top 29% ",
            scrub: 0.5,
          },
        },
        ">"
      )
      .from(
        split2.words,
        {
          opacity: 0.3,
          stagger: 1,
          scrollTrigger: {
            trigger: ".m-wrapper",
            start: "60% 90%",
            end: "95% bottom",
            scrub: true,
          },
        },
        ">"
      )
      .from(
        split3.words,
        {
          y: 5,
          opacity: 0,
          stagger: 0.8,
          ease: "power1.in",
          duration: 2,
          scrollTrigger: {
            trigger: ".m-wrapper",
            start: "30% top",
            end: "31% top",
            scrub: 1,
          },
        },
        ">"
      );
  }, []);
  return (
    <div className="bg-[#7f3b2d] text-[var(--color-milk)] m-wrapper w-full h-[130vh] pt-[6rem]">
      <div className="relative mx-auto m-contant flex flex-col justify-center items-center gap-[5.5rem] w-[65%] text-center">
        <span ref={textRef} className="title !leading-[7.8rem]">
          Stir up your <br /> fearless past and
        </span>
        <span
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="box z-[1] opacity-0 title !text-[119px] rotate-3 backface-hidden left-1/2 translate-x-[-46%] top-1/2 translate-y-[-80%] absolute text-[#7f3b2d] bg-[var(--color-light-brown)] w-[20.5rem] pb-[1.2rem] !leading-[7.5rem] border-[7.5px] border-solid border-[#7f3b2d] p-[0.5rem_0.2rem] h-[9rem]"
        >
          FUEL UP
        </span>
        <span ref={textRef2} className="title !leading-[7.8rem]">
          your future with every gulp of Perfect Protein
        </span>
        <span
          style={{ wordSpacing: "0.3rem" }}
          className="des desSplit w-[40%] !leading-[1.5rem] mt-[-1.5rem]"
        >
          Rev up your rebel spirit and feed the adventure of life with SPYLT,
          where you’re one chug away from epic nostalgia and fearless fun.
        </span>
      </div>
    </div>
  );
};

export default Message;
