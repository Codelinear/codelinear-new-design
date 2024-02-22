import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gamedev from "./Components/pages/gamedev/Gamedev";
import Servicepage from "./Components/pages/servicepage/Servicepage";
import Appdevelop from "./Components/pages/appdevelopmentpage/Appdevelop";
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
import Singhvi from './Components/pages/singhvi/singhvi'
import Vacaystay from "./Components/pages/vacystay/vacaystay";
import Contrasted from './Components/pages/contrasted/contrast'
import SEA from './Components/pages/sea/sea'
import Kanbar from './Components/pages/kanbar/kanbar'
import Wearwell from './Components/pages/wearwell/wearwell'
import LAH from './Components/pages/leafandhive/lah'
import Klass from './Components/pages/klassenandsmith/klass'
import Land from './Components/pages/landmark/land'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Servicepage />} />
          <Route
            exact
            path="/product-design-and-innovation"
            element={<Production />}
          />
          <Route
            exact
            path="/app-development-and-modernization"
            element={<Appdevelop />}
          />
          <Route exact path="/game-development" element={<Gamedev />} />
          <Route exact path="/salesforce-services" element={<Salesforce />} />
          <Route exact path="/cloud-engineering" element={<Cloud />} />
          <Route exact path="/technology-consulting" element={<Tech />} />{" "}
          <Route
            exact
            path="/quality-assurance"
            element={<QualityAssurance />}
          />
          <Route
            exact
            path="/ecommerce-marketplace-development"
            element={<Ecommerce />}
          />
          <Route
            exact
            path="/artificial-intelligence-(ai)-services"
            element={<AI />}
          />
          <Route
            exact
            path="/microsoft-sharepoint-services"
            element={<Sharepoint />}
          />
          <Route exact path="/low-code-and-no-code" element={<Lowcode />} />
          <Route exact path="/ar-vr-services" element={<VR />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/industries" element={<Industry />} />
          <Route exact path="/case-studies" element={<Casestudy />} />
          <Route exact path="/tradejini" element={<Tradejini/>}/>
          <Route exact path="/landmark" element={<Land/>}/>
          <Route exact path="/klassen-&-smith" element={<Klass/>}/>
          <Route exact path="/leaf-&-hive" element={<LAH/>}/>
          <Route exact path="/wear-well" element={<Wearwell/>}/>
          <Route exact path="/kanbar-digital" element={<Kanbar/>}/>
          <Route exact path="/contrasted-marketing" element={<Contrasted/>}/>
          <Route exact path="/vacaystay-406" element={<Vacaystay/>}/>
          <Route exact path="/search-engine-amplify" element={<SEA/>}/>
          <Route exact path="/singhvi-dev-&-uni-llp-chartered-accountants" element={<Singhvi/>}/>
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/insights" element={<Blog />} />
          <Route
            exact
            path="/the-changing-nature-of-seo"
            element={<Changingnature />}
          />
          <Route exact path="/no-code-revolution" element={<Nocode />} />
          <Route exact path="/shopify-vs-magento" element={<Shopify />} />
          <Route exact path="/design-system" element={<Designsystem />} />
          <Route exact path="/gestalt-psychology" element={<Gestalt />} />
          <Route exact path="/storytelling-in-marketing" element={<Story />} />
          <Route exact path="/minimum-viable-product" element={<Mvp />} />
          <Route
            exact
            path="/the-art-of-disruptive-branding"
            element={<Branding />}
          />
          <Route exact path="/ux-design-benefits-smes!" element={<Ux />} />
          <Route exact path="/bing-vs-google" element={<Bing />} />
          <Route
            exact
            path="/listing-to-your-customer"
            element={<Customer />}
          />
          <Route exact path="/react-native-vs-flutter" element={<Native />} />
          <Route exact path="/empthy-in-ux" element={<Empathy />} />
          <Route exact path="/ai-powered-design-tools" element={<Ai />} />
          <Route exact path="/discovery-workshop" element={<Workshop />} />
          <Route
            exact
            path="/digital-marketing-trends-in-2023"
            element={<Digital />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
