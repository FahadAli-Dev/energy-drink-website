"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { menuData } from "@/utils/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [active, setActive] = useState("/images/menu-img7.png");
  const [rotate, setRotate] = useState(false);
  const [hovered, setHovered] = useState(null);
  gsap.registerPlugin(CustomEase);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = gsap.utils.toArray(".magnetic");

    elements.forEach((el) => {
      const handleMove = (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - (r.left + r.width / 2)) / 1.6,
          y: (e.clientY - (r.top + r.height / 2)) / 1.6,
          duration: 0.3,
          scale: 1.1,
          opacity: 0.8,
        });
      };

      const handleLeave = () =>
        gsap.to(el, { x: 0, y: 0, duration: 0.5, scale: 1, opacity: 1 });

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  const toggleMenu = () => {
    setRotate(!rotate);
    const tl = gsap.timeline();
    if (menuOpen) {
      tl.to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: CustomEase.create("cusEase", "M0,0,C1,0 0.439,0.766,1,1"),
      })
        .to(
          ".dash",
          {
            width: "25px",
            duration: 0.1,
          },
          "<"
        )
        .to(
          ".menu-bars",
          {
            backgroundColor: "#fef3f0",
            borderRadius: "999px",
            duration: 0.1,
            ease: "power1.in",
          },
          "<"
        )
        .to(
          ".menu-bars",
          {
            gap: "0rem",
            duration: 0.1,
            delay: "0.2",
          },
          "<"
        )
        .to(
          ".dash-1",
          {
            rotate: "45deg",
            y: "2px",
            duration: 0.2,
            ease: "power1.in",
            delay: 0.2,
          },
          "<"
        )
        .to(
          ".dash-2",
          {
            rotate: "-45deg",
            duration: 0.2,
            ease: "power1.in",
          },
          "<"
        )
        .to(
          ".m-item",
          {
            opacity: 1,
            duration: 1.5,
            ease: "slow",
          },
          "-=0.8"
        );
    } else {
      tl.to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "expo.inOut",
      })
        .to(
          ".m-item",
          {
            opacity: 0,
            duration: 1.5,
            ease: "slow",
          },
          "<"
        )
        .to(
          ".dash-1",
          {
            rotate: "0deg",
            y: "0px",
            duration: 0.2,
            ease: "power1.in",
          },
          "<"
        )
        .to(
          ".dash-2",
          {
            rotate: "0deg",
            duration: 0.2,
            ease: "power1.in",
          },
          "<"
        )

        .to(
          ".menu-bars",
          {
            gap: "0.5rem",
            backgroundColor: "",
            borderRadius: "0px",
            duration: 0.3,
            delay: 0.2,
            ease: "power1.in",
          },
          "<"
        )
        .to(
          ".dash",
          {
            width: "46px",
            duration: 0.3,
            delay: 0.2,
            ease: "power1.in",
          },
          "<"
        );
    }

    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    gsap.fromTo(
      ".menu-img",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" }
    );
  }, [active]);

  return (
    <div>
      <nav className="z-50 p-[0.5rem] sm:p-[1rem_0.8rem] md:p-[1.4rem_1rem] lg:p-[0rem_1.5rem] xl:p-[1rem_1.5rem] 2xl:p-[1.5rem_2rem] flex justify-between items-center absolute top-0 w-[100%]">
        <div
          onClick={() => window.location.reload()}
          className="relative sm:w-[80px] md:w-[100px] lg:w-[62px] xl:w-[76px] 2xl:w-[92px] sm:h-[48px] md:h-[56px] lg:h-[72px] xl:h-[38px] 2xl:h-[46px]"
        >
          <Image
            src="/images/nav-logo.svg"
            alt="logo"
            fill
            sizes="92"
            priority
            className="cursor-pointer magnetic"
          />
        </div>
        <div
          onClick={toggleMenu}
          className="menu-bars magnetic hidden lg:flex flex-col gap-[0.5rem] h-[50] w-[50] justify-center items-center cursor-pointer m-[0rem_0rem_0.5rem_3.1rem] relative"
        >
          <div className="dash dash-1 lg:w-[30px] xl:w-[38px] 2xl:w-[46px] border-[1.5px] border-t-[2px] border-solid border-[var(--color-dark-brown)]"></div>
          <div className="dash dash-2 lg:w-[30px] xl:w-[38px] 2xl:w-[46px] border-[1.5px] border-t-[2px] border-solid border-[var(--color-dark-brown)]"></div>
        </div>

        <button className="sm:text-[1rem] lg:text-[11.36px] xl:text-[13.36px] 2xl:text-[15.36px] sm:p-[0.8rem_1rem] md:p-[1rem_1.5rem] lg:p-[10px_20px] xl:p-[10px_24.32px] 2xl:p-[0.8rem_1.9rem] font-[800] rounded-[999px] uppercase bg-[#fef3f0] transition-all ease-[cubic-bezier(.455, .03, .515, .955)] duration-[0.3s] hover:bg-[var(--color-light-brown)] cursor-pointer border-none">
          Find in Stores
        </button>
      </nav>
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        className="menu w-full h-screen flex justify-center items-center absolute z-10 bg-[var(--color-milk)]"
      >
        <div className="menu-left flex-1 flex flex-col h-[100%] items-center justify-end gap-9.5 mb-[3.5rem]">
          <div className=" menu-items flex flex-col items-center leading-[5.7rem] text-[90px] font-[700] uppercase  tracking-tighter">
            {menuData.map((item, idx) => {
              return (
                <span
                  key={idx}
                  onMouseEnter={() => {
                    setActive(item.src);
                    setHovered(idx);
                  }}
                  onMouseLeave={() => {
                    setActive("/images/menu-img7.png");
                    setHovered(null);
                  }}
                  className="m-item relative"
                >
                  <span
                    className={`transition-all ease-in duration-[0.3s] ${
                      hovered !== null && hovered !== idx ? "opacity-[.3]" : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
              );
            })}
          </div>
          <div className="social-links flex gap-[2rem] font-proxima text-[17px]">
            <span className="m-item">YouTube</span>
            <span className="m-item">Instagram</span>
            <span className="m-item">TikTok</span>
          </div>
        </div>
        <div className="menu-right relative flex-1 h-[100%] overflow-hidden">
          <Image
            src={active}
            alt="img"
            fill
            className="menu-img object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
