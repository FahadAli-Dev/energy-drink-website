import { testimonialData } from "@/utils/data";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="mt-[-100vh] testimonial-section relative z-[2] pt-[5rem] pb-[1.9rem] w-[100%] h-[150h] bg-[var(--color-milk)]">
      <div className="font-bold text-[20rem] uppercase leading-[20rem] flex flex-col items-center">
        <h1 className="text-[var(--color-black)]">What's</h1>
        <h1 className="text-[var(--color-light-brown)]">Everyone</h1>
        <h1 className="text-[var(--color-black)]">Talking</h1>
      </div>
      <div className="flex w-[90%] h-[640px] left-1/2 translate-x-[-50%] absolute bottom-[7%]">
        {testimonialData.map((e, i) => {
          return (
            <div
              key={i}
              className={`flex-1 h-[643px] z-[${e.z}] w-[331px] border-[6px] border-solid cursor-pointer border-[var(--color-milk)] rounded-[1.9rem] overflow-hidden`}
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
      <button className="btn absolute bottom-[2.7%] left-1/2 translate-x-[-50%]">
        Explore all
      </button>
    </section>
  );
};

export default Testimonial;
