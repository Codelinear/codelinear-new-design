import "./production.scss";
import bulb from "./images/bulb.svg";
import img1 from "./images/ph_eye.svg";
import img2 from "./images/ph_eye (1).svg";
import img3 from "./images/ph_eye (2).svg";
import img4 from "./images/image 175.svg";
import img5 from "./images/Brain.svg";
import img6 from "./images/Phone Mobile Phone.svg";
import img7 from "./images/User Sync Online In Person.svg";
import img8 from "./images/ph_eye (3).svg";
import img9 from "./images/ph_eye (4).svg";
import img10 from "./images/ph_eye (5).svg";
import img11 from "./images/alexander-shatov-DHl49oyrn7Y-unsplash 1.svg";
import img12 from "./images/antipolygon-youtube-ccI20DOSpVo-unsplash 1.svg";
import img13 from "./images/image 173.svg";
import img14 from "./images/image 174.svg";
import img16 from "./images/image 2.svg";
import img17 from "./images/image 4.svg";
import img18 from "./images/pexels-iryna-riabchykova-12876443 1.svg";
import img19 from "./images/stefan-stefancik-pzA7QWNCIYg-unsplash 1.svg";
import arrcurve from "./images/Frame 1000002754 --_ Frame 1000002785.svg";
import arrright from "./images/Frame 1000002750 --_ Frame 1000002752.svg";
import arrdown from "./images/Frame 1000002750 --_ Frame 1000002751.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

const Production = () => {
  return (
    <>
      <section className="side-bar">
        <div className="side-menu">
          <div className="menu-list1">
            <a href="#prod-hero" className="intro grey">Overview</a>
          </div>
          <div className="menu-list1">
            <a href="#exp-design" className="intro">Product Design and Innovation</a>
          </div>
          <div className="menu-list1">
            <a href="#exp-design" className="sub-menu">Experience Design</a>
          </div>
          <div className="menu-list1">
            <a href="#prod-engg" className="sub-menu">Product Engineering</a>
          </div>
          <div className="menu-list1">
            <a href="#inn-strat" className="sub-menu">Innovation and Strategy</a>
          </div>
        </div>
      </section>
      <section id="prod-hero">
        <h1 className="prod-hero-h1 letter-spacing">
          Quis ullamcorper felis elit dictum. Sed sapien curabitur at lacus nec.
        </h1>
        <div>
          <img src={bulb} alt="" />
        </div>
        <p>
          Quis nec massa felis ornare mauris sagittis egestas ultrices massa. Ut
          mauris pellentesque adipiscing tortor nulla gravida ut senectus
          volutpat. Rhoncus faucibus feugia
        </p>
        <button>Talk to our experts</button>
      </section>
      <section id="exp-design" className="exp-design">
        <h2>
          Product Design and Innovation <span></span>
        </h2>
        <h1>Experience Design</h1>
        <p className="exp-p">
          Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
          tortor ultrices bibendum. Sodales lorem non magna praesent elementum
          in congue massa non. Donec ornare pellentesque laoreet orci sit neque.
        </p>
        <div className="prod-container">
          <div className="prod-sub-container">
            <img src={img1} alt="" />
            <h3>User Experience Design</h3>
            <p>
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum{" "}
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" />
            <h3>User Interface Design</h3>
            <p>
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum{" "}
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" />
            <h3>Customer Experience</h3>
            <p>
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum{" "}
            </p>
          </div>
        </div>
        <div className="prod-container-2">
          <img src={img4} alt="" />
          <div className="prod-sub-container-2">
            <h4>
              Scelerisque eros at erat faucibus pharetra aenean maecenas mattis.
              Id.
            </h4>
            <button>Talk to our design experts</button>
          </div>
        </div>
      </section>
      <section id="prod-engg">
        <h2>
          Product Engineering <span></span>
        </h2>
        <h1>Experience Design</h1>
        <p className="exp-p">
          Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
          tortor ultrices bibendum. Sodales lorem non magna praesent elementum
          in congue massa non. Donec ornare pellentesque laoreet orci sit neque.
        </p>
        <h3>What we do differently</h3>
        <div className="engg-container">
          <div className="engg-sub-contaner">
            <img src={img5} alt="" />
            <h4>Design thinking</h4>
            <p>
              Turpis feugiat aliquet imperdiet amet viverra ac condimentum sed.{" "}
            </p>
          </div>
          <div className="engg-sub-contaner">
            <img src={img6} alt="" />
            <h4>Product culture</h4>
            <p>
              Turpis feugiat aliquet imperdiet amet viverra ac condimentum sed.{" "}
            </p>
          </div>
          <div className="engg-sub-contaner">
            <img src={img7} alt="" />
            <h4>Cross-functional team</h4>
            <p>
              Turpis feugiat aliquet imperdiet amet viverra ac condimentum sed.{" "}
            </p>
          </div>
        </div>
        <section className="animation-tree">
          <div className="hover"></div>
          <h5 className="at-h1">
            Deploying Product Engineering is necessary to keep up with digital
            hypergrowth.
          </h5>
          <div className="ia">
            <p>Ideation</p>
            <img src={arrdown} alt="" />
            <p>Architecture</p>
            <img src={arrdown} alt="" />
          </div>
          <div className="ddt">
            <p>Design</p>
            <img src={arrright} alt="" />
            <p>Develop</p>
            <img src={arrright} alt="" />
            <p>Test</p>
          </div>
          <div className="dsm">
            <img src={arrdown} alt="" />
            <p>Deploy</p>
            <img src={arrdown} alt="" />
            <p>Support and Maintenance</p>
          </div>
          <img src={arrcurve} alt="" className="arrcurve" />
          <div className="outter-circle">
            <div className="middle-circle">
              <div className="inner-circle">Reengineer</div>
            </div>
          </div>
          <div className="talk">
            <div className="talk-text">
              Ready to transition into the future?
            </div>
            <button>Talk to our design experts</button>
          </div>
        </section>
      </section>
      <section id="inn-strat" className="exp-design">
        <h2>
          Product Design and Innovation <span></span>
        </h2>
        <h1>Innovation and Strategy</h1>
        <p className="exp-p">
          Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
          tortor ultrices bibendum. Sodales lorem non magna praesent elementum
          in congue massa non. Donec ornare pellentesque laoreet orci sit neque.
        </p>
        <div className="prod-container">
          <div className="prod-sub-container">
            <img src={img8} alt="" />
            <h3>New product innovation</h3>
            <p>
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum{" "}
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img9} alt="" />
            <h3>Incremental innovation</h3>
            <p>
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum{" "}
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img10} alt="" />
            <h3>New Feature Introduction</h3>
            <p>
              Enim in nunc mi ultricies risus nulla vitae. Feugiat vitae dui in
              tortor ultrices bibendum. Sodales lorem non magna praesent
              elementum{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="explore-more">
        <h1>Explore our other services</h1>
        <div className="exp-slide">
          <Swiper
            direction="horizontal"
            mousewheel={{ releaseOnEdges: true }}
            freeMode={{ enabled: true, slidesPerGroup: 1 }}
            spaceBetween={80}
            slidesPerView={4}
            releaseOnEdges={true}
            modules={[Mousewheel]}
            className="swipe mySwiper"
          >
            <SwiperSlide>
              <div className="exp-slides">
                <img src={bulb} alt="" srcset="" />
                <h6>Product Design and Innovation</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img19} alt="" srcset="" />
                <h6>Technology Consulting</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img18} alt="" srcset="" />
                <h6>App Development and Modernization</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img17} alt="" srcset="" />
                <h6>Game Development</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img16} alt="" srcset="" />
                <h6>AR/VR Services</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img11} alt="" srcset="" />
                <h6>Low-code and No-code</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img14} alt="" srcset="" />
                <h6>Ecommerce Marketplace Development</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img13} alt="" srcset="" />
                <h6>Cloud Engineering</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="exp-slides">
                <img src={img12} alt="" srcset="" />
                <h6>Quality Assurance</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Production;
