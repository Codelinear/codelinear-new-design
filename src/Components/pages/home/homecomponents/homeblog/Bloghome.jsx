import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "./homeblog.scss";
import img5 from "../../../../../assets/homeassets/BLogs01.jpg";
import img3 from "../../../../../assets/homeassets/BLogs03.jpg";
import img4 from "../../../../../assets/homeassets/BLogs06.jpg";
import img2 from "../../../../../assets/homeassets/BLogs02.jpg";
import img6 from "../../../../../assets/homeassets/BLogs07.jpg";
import img7 from "../../../../../assets/homeassets/BLogs04.jpg";
import img1 from "../../../../../assets/homeassets/BLogs05.jpg";
import { Link } from "react-router-dom";

const Bloghome = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section>
      <div className="flex justify-between mt-[100px] w-full px-[80px] mb-[60px] max-lg:px-[40px] max-sm:px-[20px] max-sm:flex-wrap max-sm:gap-5">
        <div>
          <div className="w-[443.95px] text-black text-[32px] font-normal font-['Graphik'] leading-[120%] letter-spacing-3 max-sm:w-full">
            Stay in the know. Check our insights into big things happening now.
          </div>
        </div>
        <div>
          <Link
            onClick={scrollToTop}
            to={"insights"}
            className="w-[174px] h-14 px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full"
          >
            <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
              View Insights
            </div>
          </Link>
        </div>
      </div>
      <Swiper
        freeMode={{ enabled: true, slidesPerGroup: 1 }}
        spaceBetween={20}
        slidesPerView={1}
        modules={[FreeMode]}
        breakpoints={{
          690: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          901: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1124: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
        className="swipe mySwiper"
      >
        <SwiperSlide>
          <Link
            to={"/changingnature"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[80px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img5}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  changing nature of SEO
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={"/design-system"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[100px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  Design System{" "}
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={"/mvp"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[100px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img3}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  Minimum viable product{" "}
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={"/branding"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[100px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img6}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] h-[29px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  The art of disruptive branding{" "}
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={"/Gestalt"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[100px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img4}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  Gestalt psychology{" "}
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={"/nocode"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[100px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img7}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  No Code Revolution{" "}
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={"/shopifyVsMagento"}
            onClick={scrollToTop}
            className="w-[317px] h-[548px] flex-col justify-start items-start gap-[36px] inline-flex  pl-[100px] max-sm:pl-[20px] max-lg:pl-[40px]"
          >
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className="w-[317px] h-[175px] bg-white justify-center items-center inline-flex">
                <img
                  className="w-[318px] object-cover relative flex-col justify-start items-start flex"
                  src={img1}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-[24px] flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="w-[317px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                  Spotify vs Magento{" "}
                </div>
                <div className="w-[317px] mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                  Our commitment is not just to design; it's to create
                  experiences that resonate, innovate....
                </div>
              </div>
              <div className="px-4 py-2 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                  Read more
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Bloghome;
