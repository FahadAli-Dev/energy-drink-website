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
        start: "top -45%",
        end: "top -200%",
        scrub: true,
        pin: true,
      },
    });
    tl.from(".tvCon-0", {
      translateY: "120%",
      left: "50%",
      translateX: "-50%",
    })
      .from(
        ".tvCon-1",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
        },
        ">"
      )
      .from(
        ".tvCon-2",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
        },
        ">"
      )
      .from(
        ".tvCon-3",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
        },
        ">"
      )
      .from(
        ".tvCon-4",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
        },
        ">"
      )
      .from(
        ".tvCon-5",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
        },
        ">"
      )
      .from(
        ".tvCon-6",
        {
          translateY: "120%",
          left: "50%",
          translateX: "-50%",
        },
        ">"
      );

    gsap.to(".th-1", {
      x: 550,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        end: "top -80%",
        scrub: true,
      },
    });

    gsap.to(".th-2", {
      x: 300,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 35%",
        end: "top -130%",
        scrub: true,
      },
    });

    gsap.to(".th-3", {
      x: -650,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top -5%",
        end: "top -110%",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-[-100vh] testimonial-section relative z-[2] pt-[5rem] pb-[1.9rem] w-[100%] h-[150vh] bg-[var(--color-milk)]">
      <div className="font-bold text-[20rem] uppercase leading-[20rem] flex flex-col items-center">
        <h1 className="th-1 text-[var(--color-black)]">What's</h1>
        <h1 className="th-2 text-[var(--color-light-brown)]">Everyone</h1>
        <h1 className="th-3 text-[var(--color-black)]">Talking</h1>
      </div>
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
      <button className="btn absolute bottom-[6%] left-1/2 translate-x-[-50%]">
        Explore all
      </button>
    </section>
  );
};

export default Testimonial;
