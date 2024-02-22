import img1 from "./assets/laptop.jpg";
import img2 from "./assets/Frame 1000002335.jpg";
import img3 from "./assets/App Logo - Builder Template.jpg";
import img4 from "./assets/App Logo - Builder Template (1).jpg";
import img5 from "./assets/Frame 1000003199.jpg";
import img6 from "./assets/Frame 1000003217.jpg";

const Collage = () => {
  return (
    <>
      <div className="flex gap-[20px]">
        <img src={img1} alt="" className="w-[49%] mt-[96.5px]" />
        <img src={img2} alt="" className="w-[49%] mt-[40px] mb-[56.5px]" />
      </div>
      <div className="flex gap-[20px]">
        <div className="my-[60px] gap-[61.5px] flex flex-col w-[49%]">
          <div className="flex justify-between w-[100%]">
            <img src={img3} alt="" className="w-[45%]"/>
            <img src={img4} alt="" className="w-[45%]"/>
          </div>
          <img src={img5} alt="" className="w-[100%]"/>
        </div>
        <img src={img6} alt="" className="w-[49%] mb-[165px]"/>
      </div>
    </>
  );
};
export default Collage;
