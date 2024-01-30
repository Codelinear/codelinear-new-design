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
import VR from './Components/pages/VR/VR'
import Career from './Components/pages/components/career'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gamedev" element={<Gamedev />} />
          <Route exact path="/product-development" element={<Production />} />
          <Route exact path="/low-code-no-code" element={<Lowcode />} />
          <Route exact path="/service" element={<Servicepage />} />
          <Route exact path="/appdev" element={<Appdevelop />} />
          <Route exact path="/insights" element={<Blog />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/casestudy" element={<Casestudy />} />
          <Route exact path="/industry" element={<Industry />} />
          <Route exact path="/changingnature" element={<Changingnature />} />
          <Route exact path="/nocode" element={<Nocode />} /> 
          <Route
            exact
            path="/Quality-Assurance"
            element={<QualityAssurance />}
          />
          <Route exact path="/Ecommerce" element={<Ecommerce />} />
          <Route exact path="/AR-VR-services" element={<VR />} />
          <Route exact path="/shopifyVsMagento" element={<Shopify />} />
          <Route exact path="/design-system" element={<Designsystem />} />
          <Route exact path="/Gestalt" element={<Gestalt />} />
          <Route exact path="/story" element={<Story />} />
          <Route exact path="/mvp" element={<Mvp />} />
          <Route exact path="/branding" element={<Branding />} />
          <Route exact path="/ux" element={<Ux />} />
          <Route exact path="/Bingvsgoogle" element={<Bing />} />
          <Route exact path="/customer" element={<Customer />} />
          <Route exact path="/ReactVsflutter" element={<Native />} />
          <Route exact path="/empthy" element={<Empathy />} />
          <Route exact path="/ai" element={<Ai />} />
          <Route exact path="/workshop" element={<Workshop />} />
          <Route exact path="/digital" element={<Digital />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
