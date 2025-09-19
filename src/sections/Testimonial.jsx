import { testimonialData } from "@/utils/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 0%",
        end: "top -200%",
        scrub: true,
        pin: true,
      },
    });

    gsap.to(".th-1", {
      translateX: 240,
      ease: "linear",
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        end: "top 0%",
        scrub: true,
      },
    });

    gsap.to(".th-2", {
      translateX: 100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 35%",
        end: "top 0%",
        scrub: true,
      },
    });

    tl.to(".th-1", {
      marginLeft: "30rem",
      translateY: -600,
      ease: "linear",
      duration: 3.5,
    })
      .to(
        ".th-2",
        {
          marginLeft: "10.5rem",
          translateY: -600,
          ease: "linear",
          duration: 3.5,
        },
        "<"
      )

      .from(
        ".th-3",
        {
          translateY: "100%",
          left: "50%",
          translateX: "-50%",
          duration: 3.5,
          ease: "linear",
        },
        "<"
      )

      .from(
        ".tvCon-0 ,.tvCon-1 ,.tvCon-2 ,.tvCon-3 ,.tvCon-4 ,.tvCon-5 ,.tvCon-6",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
          stagger: 0.5,
        },
        "<"
      );
  });
  return (
    <section className="mt-[-100vh] testimonial-section relative z-[2] w-[100%] h-[100vh] bg-[var(--color-milk)]">
      <h1 className="th-1 left-1/2 translate-x-[-50%] top-[10%] text-[var(--color-black)] absolute font-bold text-[20rem] uppercase leading-[20rem]">
        What's
      </h1>
      <h1 className="th-2 left-1/2 translate-x-[-50%] bottom-[1%] text-[var(--color-light-brown)] absolute font-bold text-[20rem] uppercase leading-[20rem]">
        Everyone
      </h1>
      <h1 className="th-3 bottom-[1%] left-[-22%] text-[var(--color-black)] absolute font-bold text-[20rem] uppercase leading-[20rem]">
        Talking
      </h1>
      <div className="flex w-[90%] h-[640px] left-1/2 translate-x-[-50%] absolute bottom-[10%]">
        {testimonialData.map((e, i) => {
          return (
            <div
              key={i}
              className={`tvCon-${i} flex-1 h-[643px] absolute bottom-0 w-[331px] border-[6px] border-solid cursor-pointer border-[var(--color-milk)] rounded-[1.9rem] overflow-hidden`}
              style={{
                zIndex: `${i + 1}`,
                left: `${i * 13}%`,
                rotate: `${i % 2 == 0 ? "-5deg" : "5deg"}`,
              }}
            >
              <video
                src={e.video}
                muted
                controls=""
                className="object-cover h-[100%]"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              ></video>
              <div className="flex gap-[0.3rem] absolute left-[5%] items-center bottom-[5%]">
                <Image
                  src={e.profileIcon}
                  alt="profile"
                  width={32.72}
                  height={32.72}
                />
                <span className="text-[15.36px] font-[500] text-[var(--color-milk)]">
                  {e.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn absolute bottom-[4%] left-1/2 translate-x-[-50%]">
        Explore all
      </button>
    </section>
  );
};

export default Testimonial;
