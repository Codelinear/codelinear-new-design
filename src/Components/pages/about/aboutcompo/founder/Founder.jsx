import React from "react";

const Founder = () => {
  return (
    <>
      <div className="founder mt-20">
        <div className="w-full h-[503px] relative bg-white">
          <div className="flex justify-center items-center gap-20">
            <div className="w-[407.60px] h-[407.60px] left-[80px] top-[53px]  justify-center items-center inline-flex">
              <img
                className="w-[407.60px] h-[407.60px]"
                src="https://via.placeholder.com/408x408"
                alt=""
              />
            </div>

            <div className="w-[738px] h-[278.85px] left-[622px] top-[67.49px]  text-black text-4xl font-normal font-['Graphik'] leading-[43.92px]">
              Lacinia faucibus et augue arcu natoque ipsum sit viverra fames.
              Eget tincidunt aenean mauris nunc. Purus justo orci faucibus enim.
              Dis erat libero gravida morbi dui velit amet nunc ipsum. Massa
              metus laoreet in eu. Sit nunc pulvinar tellus nulla{" "}
            </div>
            <div className="left-[622px] top-[366.71px] absolute text-black text-base font-normal font-['Graphik'] leading-tight">
              Syed Saif Muheeb, CEO & Founder, <br />
              Codelinear
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
