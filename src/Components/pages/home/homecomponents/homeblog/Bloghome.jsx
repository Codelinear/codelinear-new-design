import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
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
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <section className="overflow-hidden">
      <div className="flex justify-between mt-[100px] w-full px-[80px] mb-[60px] max-sm:mb-0 max-lg:px-[40px] max-sm:px-[20px] max-sm:flex-wrap max-sm:gap-5">
        <div>
          <div className="w-[443.95px] text-black text-[32px] font-normal font-['Graphik'] leading-[120%] letter-spacing-3 max-sm:w-full">
            Stay in the know. Check our insights into big things happening now.
          </div>
        </div>
        <div className="max-sm:w-full">
          <Link
            onClick={scrollToTop}
            to={"/insights"}
            className="w-[174px] h-14 px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-[100%]"
          >
            <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal max-sm:w-[100%] max-sm:text-center">
              View Insights
            </div>
          </Link>
        </div>
      </div>
      <div className="blog-more max-sm:mt-[40px]">
        <Swiper
          freeMode={{ enabled: false, slidesPerGroup: 1 }}
          spaceBetween={20}
          slidesPerView={2.1}
          pagination={{clickable: 'true'}}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            440: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            520: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1084: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1125: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1370: {
              slidesPerView: 4.5,
              spaceBetween: 80,
            },
          }}
          className="swipe mySwiper"
        >
          <SwiperSlide>
            <Link
              to={"/the-changing-nature-of-seo"}
              onClick={scrollToTop}
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px]  max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img5}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] max-sm:h-[30px] max-sm:w-full text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    changing nature of SEO
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Search engine optimization (SEO) has been around for over
                    two decades, and it has undergone significant changes....
                  </div>
                </div>
                <div className="px-4 py-2 max-sm:w-full hover:bg-yellow-400 transition-all  hover:border-yellow-400 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
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
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img2}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] max-sm:w-full text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Design System{" "}
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    A design system is a guide or a standard structure with
                    parameters for design and code along with design
                    components....
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={"/minimum-viable-product"}
              onClick={scrollToTop}
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img3}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] h-[30px] max-sm:w-full text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Minimum viable product{" "}
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    The bigger idea behind building an MVP is to test your
                    assumptions. That takes us to the next important segment....
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={"/the-art-of-disruptive-branding"}
              onClick={scrollToTop}
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img6}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] max-sm:w-full h-[30px] text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    The art of disruptive branding{" "}
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    Branded environments are not just for large corporations
                    with huge budgets. Any business can create a branded....
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={"/gestalt-psychology"}
              onClick={scrollToTop}
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img4}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] max-sm:w-full max-sm:w-full text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Gestalt psychology{" "}
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    The website redesign of the restaurant chain, Chili's, is a
                    great case study in UX design using Gestalt Psychology....
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={"/no-code-revolution"}
              onClick={scrollToTop}
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img7}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] max-sm:w-full max-sm:w-full text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    No Code Revolution{" "}
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    The No-code revolution is indicative that modern businessmen
                    and women want to keep creative control....
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to={"/shopify-vs-magento"}
              onClick={scrollToTop}
              className="w-[317px] max-sm:w-[270px] h-[548px] max-sm:h-[420px] flex-col justify-start items-start gap-[36px] max-sm:gap-[18px] inline-flex  ml-[80px] max-sm:ml-[20px] max-lg:ml-[40px]"
            >
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="w-[317px] max-sm:w-full h-[175px] bg-white justify-center items-center inline-flex">
                  <img
                    className="w-[318px] max-sm:w-full object-cover relative flex-col justify-start items-start flex"
                    src={img1}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[24px] flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="w-[317px] max-sm:w-full text-black text-[24px] leading-[120%] letter-spacing-4 font-normal font-['Graphik'] capitalize">
                    Spotify vs Magento{" "}
                  </div>
                  <div className="w-[317px] max-sm:w-full mt-[17px] opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal">
                    If you're a business owner of any kind, you've probably
                    heard of Shopify and Magento.Today, Shopify and....
                  </div>
                </div>
                <div className="hover:bg-yellow-400 transition-all  hover:border-yellow-400 px-4 py-2 max-sm:w-full rounded-[31px] border border-black justify-center items-center gap-2 inline-flex">
                  <div className="text-black text-base font-normal font-['Graphik'] capitalize leading-normal">
                    Read more
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Bloghome;
