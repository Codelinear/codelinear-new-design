import image from "../assets/ARVR01.jpg";

const Hero = () => {
  return (
    <>
      <section id="prod-hero">
        <h1 className="text-[66px] h-[100vh] pl-[80px] leading-[108%] pb-[80px] pt-[142px] letter-spacing-1 w-[976px] max-lg:pl-[40px] max-sm:pl-[20px] max-sm:text-[50px] max-lg:w-[90%]">
          Immerse your audience in captivating digital experiences like never
          before.
        </h1>
        <div>
          <img src={image} className="object-cover" alt="" />
        </div>
        <p>
          Our AR/VR services transcend boundaries, offering an array of
          immersive solutions that elevate your brand and captivate your
          audience.
        </p>
        <button>Talk to our experts</button>
      </section>
    </>
  );
};
export default Hero;
