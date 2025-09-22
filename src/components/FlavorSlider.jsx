import Image from "next/image";
import { FlavorData } from "@/utils/data";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FlavorSlider = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = gsap.utils.toArray(".magnet");
    let r;
    elements.forEach((el) => {
      const handleMove = (e) => {
        r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - (r.left + r.width / 2)) / 15,
          y: -r.height * 0.12 + (e.clientY - (r.top + r.height / 2)) / 20,
          duration: 0.3,
        });
      };

      const handleLeave = () => {
        r = el.getBoundingClientRect();
        gsap.to(el, { x: 0, y: -r.height * 0.12, duration: 0.5 });
      };
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  useGSAP(() => {
    gsap.to(
      ".flavor-0, .flavor-1, .flavor-2, .flavor-3, .flavor-4, .flavor-5",
      {
        translateX: "-900%",
        stagger: 0.001,
        ease: "linear",
        scrollTrigger: {
          trigger: ".fs-wrapper",
          start: "top 0%",
          end: "top -660%",
          scrub: true,
        },
      }
    );
  });
  return (
    <>
      <div className="fs-wrapper absolute translate-x-[87%] right-0 bottom-[0] flex gap-[15rem] w-[370%] h-[100%]">
        {FlavorData.map((e, i) => {
          return (
            <div
              key={i}
              className={`flavor-${i} w-[100%] h-[100%] relative top-[50%] translate-y-[-57%] translate-x-[5rem] ${
                i % 2 == 0 ? "rotate-[-8deg]" : "rotate-[8deg]"
              }`}
            >
              <Image
                src={e.bgImg}
                alt="img-bg"
                fill
                className="object-contain"
              />
              <div className="z-[50] w-[55%] h-[80%] absolute top-1/2 translate-y-[-57.8%] left-1/2 translate-x-[-50%]">
                <Image
                  src={e.bottleImg}
                  alt="img-drink"
                  fill
                  className="object-fill"
                />
              </div>
              <Image
                src={e.cokolateChipImg}
                alt="img-elements"
                fill
                className="magnet translate-y-[-12%] object-contain"
              />
              <span className="absolute bottom-[20%] left-[4%] text-[var(--color-milk)] text-[3rem] uppercase font-[700]">
                {e.FlavorName}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlavorSlider;
