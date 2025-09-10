import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const FlavorTitle = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    const split1 = SplitText.create(".t1", { type: "chars" });
    const split2 = SplitText.create(".t3", { type: "chars" });

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

    gsap.to(".t2", {
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
    <div className="ft-wrapper flex flex-col justify-center items-center !leading-0 h-[100%] lg:pl-[1.5rem] w-[50%]">
      <span className="title t1 w-full text-center overflow-hidden !leading-[7.8rem] !text-[119px]">
        We have 6
      </span>
      <span
        style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
        className="title t2 opacity-0 z-[1] !leading-[7rem] !text-[119px] bg-[var(--color-yellow-brown)] text-[#fce1cd] p-[1rem_1.5rem_2rem_1.5rem] border-[7.5px] backface-hidden rotate-357 border-solid border-[#faeade]"
      >
        freaking
      </span>
      <span className="title t3 w-full text-center overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]">
        delicious flavors
      </span>
    </div>
  );
};

export default FlavorTitle;
