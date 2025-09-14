import Image from "next/image";

const FooterBody = () => {
  return (
    <div className="w-[100%] h-[111vh]">
      <div className="text-center mt-[9.6rem]">
        <span className="title text-[var(--color-milk)] !text-[119px]">
          #chugresponsibly
        </span>
      </div>
      <div className="flex gap-[1rem] justify-center mt-[4.3rem]">
        <div className="w-[76.8px] h-[76.8px] rounded-[999px] hover:bg-[#ffffff1a] cursor-pointer duration-[0.3s] ease-out flex justify-center items-center border-[1px] border-solid border-[#faeade33]">
          <Image
            src="/images/yt.svg"
            alt="youtube"
            width={30.71}
            height={30.71}
          />
        </div>
        <div className="w-[76.8px] h-[76.8px] rounded-[999px] hover:bg-[#ffffff1a] cursor-pointer duration-[0.3s] ease-out flex justify-center items-center border-[1px] border-solid border-[#faeade33]">
          <Image
            src="/images/insta.svg"
            alt="instagram"
            width={30.71}
            height={30.71}
          />
        </div>
        <div className="w-[76.8px] h-[76.8px] rounded-[999px] hover:bg-[#ffffff1a] cursor-pointer duration-[0.3s] ease-out flex justify-center items-center border-[1px] border-solid border-[#faeade33]">
          <Image
            src="/images/tiktok.svg"
            alt="ticktock"
            width={30.71}
            height={30.71}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-[10rem] mt-[8rem] p-[2rem]">
        <div className="flex gap-[3rem]">
          <span>SPYLT Flavors</span>
          <span className="flex flex-col gap-[0.5rem]">
            <span>Chug Club </span>
            <span>Student Marketing</span>
            <span>Dairy Dealers</span>
          </span>
          <span className="flex flex-col gap-[0.5rem]">
            <span>Company </span>
            <span>Contacts</span>
            <span>Tasty Talk</span>
          </span>
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">
            Get Exclusive Early Access and Stay Informed About Product Updates,
            Events, and More!
          </label>
          <input type="email" />
        </div>
        <div className="flex justify-start items-end">
          Copyright © 2025 Spylt - All Rights Reserved
        </div>
        <div className="flex gap-[3rem] justify-end">
          <span className="flex items-end">Privacy Policy</span>
          <span className="flex items-end">Terms of Sеrvice</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
