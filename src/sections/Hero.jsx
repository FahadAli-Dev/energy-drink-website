const Hero = () => {
  return (
    <div className="w-[100%] h-screen relative">
      <video
        src="/videos/hero-bg.mp4"
        // loop
        autoPlay
        muted
        controls=""
        className="w-[100%] h-[100%] object-cover"
      ></video>
      <div className="lg:max-w-[900px] mx-auto flex flex-col items-center justify-center absolute top-[16%] left-[23.8%]">
        <div>
          <h1 className="title tracking-normal">Freaking Delicious</h1>
        </div>
        <div className="bg-[var(--color-yellow-brown)] w-[96%] flex justify-center items-center  mt-[0.3rem] rotate-357 outline-[7px] outline-solid outline-[#faeade]">
          <h1 className="title text-[#fce1cd] pb-[0.8rem]">
            Protein + Caffeine
          </h1>
        </div>
        <p className="des text-center m-[3rem_0rem_4rem_0rem]  w-[52%]">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>
        <div className="btn">Chug a Spylt</div>
      </div>
    </div>
  );
};

export default Hero;
