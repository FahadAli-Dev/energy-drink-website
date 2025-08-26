"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
const Navbar = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.utils.toArray(".magnetic").forEach((el) => {
      el.onmousemove = (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - (r.left + r.width / 2)) / 1.6,
          y: (e.clientY - (r.top + r.height / 2)) / 1.6,
          duration: 0.3,
          scale: 1.1,
          opacity: 0.8,
        });
      };
      el.onmouseleave = () =>
        gsap.to(el, { x: 0, y: 0, duration: 0.5, scale: 1, opacity: 1 });
    });
  }, []);

  return (
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
      <div className="magnetic flex flex-col gap-[0.5rem] h-[50] justify-center cursor-pointer">
        <div className="border-[1.5px] border-t-[2px] border-solid border-[var(--color-dark-brown)] w-[46px]"></div>
        <div className="border-[1.5px] border-solid border-[var(--color-dark-brown)] w-[46px]"></div>
      </div>

      <button className="uppercase bg-[#fef3f0] text-[15.36px] font-[800] p-[0.8rem_1.9rem] rounded-[999px] transition-all ease-in duration-[0.2s] hover:bg-[var(--color-light-brown)] cursor-pointer border-none">
        Find in Stores
      </button>
    </nav>
  );
};

export default Navbar;
