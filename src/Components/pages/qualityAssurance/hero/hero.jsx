import image from "../../servicepage/servicecompo/allservices/assets/Frame 1000002735 (4).png";

const Hero = () => {
  return (
    <>
      <section id="prod-hero">
        <h1 className="prod-hero-h1 letter-spacing">
          We stand as your partners in ensuring seamless, flawless digital
          solutions.
        </h1>
        <div>
          <img src={image} alt="" />
        </div>
        <p>
          No two projects are the same, and neither are our testing approaches.
          We tailor our quality assurance strategies to align with your unique
          requirements, ensuring a bespoke and effective QA process.
        </p>
        <button>Talk to our experts</button>
      </section>
    </>
  );
};
export default Hero;
