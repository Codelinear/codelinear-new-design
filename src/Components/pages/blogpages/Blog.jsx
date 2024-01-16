import React from "react";
import Bloghero from "./blogcomponents/blogHero/Bloghero";
import Featured from "./blogcomponents/featureArticle/Featured";
import Allblogs from "./blogcomponents/allblog/Allblogs";

const Blog = () => {
  return (
    <>
      <Bloghero />
      <Featured/>
      <Allblogs/>
    </>
  );
};

export default Blog;
