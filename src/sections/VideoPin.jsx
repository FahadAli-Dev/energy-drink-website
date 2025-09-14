import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const VideoPin = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".revealVideo", {
      marginTop: "0rem",
      scrollTrigger: {
        trigger: ".v-wrapper",
        start: "top 50%",
        end: "top 0%",
        scrub: true,
      },
    })
      .to(".revealVideo", {
        clipPath: "circle(70.7% at 50% 50%)",
        scrollTrigger: {
          trigger: ".v-wrapper",
          start: "top 30%",
          end: "top -200%",
          scrub: true,
        },
      })

      .to(".revealVideo", {
        scrollTrigger: {
          trigger: ".v-wrapper",
          start: "top 0%",
          end: "top -200%",
          scrub: true,
          pin: true,
        },
      });

    gsap.to(".rotating-img", {
      rotate: 360,
      ease: "linear",
      duration: 20,
      repeat: "-1",
    });
  }, []);
  return (
    <section className="v-wrapper w-[100%] h-[100vh] translate-y-[-100rem] bg-[var(--color-black)]">
      <div
        style={{
          clipPath: "circle(6.4% at 50% 50%)",
        }}
        className="absolute rounded-[999px] mt-[-18rem] revealVideo w-[100%] h-[100%] bg-[var(--color-black)]"
      >
        <video
          src="/videos/pin-video.mp4"
          className="w-[100%] h-[100%] object-cover"
          autoPlay
          loop
          muted
          controls=""
        ></video>
        <div className="w-[8.7rem] h-[8.7rem] flex justify-center items-center rounded-full backdrop-blur-lg absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
          <Image
            className="ml-[0.5rem] w-[46px] h-[46px]"
            src="/images/play.svg"
            alt="play"
            width="46"
            height="46"
          />
        </div>
        <Image
          src="/images/circle-text.svg"
          alt="img"
          width="230"
          height="230"
          className="rotating-img absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"
        />
      </div>
    </section>
  );
};

export default VideoPin;
