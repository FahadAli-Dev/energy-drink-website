import FooterHead from "../components/FooterHead";
import FooterBody from "../components/FooterBody";

const Footer = () => {
  return (
    <section className="w-[100%] relative translate-y-[-1px] backface-hidden z-[2]">
      <FooterHead />
      <FooterBody />
    </section>
  );
};

export default Footer;
