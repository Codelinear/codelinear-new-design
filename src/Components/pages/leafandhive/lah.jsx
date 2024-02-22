import CasestudyCarousal from "../tradejini/components/casestudyCarousal";
// import TradejiniAbout from "./components/tradejiniAbout";
// import TradejiniDesc from "./components/tradejiniDesc";
// import Tradejinihero from "./components/tradejinihero";
// import TradejiniDetails from "./components/tradejniDetails";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";
// import Tradejiniquote from "./tradejiniquote";
// import Collage from "./collage";
// import Blursection from "./components/blursection";

const LAH = () => {
  return (
    <>
      <Helmet>
        <title>codelinear | Leaf & Hive</title>
      </Helmet>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        {/* <Tradejinihero /> */}
        {/* <TradejiniDesc /> */}
        {/* <TradejiniAbout /> */}
        {/* <TradejiniDetails /> */}
         {/* <Tradejiniquote /> */}
        {/* <Collage /> */}
        {/* <Blursection /> */}
        <CasestudyCarousal />
      </main>
      <Blog />
    </>
  );
};
export default LAH;
