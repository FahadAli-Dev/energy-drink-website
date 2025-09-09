import Image from "next/image";
import { FlavorData } from "@/utils/data";

const FlavorSlider = () => {
  return (
    <>
      <div className="fs-wrapper absolute translate-x-[87%] right-0 bottom-[0] flex gap-[15rem] w-[370%] h-[100%]">
        {FlavorData.map((e, i) => {
          return (
            <div
              key={i}
              className={`w-[100%] h-[100%] relative top-[50%] translate-y-[-57%] translate-x-[5rem] ${
                i % 2 == 0 ? "rotate-[-8deg]" : "rotate-[8deg]"
              }`}
            >
              <Image
                src={e.bgImg}
                alt="img-bg"
                fill
                className="object-contain"
              />
              <div className="w-[55%] h-[80%] absolute top-1/2 translate-y-[-57.8%] left-1/2 translate-x-[-50%]">
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
                className="translate-y-[-15%] object-contain"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlavorSlider;
