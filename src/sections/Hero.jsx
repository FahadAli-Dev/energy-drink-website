const Hero = () => {
  return (
    <div className="lg:max-w-[900px] mx-auto">
      <div>
        <h1 className="title">Freaking Delicious</h1>
      </div>
      <div className="bg-[var(--color-yellow-brown)] w-[96%] flex justify-center items-center">
        <h1 className="title text-[#fce1cd] pb-[0.8rem]">Protein + Caffeine</h1>
      </div>
      <p className="des text-center mx-auto my-[3rem]">
        Live life to the fullest with SPYLT: Shatter boredom and embrace your
        inner kid with every deliciously smooth chug.
      </p>
    </div>
  );
};

export default Hero;
