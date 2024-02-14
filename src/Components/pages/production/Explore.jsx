import { FreeMode, Pagination } from "swiper/modules";
import img11 from "./Explore-assets/services carousel01.jpg";
import img12 from "./Explore-assets/services carousel02.jpg";
import img13 from "./Explore-assets/services carousel03.jpg";
import img14 from "./Explore-assets/services carousel04.jpg";
import img16 from "./Explore-assets/services carousel05.jpg";
import img17 from "./Explore-assets/services carousel06.jpg";
import img18 from "./Explore-assets/services carousel07.jpg";
import img19 from "./Explore-assets/services carousel08.jpg";
import img20 from "./Explore-assets/services carousel09.jpg";
import img21 from "../AI/assets/simon-lee-zA66MV4EyXc-unsplash 1.jpg";
import img22 from "../sharepoint/assets/Frame 1000002801 (1).jpg";
import img23 from "../salesforce/assets/Frame 1000002801.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Explore = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return (
    <div className="overflow-hidden">
      <section className="explore-more">
        <h1>Explore our other services</h1>
        <div className="exp-slide">
          <Swiper
            freeMode={{ enabled: false, slidesPerGroup: 1 }}
            spaceBetween={20}
            slidesPerView={2}
            modules={[FreeMode, Pagination]}
            pagination={{clickable: 'true'}}
            breakpoints={{
              590: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1125: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
              1350: {
                slidesPerView: 4.5,
                spaceBetween: 80,
              },
            }}
            className="swipe mySwiper"
          >
            <SwiperSlide>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/product-design-and-innovation"}
                >
                  <img src={img11} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/product-design-and-innovation"}
                >
                  <h6>Product Design and Innovation</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/app-development-and-modernization"}
                >
                  <img src={img12} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/app-development-and-modernization"}
                >
                  <h6>App Development and Modernization</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/technology-consulting"}>
                  <img src={img13} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/technology-consulting"}>
                  <h6>Technology Consulting</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/artificial-intelligence-(ai)-services"}
                >
                  <img src={img21} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/artificial-intelligence-(ai)-services"}
                >
                  <h6>Artificial Intellegence (AI) Services</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/ecommerce-marketplace-development"}
                >
                  <img src={img14} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/ecommerce-marketplace-development"}
                >
                  <h6>Ecommerce Marketplace Development</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-[30px] max-sm:ml-[10px]">
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/cloud-engineering"}>
                  <img src={img16} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/cloud-engineering"}>
                  <h6>Cloud Engineering</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/game-development"}>
                  <img src={img17} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/game-development"}>
                  <h6>Game Development</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/ar-vr-services"}>
                  <img src={img18} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/ar-vr-services"}>
                  <h6>AR/VR Services</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/low-code-and-no-code"}>
                  <img src={img20} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/low-code-and-no-code"}>
                  <h6>Low-code and No-code</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/salesforce-services"}>
                  <img src={img23} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/salesforce-services"}>
                  <h6>Salesforce Services</h6>
                </Link>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/microsoft-sharepoint-services"}
                >
                  <img src={img22} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/microsoft-sharepoint-services"}
                >
                  <h6>Microsoft Sharepoint Services</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/quality-assurance"}>
                  <img src={img19} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/quality-assurance"}>
                  <h6>Quality Assurance</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
export default Explore;
