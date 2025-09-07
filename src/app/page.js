import Navbar from "@/components/Navbar";
import Flavor from "@/sections/Flavor";
import Hero from "@/sections/Hero";
import Message from "@/sections/Message";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Message />
      <Flavor />
    </>
  );
};

export default page;
