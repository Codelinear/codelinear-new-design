import image from "../assets/Ecommerce.jpg";

const Hero = () => {
  return (
    <>
      <section id="prod-hero">
        <h1 className="text-[66px] h-[75vh] ml-[80px] leading-[108%] mt-[142px] letter-spacing-1 w-[1023px] max-sm:text-[50px] max-lg:w-full max-sm:px-[20px] max-lg:px-[40px] max-lg:ml-0">
          Elevate your brand with our bespoke E-commerce Marketplace Development
          solutions.
        </h1>
        <div>
          <img src={image} alt="" />
        </div>
        <p>
          Unleash the full potential of your business with our expertly crafted
          E-commerce Marketplace Development solutions.
        </p>
        <button>Talk to our experts</button>
      </section>
    </>
  );
};
export default Hero;
