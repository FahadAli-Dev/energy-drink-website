"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    const tl = gsap.timeline();
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      tl.to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: CustomEase.create("cusEase", "M0,0,C1,0 0.439,0.766,1,1"),
      }).to(
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
      }).to(
        ".m-item",
        {
          opacity: 0,
          duration: 1.5,
          ease: "slow",
        },
        "<"
      );
    }
  };

  return (
    <div>
      <nav className="z-50 p-[0.5rem] sm:p-[0.5rem_1rem] md:p-[2rem] flex justify-between items-center absolute top-0 w-[100%]">
        <div className="relative w-[92px] h-[46px]">
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
          className="magnetic flex flex-col gap-[0.5rem] h-[50] justify-center cursor-pointer p-[0rem_0rem_0.5rem_3.1rem]"
        >
          <div className="border-[1.5px] border-t-[2px] border-solid border-[var(--color-dark-brown)] w-[46px]"></div>
          <div className="border-[1.5px] border-solid border-[var(--color-dark-brown)] w-[46px]"></div>
        </div>

        <button className="uppercase bg-[#fef3f0] text-[15.36px] font-[800] p-[0.8rem_1.9rem] rounded-[999px] transition-all ease-[cubic-bezier(.455, .03, .515, .955)] duration-[0.3s] hover:bg-[var(--color-light-brown)] cursor-pointer border-none">
          Find in Stores
        </button>
      </nav>
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        className="menu w-full h-screen flex justify-center items-center absolute z-10 bg-[var(--color-milk)]"
      >
        <div className="menu-left flex-1 flex flex-col h-[100%] items-center justify-end gap-9.5 mb-[3.5rem]">
          <div className="menu-items flex flex-col items-center leading-[5.7rem] text-[90px] font-[700] uppercase  tracking-tighter">
            <span className="m-item">Shop</span>
            <span className="m-item">Find in stores</span>
            <span className="m-item">About us</span>
            <span className="m-item">tasty talks</span>
            <span className="m-item">Programs</span>
            <span className="m-item">Contacts</span>
          </div>
          <div className="social-links flex gap-[2rem] font-proxima text-[17px]">
            <span className="m-item">YouTube</span>
            <span className="m-item">Instagram</span>
            <span className="m-item">TikTok</span>
          </div>
        </div>
        <div className="menu-right relative flex-1 h-[100%]">
          <Image
            src="/images/menu-img1.png"
            alt="img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
