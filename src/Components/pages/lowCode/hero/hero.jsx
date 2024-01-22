import image from "../../servicepage/servicecompo/allservices/assets/Frame 1000002735 (3).png";

const Hero = () => {
  return (
    <>
      {/* <h1 className="w-[738px] text-[66px] leading-[100%] letter-spacing ml-[80.71px] mt-[142.78px]">
        Eliminate the need for intricate coding while ensuring a polished end
        product.
      </h1>
      <div className="flex justify-center mt-[70px]">
        <img src={image} alt="" className="w-[728.355px]" />
      </div> */}
      <section id="prod-hero">
        <h1 className="prod-hero-h1 letter-spacing">
          Eliminate the need for intricate coding while ensuring a polished end
          product.{" "}
        </h1>
        <div>
          <img src={image} alt="" />
        </div>
        <p>
          Our Low Code No Code development empowers you to bring your visions to
          life without the need for intricate coding expertise.
        </p>
        <button>Talk to our experts</button>
      </section>
    </>
  );
};
export default Hero;
