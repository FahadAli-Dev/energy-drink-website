import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
const Benefit = () => {
  useGSAP(() => {
    const splitBt = SplitText.create(".b-split", { type: "words" });
    const splitBt2 = SplitText.create(".b-split2", { type: "words" });
    gsap.from(splitBt.words, {
      y: 5,
      opacity: 0,
      stagger: 0.8,
      ease: "power1.in",
      duration: 2,
      scrollTrigger: {
        trigger: ".b-wrapper",
        start: "top 45%",
        end: "top 44%",
        scrub: 1,
      },
    });

    gsap.to(".bt-1", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "power4.out",
      opacity: 1,
      scrollTrigger: {
        trigger: ".b-wrapper",
        start: "top 50%",
        end: "top 30%",
        scrub: true,
      },
    });

    gsap.to(".bt-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "power4.out",
      opacity: 1,
      scrollTrigger: {
        trigger: ".b-wrapper",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });

    gsap.to(".bt-3", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "power4.out",
      opacity: 1,
      scrollTrigger: {
        trigger: ".b-wrapper",
        start: "top 20%",
        end: "top -20%",
        scrub: true,
      },
    });

    gsap.to(".bt-4", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "power4.out",
      opacity: 1,
      scrollTrigger: {
        trigger: ".b-wrapper",
        start: "top 0%",
        end: "top -50%",
        scrub: true,
      },
    });

    gsap.from(splitBt2.words, {
      y: 5,
      opacity: 0,
      stagger: 0.8,
      ease: "power1.in",
      duration: 2,
      scrollTrigger: {
        trigger: ".b-wrapper",
        start: "top -60%",
        end: "top -61%",
        scrub: 1,
      },
    });
  });

  return (
    <section className="b-wrapper w-[100%] h-[125vh] overflow-visible bg-[var(--color-black)]">
      <div className="b-container flex flex-col justify-center items-center w-[80%] mx-auto">
        <span
          style={{ wordSpacing: "0.3rem" }}
          className="font-proxima b-split text-[1rem] text-center my-[5rem] text-[var(--color-milk)]"
        >
          Unlock the Advantages:,
          <br />
          Explore the Key Benefits of Choosing SPYLT
        </span>
        <span
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="title backface-hidden bt-1 !tracking-tighter opacity-0 !text-[119px] border-[7.6px] border-solid border-[var(--color-black)] px-[3.5rem] pb-[0.8rem] text-center bg-[#c88e64] text-[var(--color-milk)] rotate-[3deg] z-[1]"
        >
          Shelf stable
        </span>
        <span
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="title backface-hidden bt-2 !tracking-tighter opacity-0 !text-[119px] border-[7.6px] border-solid border-[var(--color-black)] px-[3.5rem] pb-[0.8rem] text-center bg-[var(--color-milk)] text-[#2e2d2f] rotate-[-1deg] mt-[-1.3rem]"
        >
          Protein + Caffeine
        </span>
        <span
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="title backface-hidden bt-3 !tracking-tighter opacity-0 !text-[119px] border-[7.6px] border-solid border-[var(--color-black)] px-[3.5rem] pb-[0.8rem] text-center bg-[var(--color-red-brown)] text-[var(--color-milk)] rotate-[1deg] z-[1] mt-[-1.1rem]"
        >
          Infinitely recyclable
        </span>
        <span
          style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="title backface-hidden bt-4 !tracking-tighter opacity-0 !text-[119px] border-[7.6px] border-solid border-[var(--color-black)] px-[3.5rem] pb-[0.8rem] text-center bg-[#fed775] text-[#2e2d2f] rotate-[-5deg] mt-[0.2rem]"
        >
          Lactose free
        </span>
        <span
          style={{ wordSpacing: "0.3rem" }}
          className="font-proxima b-split2 text-[1rem] text-center mt-[3rem] text-[var(--color-milk)]"
        >
          And much more...
        </span>
      </div>
    </section>
  );
};

export default Benefit;
