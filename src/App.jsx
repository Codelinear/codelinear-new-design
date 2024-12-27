import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTopOnPageChange from "./Components/pages/scrolltotop/scrolltotoponpagechange";
import AboutAistudio from "./Components/pages/AI-studio/aboutvacationai";
import AboutAiBubble from "./Components/pages/AI-studio/aboutbubble";
import Home from "./Components/pages/home/Home";
import Gamedev from "./Components/pages/gamedev/Gamedev";
import Servicepage from "./Components/pages/servicepage/Servicepage";
import Appdevelop from "./Components/pages/appdevelopmentpage/Appdevelop";
import Aistudio from "./Components/pages/AI-studio/aistudio";
import About from "./Components/pages/about/About";
import Blog from "./Components/pages/blogpages/Blog";
import Changingnature from "./Components/pages/blogpages/blogcomponents/ineerblog/Changingnature";
import Nocode from "./Components/pages/blogpages/blogcomponents/ineerblog/Nocode";
import Shopify from "./Components/pages/blogpages/blogcomponents/ineerblog/Shopify";
import Designsystem from "./Components/pages/blogpages/blogcomponents/ineerblog/Designsystem";
import Gestalt from "./Components/pages/blogpages/blogcomponents/ineerblog/Gestalt";
import Story from "./Components/pages/blogpages/blogcomponents/ineerblog/Story";
import Mvp from "./Components/pages/blogpages/blogcomponents/ineerblog/Mvp";
import Branding from "./Components/pages/blogpages/blogcomponents/ineerblog/Branding";
import Ux from "./Components/pages/blogpages/blogcomponents/ineerblog/Ux";
import Bing from "./Components/pages/blogpages/blogcomponents/ineerblog/Bing";
import Customer from "./Components/pages/blogpages/blogcomponents/ineerblog/Customer";
import Native from "./Components/pages/blogpages/blogcomponents/ineerblog/Native";
import Empathy from "./Components/pages/blogpages/blogcomponents/ineerblog/Empathy";
import Ai from "./Components/pages/blogpages/blogcomponents/ineerblog/Ai";
import Workshop from "./Components/pages/blogpages/blogcomponents/ineerblog/Workshop";
import Motion from "./Components/pages/blogpages/blogcomponents/ineerblog/motion";
import Digital from "./Components/pages/blogpages/blogcomponents/ineerblog/Digital";
import Contact from "./Components/pages/contactPage/contactpage";
import Casestudy from "./Components/pages/casestudy/Casestudy";
import Industry from "./Components/pages/industrypage/Industry";
import Production from "./Components/pages/production/production";
import Lowcode from "./Components/pages/lowCode/lowCode";
import QualityAssurance from "./Components/pages/qualityAssurance/qualityAssurance";
import Ecommerce from "./Components/pages/ecommerce/ecommerce";
import VR from "./Components/pages/VR/VR";
import Career from "./Components/pages/components/career";
import Cloud from "./Components/pages/cloud/cloud";
import Tech from "./Components/pages/TechConsulting/techConsulting";
import AI from "./Components/pages/AI/AI";
import Salesforce from "./Components/pages/salesforce/salesforce";
import Sharepoint from "./Components/pages/sharepoint/sharepoint";
import Tradejini from "./Components/pages/tradejini/tradejini";
import Singhvi from "./Components/pages/singhvi/singhvi";
import Vacaystay from "./Components/pages/vacystay/vacaystay";
import Contrasted from "./Components/pages/contrasted/contrast";
import SEA from "./Components/pages/sea/sea";
import Kanbar from "./Components/pages/kanbar/kanbar";
import Wearwell from "./Components/pages/wearwell/wearwell";
import LAH from "./Components/pages/leafandhive/lah";
import Klass from "./Components/pages/klassenandsmith/klass";
import Land from "./Components/pages/landmark/land";
import William from "./Components/pages/william/william";
import IMAPAC from "./Components/pages/imapac/imapac";
import Vouri from "./Components/pages/vouri/vouri";
import Homesrus from "./Components/pages/homesrus/homesrus";
import Klub from "./Components/pages/vouri copy/klub";
import Kernel from "./Components/pages/vouri copy 2/kernel";
import Hinge from "./Components/pages/vouri copy 3/hinge";
import Cowboy from "./Components/pages/vouri copy 4/cowboy";
import Deel from "./Components/pages/vouri copy 5/deel";
import Convoy from "./Components/pages/vouri copy 6/kernel";
import Lyra from "./Components/pages/vouri copy 7/lyra";
import Middle from "./Components/pages/vouri copy 8/middle";
import Ikea from "./Components/pages/vouri copy 9/ikea";
import Course from "./Components/pages/vouri copy 10/course";
import Mica from "./Components/pages/vouri copy 11/mics";
import Lit from "./Components/pages/vouri copy 12/litup";
import Booking from "./Components/pages/vouri copy 13/booking";
import Sodashi from "./Components/pages/vouri copy 14/sodashi";
import Steel from "./Components/pages/vouri copy 15/steelcase";
import Studio from "./Components/pages/vouri copy 16/studio";
import Move from "./Components/pages/vouri copy 17/moveworks";
import Soch from "./Components/pages/vouri copy 18/soch";
import Mango from "./Components/pages/vouri copy 19/mango";
import Wilder from "./Components/pages/vouri copy 20/wilderness";
import IEA from "./Components/pages/vouri copy 21/ieatraining"
import Digitaltoolkit from "./Components/pages/vouri copy 22/digitaltoolkit"
import Woolaid from "./Components/pages/vouri copy 23/woolaid"
import Altitude from "./Components/pages/vouri copy 24/altitudecharter"
import Local from "./Components/pages/vouri copy 25/localseoguys"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTopOnPageChange />
        <Suspense>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Servicepage />} />
            <Route
              exact
              path="/services/product-design-and-innovation"
              element={<Production />}
            />
            <Route
              exact
              path="/services/app-development-and-modernization"
              element={<Appdevelop />}
            />
            <Route
              exact
              path="/services/game-development"
              element={<Gamedev />}
            />
            <Route
              exact
              path="/services/salesforce-services"
              element={<Salesforce />}
            />
            <Route
              exact
              path="/services/cloud-engineering"
              element={<Cloud />}
            />
            <Route
              exact
              path="/services/technology-consulting"
              element={<Tech />}
            />{" "}
            <Route
              exact
              path="/services/quality-assurance"
              element={<QualityAssurance />}
            />
            <Route
              exact
              path="/services/ecommerce-marketplace-development"
              element={<Ecommerce />}
            />
            <Route
              exact
              path="/services/artificial-intelligence-services"
              element={<AI />}
            />
            <Route
              exact
              path="/services/microsoft-sharepoint-services"
              element={<Sharepoint />}
            />
            <Route
              exact
              path="services/low-code-and-no-code"
              element={<Lowcode />}
            />
            <Route exact path="services/ar-vr-services" element={<VR />} />
            <Route exact path="/about-us" element={<About />} />
            <Route exact path="/industries" element={<Industry />} />
            <Route exact path="/case-studies" element={<Casestudy />} />
            <Route
              exact
              path="/case-studies/tradejini"
              element={<Tradejini />}
            />
            <Route exact path="/case-studies/landmark" element={<Land />} />
            <Route
              exact
              path="/case-studies/klassen-and-smith"
              element={<Klass />}
            />
            <Route exact path="/case-studies/leaf-and-hive" element={<LAH />} />
            <Route
              exact
              path="/case-studies/wear-well"
              element={<Wearwell />}
            />
            <Route
              exact
              path="/case-studies/kanbar-digital"
              element={<Kanbar />}
            />
            <Route
              exact
              path="/case-studies/contrasted-marketing"
              element={<Contrasted />}
            />
            <Route
              exact
              path="/case-studies/vacaystay-406"
              element={<Vacaystay />}
            />
            <Route
              exact
              path="/case-studies/search-engine-amplify"
              element={<SEA />}
            />
            <Route
              exact
              path="/case-studies/william-abraham"
              element={<William />}
            />
            <Route exact path="/case-studies/imapac" element={<IMAPAC />} />
            <Route exact path="/case-studies/vouri" element={<Vouri />} />
            <Route exact path="/case-studies/klub" element={<Klub />} />
            <Route exact path="/case-studies/deel" element={<Deel />} />
            <Route
              exact
              path="/case-studies/kernel-wealth"
              element={<Kernel />}
            />
            <Route
              exact
              path="/case-studies/hinge-health"
              element={<Hinge />}
            />
            <Route exact path="/case-studies/cowboy" element={<Cowboy />} />
            <Route exact path="/case-studies/convoy" element={<Convoy />} />
            <Route exact path="/case-studies/lyra" element={<Lyra />} />
            <Route exact path="/case-studies/middle" element={<Middle />} />
            <Route exact path="/case-studies/ikea" element={<Ikea />} />
            <Route exact path="/case-studies/mango" element={<Mango />} />
            <Route
              exact
              path="/case-studies/course-hero"
              element={<Course />}
            />
            <Route exact path="/case-studies/mica-rino" element={<Mica />} />
            <Route
              exact
              path="/case-studies/lit-up-visuals"
              element={<Lit />}
            />
            <Route
              exact
              path="/case-studies/booking-factory"
              element={<Booking />}
            />
            <Route exact path="/case-studies/sodashi" element={<Sodashi />} />
            <Route exact path="/case-studies/steelcase" element={<Steel />} />
            <Route
              exact
              path="/case-studies/studio-neat"
              element={<Studio />}
            />
            <Route exact path="/case-studies/moveworks" element={<Move />} />
            <Route exact path="/case-studies/soch" element={<Soch />} />
            <Route
              exact
              path="/case-studies/wilderness-travel"
              element={<Wilder />}
            />
            <Route
              exact
              path="/case-studies/homes-r-us"
              element={<Homesrus />}
            />
            <Route
              exact
              path="/case-studies/iea-training"
              element={<IEA />}
            />
            <Route
              exact
              path="/case-studies/digital-toolkit"
              element={<Digitaltoolkit />}
            />
            <Route
              exact
              path="/case-studies/woolaid"
              element={<Woolaid />}
            />
            <Route
              exact
              path="/case-studies/altitude-charter"
              element={<Altitude />}
            />
            <Route
              exact
              path="/case-studies/localseoguys"
              element={<Local />}
            />
            <Route
              exact
              path="/case-studies/singhvi-dev-and-uni-llp-chartered-accountants"
              element={<Singhvi />}
            />
            <Route exact path="/contact-us" element={<Contact />} />
            <Route exact path="/careers" element={<Career />} />
            <Route exact path="/insights" element={<Blog />} />
            <Route
              exact
              path="/insights/the-changing-nature-of-seo"
              element={<Changingnature />}
            />
            <Route
              exact
              path="/insights/the-art-of-disruptive-branding"
              element={<Branding />}
            />
            <Route
              exact
              path="/insights/listening-to-your-customer"
              element={<Customer />}
            />
            <Route
              exact
              path="/insights/digital-marketing-trends-in-2023"
              element={<Digital />}
            />
            <Route
              exact
              path="/insights/no-code-revolution"
              element={<Nocode />}
            />
            <Route
              exact
              path="/insights/the-secret-power-of-motion"
              element={<Motion />}
            />
            <Route
              exact
              path="/insights/shopify-vs-magento"
              element={<Shopify />}
            />
            <Route
              exact
              path="/insights/design-system"
              element={<Designsystem />}
            />
            <Route
              exact
              path="/insights/gestalt-psychology"
              element={<Gestalt />}
            />
            <Route
              exact
              path="/insights/storytelling-in-marketing"
              element={<Story />}
            />
            <Route
              exact
              path="/insights/minimum-viable-product"
              element={<Mvp />}
            />
            <Route
              exact
              path="/insights/ux-design-benefits-smes"
              element={<Ux />}
            />
            <Route exact path="/insights/bing-vs-google" element={<Bing />} />
            <Route
              exact
              path="/insights/react-native-vs-flutter"
              element={<Native />}
            />
            <Route exact path="/insights/empathy-in-ux" element={<Empathy />} />
            <Route
              exact
              path="/insights/ai-powered-design-tools"
              element={<Ai />}
            />
            <Route
              exact
              path="/insights/discovery-workshop"
              element={<Workshop />}
            />
            <Route exact path="/ai-studio" element={<Aistudio />} />
            <Route
              exact
              path="/ai-studio/about-vacation-ai"
              element={<AboutAistudio />}
            />
            <Route
              exact
              path="/ai-studio/about-support-ai"
              element={<AboutAiBubble />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
