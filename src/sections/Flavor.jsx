"use client";

import { FlavorData } from "@/utils/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

const Flavor = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const clipRef = useRef(null);

  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const split1 = SplitText.create(textRef1.current, { type: "chars" });
    const split2 = SplitText.create(textRef2.current, { type: "chars" });

    gsap.from(split1.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".f-wrapper",
        start: "top 40%",
        end: "top 39%",
        scrub: 1,
      },
    });

    gsap.to(clipRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
      opacity: 1,
      scrollTrigger: {
        trigger: ".f-wrapper",
        start: "top 20%",
        end: "top 19%",
        scrub: 1,
      },
    });

    gsap.from(split2.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".f-wrapper",
        start: "top 5%",
        end: "top 4.5%",
        scrub: 1,
      },
    });
  });
  return (
    <div className="f-wrapper w-[100%] h-screen bg-[var(--color-milk)]">
      <div className="f-content flex h-[100%] relative">
        <div className="f-left flex-1 flex flex-col justify-center items-center !leading-0 h-[100%]">
          <span
            ref={textRef1}
            className="title w-full text-center overflow-hidden !leading-[7.8rem] !text-[119px]"
          >
            We have 6
          </span>
          <span
            ref={clipRef}
            style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
            className="title opacity-0 z-[1] !leading-[7rem] !text-[119px] bg-[var(--color-yellow-brown)] text-[#fce1cd] p-[1rem_1.5rem_2rem_1.5rem] border-[7.5px] backface-hidden rotate-357 border-solid border-[#faeade]"
          >
            freaking
          </span>
          <span
            ref={textRef2}
            className="title w-full text-center overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]"
          >
            delicious flavors
          </span>
        </div>
        <div className="flex-1">
          {/* {FlavorData.map((e, i) => {
            return (
              <div key={i}>
                <Image src={e.bgImg} alt="img" fill />
              </div>
            );
          })} */}
          <div className="w-full h-full relative">
            <Image src="/images/blue-bg.svg" alt="img" fill />
            <Image src="/images/blue-drink.webp" alt="img" fill />
          </div>
        </div>
      </div>
      <div className="fabsolute bottom-[1.2%] flex justify-center w-[100%]">
        <button className="btn">Get it now</button>
      </div>
    </div>
  );
};

export default Flavor;
