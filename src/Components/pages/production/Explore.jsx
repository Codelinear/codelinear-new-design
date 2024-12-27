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
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Explore = () => {
  const path = useLocation();
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const slide4 = useRef(null);
  const slide5 = useRef(null);
  const slide6 = useRef(null);
  const slide7 = useRef(null);
  const slide8 = useRef(null);
  const slide9 = useRef(null);
  const slide10 = useRef(null);
  const slide11 = useRef(null);
  const slide12 = useRef(null);
  const live = path.pathname;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  useEffect(() => {
    if (live === "/services/product-design-and-innovation") {
      gsap.to(slide1.current, 0, { display: "none" });
    } else if (live === "/services/app-development-and-modernization") {
      gsap.to(slide2.current, 0, { display: "none" });
    } else if (live === "/services/technology-consulting") {
      gsap.to(slide3.current, 0, { display: "none" });
    } else if (live === "/services/artificial-intelligence-services") {
      gsap.to(slide4.current, 0, { display: "none" });
    } else if (live === "/services/ecommerce-marketplace-development") {
      gsap.to(slide5.current, 0, { display: "none" });
    } else if (live === "/services/cloud-engineering") {
      gsap.to(slide6.current, 0, { display: "none" });
    } else if (live === "/services/game-development") {
      gsap.to(slide7.current, 0, { display: "none" });
    } else if (live === "/services/ar-vr-services") {
      gsap.to(slide8.current, 0, { display: "none" });
    } else if (live === "/services/low-code-and-no-code") {
      gsap.to(slide9.current, 0, { display: "none" });
    } else if (live === "/services/salesforce-services") {
      gsap.to(slide10.current, 0, { display: "none" });
    } else if (live === "/services/microsoft-sharepoint-services") {
      gsap.to(slide11.current, 0, { display: "none" });
    } else if (live === "/services/quality-assurance") {
      gsap.to(slide12.current, 0, { display: "none" });
      if(window.innerWidth > 1024){
      gsap.to(slide11.current, 0, { width: "378px" });
      }
      else if(window.innerWidth <= 1024 && window.innerHeight > 840){
      gsap.to(slide11.current, 0, { width: "311px" });
      }
      else if(window.innerWidth <=840 && window.innerHeight > 640){
      gsap.to(slide11.current, 0, { width: "262px" });
      }
      if(window.innerWidth <= 640){
      gsap.to(slide11.current, 0, { marginRight: "20px"});
      gsap.to(slide11.current, 0, { width: "220px" });
      }
    }
  });
  return (
    <div className="overflow-hidden">
      <section className="explore-more">
        <h1>Explore our other services</h1>
        <div className="exp-slide">
          <Swiper
            freeMode={{ enabled: false, slidesPerGroup: 1 }}
            slidesPerView="auto"
            modules={[FreeMode, Pagination]}
            pagination={{ clickable: "true" }}
            className="swipe mySwiper"
          >
            <SwiperSlide ref={slide1}>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/services/product-design-and-innovation"}
                >
                  <img src={img11} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/services/product-design-and-innovation"}
                >
                  <h6>Product Design and Innovation</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide2}>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/services/app-development-and-modernization"}
                >
                  <img src={img12} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/services/app-development-and-modernization"}
                >
                  <h6>App Development and Modernization</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide3}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/technology-consulting"}>
                  <img src={img13} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/technology-consulting"}>
                  <h6>Technology Consulting</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide4}>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/services/artificial-intelligence-services"}
                >
                  <img src={img21} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/services/artificial-intelligence-services"}
                >
                  <h6>Artificial Intellegence (AI) Services</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide5}>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/services/ecommerce-marketplace-development"}
                >
                  <img src={img14} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/services/ecommerce-marketplace-development"}
                >
                  <h6>Ecommerce Marketplace Development</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide6}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/cloud-engineering"}>
                  <img src={img16} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/cloud-engineering"}>
                  <h6>Cloud Engineering</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide7}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/game-development"}>
                  <img src={img17} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/game-development"}>
                  <h6>Game Development</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide8}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/ar-vr-services"}>
                  <img src={img18} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/ar-vr-services"}>
                  <h6>AR/VR Services</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide9}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/low-code-and-no-code"}>
                  <img src={img20} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/low-code-and-no-code"}>
                  <h6>Low-code and No-code</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide10}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/salesforce-services"}>
                  <img src={img23} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/salesforce-services"}>
                  <h6>Salesforce Services</h6>
                </Link>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide ref={slide11}>
              <div className="exp-slides">
                <Link
                  onClick={scrollToTop}
                  to={"/services/microsoft-sharepoint-services"}
                >
                  <img src={img22} alt="" srcset="" />
                </Link>
                <Link
                  onClick={scrollToTop}
                  to={"/services/microsoft-sharepoint-services"}
                >
                  <h6>Microsoft Sharepoint Services</h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide ref={slide12}>
              <div className="exp-slides">
                <Link onClick={scrollToTop} to={"/services/quality-assurance"}>
                  <img src={img19} alt="" srcset="" />
                </Link>
                <Link onClick={scrollToTop} to={"/services/quality-assurance"}>
                  <h6>Quality Assurance</h6>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
  // }
};
export default Explore;
