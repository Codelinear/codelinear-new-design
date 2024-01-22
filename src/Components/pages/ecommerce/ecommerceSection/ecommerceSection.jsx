import img1 from "../assets/material-symbols-light_diversity-2-outline-rounded.svg";
import img2 from "../assets/WooCommerce_logo 1.svg";
import img3 from "../assets/netsuite 1.svg";
import img4 from "../assets/shopify-logo-svgrepo-com 1.svg";
import img5 from "../assets/magento-seeklogo 1.svg";
import img6 from "../assets/bigcommerce-1 1.svg";
import img7 from "../assets/4373224_hubspot_logo_logos_icon 1 (1).svg";
import img8 from "../assets/Wix.com_website_logo 1 (1).svg";
import img9 from "../assets/Font_Awesome_5_brands_squarespace 1.svg";
import img10 from "../assets/shift4shop-logos-idK2bziH1E 1.svg";

import { Link } from "react-router-dom";

const ESection = () => {
  return (
    <>
      <section id="exp-design" className="exp-design">
        <h2 className="capitilize whitespace-nowrap">
          Ecommerce Marketplace Development <span></span>
        </h2>
        <h1 className="whitespace-nowrap">
          Ecommerce Marketplace <br /> Development
        </h1>
        <p className="exp-p">
          We understand the dynamic landscape of e-commerce. Our E-commerce
          Marketplace Development services are designed to transform your vision
          into a thriving digital marketplace.
        </p>
        <div className="prod-container w-[924px] flex-wrap">
          <div className="prod-sub-container">
            <img src={img1} alt="" />
            <h3>Custom e-commerce Development</h3>
            <p>
              Tailored solutions crafting unique online marketplaces, blending
              design, scalability, and cutting-edge technologies seamlessly.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img2} alt="" />
            <h3>WooCommerce</h3>
            <p>
              WordPress-integrated e-commerce solution offering customizable
              online stores, and secure payment options for businesses.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img3} alt="" />
            <h3>NetSuite</h3>
            <p>
              Comprehensive cloud ERP solution, integrating financials, CRM, and
              e-commerce for streamlined business operations and growth.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img4} alt="" />
            <h3>Shopify</h3>
            <p>
              E-commerce solution empowering businesses with user-friendly
              tools, customizable themes, and secure payment gateways for
              success.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img5} alt="" />
            <h3>Magento</h3>
            <p>
              Powerful open-source e-commerce solution enabling scalable and
              customizable online stores with robust features and flexibility.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img6} alt="" />
            <h3>BigCommerce</h3>
            <p>
              All-in-one e-commerce solution, offering customizable online
              stores, responsive themes, and advanced features for business
              growth.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img7} alt="" />
            <h3>HubSpot Commerce Hub</h3>
            <p>
              Unified e-commerce platform seamlessly integrating sales,
              marketing, and customer service for holistic online business
              success.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img8} alt="" />
            <h3>WixCommerce</h3>
            <p>
              Intuitive e-commerce platform empowering businesses with
              user-friendly design tools, and easy online store management.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img9} alt="" />
            <h3>Squarespace</h3>
            <p>
              Elegant and user-friendly website builder, offering creative tools
              and templates for building distinctive and polished online
              presence.
            </p>
          </div>
          <div className="prod-sub-container">
            <img src={img10} alt="" />
            <h3>Shift4Shop</h3>
            <p>
              Comprehensive e-commerce solution with customizable online stores,
              marketing tools, and secure payment options
            </p>
          </div>
        </div>
      </section>
      <div className="justify-start items-center gap-[58px] ml-[80px] inline-flex">
        <div className="w-[267.25px] text-black text-xl font-normal font-['Graphik'] leading-normal">
          Need help in making the next big thing?
        </div>
        <Link
          to=""
          className="px-8 py-4 rounded-[50px] border border-black justify-center items-center gap-2 flex hover:bg-yellow-400 transition-all  hover:border-yellow-400"
        >
          <div className="text-black rounded-[50px] text-base font-normal font-['Graphik'] capitalize leading-normal">
            Talk to our experts
          </div>
        </Link>
      </div>
    </>
  );
};
export default ESection;
