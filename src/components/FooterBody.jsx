import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);
const FooterBody = () => {
  useGSAP(() => {
    const fSplit2 = SplitText.create(".ft-2", { type: "chars" });

    gsap.from(fSplit2.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".fb-wrapper",
        start: "top 38%",
        end: "top 37.9%",
        scrub: 1,
      },
    });

    const video = document.querySelector(".f-video");

    ScrollTrigger.create({
      trigger: ".fb-wrapper",
      start: "top 10%",

      onEnter: () => {
        video.play();
      },
    });

    ScrollTrigger.create({
      trigger: ".fb-wrapper",
      start: "top 100%",

      onLeaveBack: () => {
        video.currentTime = 0;
      },
    });
  });

  return (
    <div className="w-[100%] fb-wrapper h-[132vh] relative overflow-hidden bg-[var(--color-black)]">
      <video
        src="/videos/splash.mp4"
        controls=""
        muted
        className="absolute f-video z-[2] top-[-7%] mix-blend-lighten object-contain"
      />

      <span className="title ft-2 w-[100%] absolute z-[1] top-[16%] text-center overflow-hidden text-[var(--color-milk)] !text-[119px]">
        #chugresponsibly
      </span>

      <div className="flex gap-[1rem] justify-center z-[3] w-[100%] absolute top-[37%]">
        <div className="w-[76.8px] h-[76.8px] bg-[#0000] rounded-[999px] hover:bg-[#ffffff1a] cursor-pointer duration-[0.3s] ease-out flex justify-center items-center border-[1px] border-solid border-[#faeade33]">
          <Image
            src="/images/yt.svg"
            alt="youtube"
            width={30.71}
            height={30.71}
          />
        </div>
        <div className="w-[76.8px] h-[76.8px] bg-[#0000] rounded-[999px] hover:bg-[#ffffff1a] cursor-pointer duration-[0.3s] ease-out flex justify-center items-center border-[1px] border-solid border-[#faeade33]">
          <Image
            src="/images/insta.svg"
            alt="instagram"
            width={30.71}
            height={30.71}
          />
        </div>
        <div className="w-[76.8px] h-[76.8px] bg-[#0000] rounded-[999px] hover:bg-[#ffffff1a] cursor-pointer duration-[0.3s] ease-out flex justify-center items-center border-[1px] border-solid border-[#faeade33]">
          <Image
            src="/images/tiktok.svg"
            alt="ticktock"
            width={30.71}
            height={30.71}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 z-[3] gap-y-[3rem] w-[100%] p-[2rem] absolute bottom-0 des text-[var(--color-milk)]">
        <div className="flex gap-[3.5rem]">
          <span>SPYLT Flavors</span>
          <span className="flex flex-col gap-[0.5rem]">
            <span>Chug Club </span>
            <span>Student Marketing</span>
            <span>Dairy Dealers</span>
          </span>
          <span className="flex flex-col gap-[0.5rem]">
            <span>Company </span>
            <span>Contacts</span>
            <span>Tasty Talk</span>
          </span>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col gap-[3rem] relative">
            <label htmlFor="email" className="pr-[4rem]">
              Get Exclusive Early Access and Stay Informed About Product <br />{" "}
              Updates, Events, and More!
            </label>
            <input
              style={{ wordSpacing: "-3px" }}
              type="email"
              placeholder="Enter your email"
              className="placeholder:text-[#999999] focus:outline-none pb-[20px] border-b-[1.5px] border-solid borderb-[#d9d9d9] focus:border-[#3898ec] text-[2rem] font-bold font-sans"
            />

            <Image
              src="/images/arrow.svg"
              alt="arrow"
              width={40.71}
              height={40.71}
              className="absolute right-[-1.1%] bottom-[11%]"
            />
          </div>
        </div>
        <div className="flex justify-start items-end opacity-[0.5]">
          Copyright © 2025 Spylt - All Rights Reserved
        </div>
        <div className="flex gap-[2rem] justify-end">
          <span className="flex items-end opacity-[0.5]">Privacy Policy</span>
          <span className="flex items-end opacity-[0.5]">Terms of Sеrvice</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
