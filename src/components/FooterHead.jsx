import Image from "next/image";

const FooterHead = () => {
  return (
    <div className="w-[100%] h-[135vh]">
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
      <div className="fh-content absolute left-[20%] bottom-[5%] flex flex-col">
        <span
          style={{ wordSpacing: "0.8rem" }}
          className="title p-[0.4rem] text-center !text-[var(--color-milk)] overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]"
        >
          Right around
        </span>

        <span
          style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          className="title flex justify-center nt-2 mt-[-1.3rem] !leading-[7rem] !text-[119px] bg-[#e9aa56] text-[var(--color-dark-brown)] p-[1rem_0rem_2rem_0rem] rotate-[4deg]"
        >
          the corner
        </span>
        <span className="des text-[var(--color-milk)] my-[3rem]">
          Buy our drinks at your local store or <br /> get them delivered (to
          your door).
        </span>
        <button className="btn">Find in stores</button>
      </div>
    </div>
  );
};

export default FooterHead;
