import CasestudyCarousal from "../tradejini/components/casestudyCarousal";
// import TradejiniAbout from "./components/tradejiniAbout";
// import TradejiniDesc from "./components/tradejiniDesc";
import Singhvihero from "./components/singhvihero";
// import TradejiniDetails from "./components/tradejniDetails";
import Blog from "../home/homecomponents/homeblog/Bloghome";
import { Helmet } from "react-helmet";
// import Tradejiniquote from "./tradejiniquote";
// import Collage from "./collage";
// import Blursection from "./components/blursection";

const Tradejini = () => {
  return (
    <>
      <Helmet>
        <title>codelinear | Singhvi Dev & UNI LLP</title>
      </Helmet>
      <main className="px-[80px] max-lg:px-[40px] max-sm:px-[20px] ">
        <Singhvihero />
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
export default Tradejini;
