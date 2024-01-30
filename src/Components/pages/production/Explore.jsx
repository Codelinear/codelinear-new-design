import { FreeMode } from "swiper/modules";
import img11 from "./Explore-assets/services carousel01.jpg";
import img12 from "./Explore-assets/services carousel02.jpg";
import img13 from "./Explore-assets/services carousel03.jpg";
import img14 from "./Explore-assets/services carousel04.jpg";
import img16 from "./Explore-assets/services carousel05.jpg";
import img17 from "./Explore-assets/services carousel06.jpg";
import img18 from "./Explore-assets/services carousel07.jpg";
import img19 from "./Explore-assets/services carousel08.jpg";
import img20 from "./Explore-assets/services carousel09.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Explore = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className="explore-more">
      <h1>Explore our other services</h1>
      <div className="exp-slide">
        <Swiper
          freeMode={{ enabled: true, slidesPerGroup: 1 }}
          spaceBetween={20}
          slidesPerView={2}
          modules={[FreeMode]}
          breakpoints={{
            690: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            901: {
              slidesPerView: 4,
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
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/product-development"}>
                <img src={img11} alt="" srcset="" />
                <h6>Product Design and Innovation</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[30px]">
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/appdev"}>
                <img src={img12} alt="" srcset="" />
                <h6>App Development and Modernization</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[50px]">
            <div className="exp-slides">
              <img src={img13} alt="" srcset="" />
              <h6>Technology Consulting</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[80px]">
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/gamedev"}>
                <img src={img17} alt="" srcset="" />
                <h6>Game Development</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[110px]">
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/AR-VR-services"}>
                <img src={img18} alt="" srcset="" />
                <h6>AR/VR Services</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[150px]">
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/low-code-no-code"}>
                <img src={img19} alt="" srcset="" />
                <h6>Quality Assurance</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[190px]">
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/Ecommerce"}>
                <img src={img14} alt="" srcset="" />
                <h6>Ecommerce Marketplace Development</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[230px]">
            <div className="exp-slides">
              <img src={img16} alt="" srcset="" />
              <h6>Cloud Engineering</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pl-[270px]">
            <div className="exp-slides">
              <Link onClick={scrollToTop} to={"/Quality-Assurance"}>
                <img src={img20} alt="" srcset="" />
                <h6>Low code no code</h6>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Explore;
