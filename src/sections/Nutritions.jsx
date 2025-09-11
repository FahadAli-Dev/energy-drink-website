import Image from "next/image";

const Nutritions = () => {
  return (
    <section className="w-[100%] h-[110vh] relative bg-[#dfd0b6]">
      <div className="relative w-[100%] h-[30%]">
        <Image
          src="/images/slider-dip.png"
          alt="img"
          fill
          className="object-fill"
        />
      </div>
      <div className="w-[100%] h-[90%] absolute bottom-0">
        <Image
          src="/images/big-img.png"
          alt="img"
          fill
          className="object-fill"
        />
      </div>
      <div className="flex flex-col absolute">
        <span className="title text-center overflow-hidden !leading-[7.8rem] !text-[119px] mt-[-1.7rem]">
          It still does
        </span>

        <span
          // style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
          className="title !leading-[7rem] !text-[119px] bg-[var(--color-yellow-brown)] text-[#e2d4bc] p-[1rem_1.5rem_2rem_1.5rem] border-[7.5px] backface-hidden rotate-357 border-solid border-[#faeade]"
        >
          Body good
        </span>
      </div>
    </section>
  );
};

export default Nutritions;
