import image from "../assets/Low code no code.jpg";

const Hero = () => {
  return (
    <>
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
