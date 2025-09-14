import Image from "next/image";

const FooterHead = () => {
  return (
    <div className="w-[100%] h-[135vh] relative">
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
      <div className="fh-content absolute left-[6%] bottom-[9%] flex flex-col">
        <span
          style={{ wordSpacing: "0.8rem" }}
          className="title text-center !text-[var(--color-milk)] overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]"
        >
          Right around
        </span>

        <span className="title flex justify-center !leading-[8rem] !text-[119px] bg-[#e9aa56] text-[var(--color-dark-brown)] w-[87%] pb-[1rem] rotate-[2.5deg]">
          the corner
        </span>
        <span className="des !leading-[1rem] text-[var(--color-milk)] my-[3.5rem]">
          Buy our drinks at your local store or <br /> get them delivered (to
          your door).
        </span>
        <button className="btn text-[var(--color-milk)] !bg-[var(--color-black)]">
          Find in stores
        </button>
      </div>
    </div>
  );
};

export default FooterHead;
