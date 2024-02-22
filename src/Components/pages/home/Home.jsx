import React from "react";
import Homehero from "../../homepageComp/homeHero/Homehero";
import { Helmet } from "react-helmet";
import { Suspense } from "react";
const Adupt = React.lazy(() => import("./homecomponents/Adupt"));
const Bloghome = React.lazy(() => import("./homecomponents/homeblog/Bloghome"));
const Clients = React.lazy(() => import("./homecomponents/Clients"));
const Homeservice = React.lazy(() =>
  import("./homecomponents/service/Homeservice")
);
const Homeanimate = React.lazy(() =>
  import("./homecomponents/homeanimate/Homeanimate")
);
const Homeabout = React.lazy(() =>
  import("./homecomponents/homeabout/Homeabout")
);
const Productengineer = React.lazy(() =>
  import("./homecomponents/homeproductengineer/Productengineer")
);
const Vision = React.lazy(() => import("./homecomponents/vision/Vision"));

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>codelinear</title>
      </Helmet>
      <Homehero />
      <Suspense>
        <Vision />
      </Suspense>
      <Suspense>
        <Productengineer />
      </Suspense>
      <Suspense>
        <Homeabout />
      </Suspense>
      <Suspense>
        <Homeservice />
      </Suspense>
      <Suspense>
        <Homeanimate />
      </Suspense>
      <Suspense>
        <Clients />
      </Suspense>
      <Suspense>
        <Adupt />
      </Suspense>
      <Suspense>
        <Bloghome />
      </Suspense>
    </div>
  );
};

export default Home;
