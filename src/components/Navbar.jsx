import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="z-50 p-[0.5rem] sm:p-[0.5rem_1rem] md:p-[2rem] flex justify-between items-center absolute top-0 w-[100%]">
      <Image
        src="/images/nav-logo.svg"
        alt="logo"
        width={92}
        height={46}
        priority
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-[0.5rem] h-[50] justify-center cursor-pointer">
        <div className="border-[1.5px] border-t-[2px] border-solid border-[var(--color-dark-brown)] w-[46px]"></div>
        <div className="border-[1.5px] border-solid border-[var(--color-dark-brown)] w-[46px]"></div>
      </div>

      <button className="uppercase bg-[#fef3f0] text-[15px] font-[800] p-[0.8rem_1.9rem] rounded-[999px] transition-all ease-in duration-[0.2s] hover:bg-[var(--color-light-brown)] cursor-pointer border-none">
        Find in Stores
      </button>
    </nav>
  );
};

export default Navbar;
