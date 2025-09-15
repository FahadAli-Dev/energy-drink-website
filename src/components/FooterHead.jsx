import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);
const FooterHead = () => {
  useGSAP(() => {
    const fSplit = SplitText.create(".ft-1", { type: "chars" });

    gsap.from(fSplit.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".fh-wrapper",
        start: "top 1%",
        end: "top 0%",
        scrub: 1,
      },
    });

    gsap.to(".ft-reveal", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      stagger: 1,
      translateY: "0rem",
      ease: "power1.inOut",
      opacity: 1,
      scrollTrigger: {
        trigger: ".fh-wrapper",
        start: "top -10%",
        end: "top -12% ",
        scrub: 1,
      },
    });
  });
  return (
    <div className="fh-wrapper w-[100%] h-[135vh] relative">
      <div className="relative w-[100%] h-[30%]">
        <Image
          src="/images/footer-dip.png"
          alt="img"
          fill
          className="object-fill"
        />
      </div>
      <div className="relative w-[100%] h-[70%] mt-[1rem]">
        <Image
          src="/images/footer-img.svg"
          alt="img"
          fill
          className="object-fill"
        />
      </div>
      <div className="fh-content absolute left-[6%] bottom-[9%] flex flex-col">
        <span
          style={{ wordSpacing: "0.8rem" }}
          className="title ft-1 text-center !text-[var(--color-milk)] overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]"
        >
          Right around
        </span>

        <span
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          className="title ft-reveal flex justify-center opacity-0 translate-y-[1rem] !leading-[8rem] !text-[119px] bg-[#e9aa56] text-[var(--color-dark-brown)] w-[87%] pb-[1rem] rotate-[2.5deg]"
        >
          the corner
        </span>
        <span className="des !leading-[1rem] text-[var(--color-milk)] my-[3.5rem]">
          Buy our drinks at your local store or <br /> get them delivered (to
          your door).
        </span>
        <button className="btn text-[var(--color-milk)] !bg-[var(--color-black)]">
          Find in stores
        </button>
      </div>
    </div>
  );
};

export default FooterHead;
