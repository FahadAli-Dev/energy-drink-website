import { NutritionsData } from "@/utils/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Nutritions = () => {
  useGSAP(() => {
    const splitNt = SplitText.create(".nt-1", { type: "chars" });
    const splitNt2 = SplitText.create(".nt-des", { type: "words" });

    gsap.from(splitNt.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".nt-wrapper",
        start: "top 16%",
        end: "top 15%",
        scrub: 1,
      },
    });

    gsap.to(".nt-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      stagger: 1,
      ease: "power1.inOut",
      opacity: 1,
      scrollTrigger: {
        trigger: ".nt-wrapper",
        start: "top 3%",
        end: "top 5% ",
        scrub: 1,
      },
    });

    gsap.from(splitNt2.words, {
      y: 5,
      opacity: 0,
      stagger: 0.8,
      ease: "power1.in",
      duration: 2,
      scrollTrigger: {
        trigger: ".nt-wrapper",
        start: "top 16%",
        end: "top 15%",
        scrub: 1,
      },
    });
  });
  return (
    <section className="nt-wrapper w-[100%] h-[120vh] relative bg-[#dfd0b6]">
      <div className="relative w-[100%] h-[30%]">
        <Image
          src="/images/slider-dip.png"
          alt="img"
          fill
          className="object-fill"
        />
      </div>
      <div className="w-[100%] h-[90%] absolute bottom-0">
        <Image
          src="/images/big-img.png"
          alt="img"
          fill
          className="object-fillw"
        />
      </div>
      <div className="flex overflow-hidden p-[1rem] flex-col absolute top-[38%] left-[2rem]">
        <span
          style={{ wordSpacing: "0.8rem" }}
          className="title p-[0.4rem] nt-1 text-center overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]"
        >
          It still does
        </span>

        <span
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          className="title flex justify-center opacity-0 nt-2 mt-[-1.3rem] !leading-[7rem] !text-[119px] bg-[var(--color-yellow-brown)] text-[#e2d4bc] p-[1rem_0rem_2rem_0rem] border-[7.5px] backface-hidden rotate-357 border-solid border-[#faeade]"
        >
          Body good
        </span>
      </div>

      <span
        style={{ wordSpacing: "0.3rem" }}
        className="absolute nt-des right-[2rem] top-[36%] !leading-[1.4rem] des w-[20rem] text-right"
      >
        Milk contains a wide array of
        <br /> nutrients, including vitamins, minerals,
        <br /> and protein, and this is lactose free
      </span>
      <div className="absolute flex p-[1.9rem_4.1rem] bottom-[6%] left-1/2 translate-x-[-50%] w-[70%]  bg-[#fdebd2] border-[0.5rem] border-solid border-[#e8ddca] rounded-[999px]">
        {NutritionsData.map((e, i) => {
          if (i % 2 == 0) {
            return (
              <div key={i} className="flex text-[#865720] flex-1 flex-col">
                <span className="text-[1rem] font-proxima mb-[0.5rem]">
                  {e.label}
                </span>
                <span className="text-[11.5px] font-proxima">up to</span>
                <span className="text-[1.8rem] font-bold mt-[-0.4rem]">
                  {e.amount}
                </span>
              </div>
            );
          } else {
            return (
              <div key={i} className="flex-1 relative">
                <div className="w-[1px] bg-[#c28c42] h-[100%] absolute left-[30%]" />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Nutritions;
