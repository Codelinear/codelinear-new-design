import React from "react";
import Bloghero from "./blogcomponents/blogHero/Bloghero";
import Featured from "./blogcomponents/featureArticle/Featured";
import Allblogs from "./blogcomponents/allblog/Allblogs";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
    <Helmet>
        <title>codelinear | Insights</title>
        <meta
          name="keywords"
          content="services, web development, mobile apps, software consulting, project management, Codelinear, blogs, insights"
        />
        <meta
          name="description"
          content="Dive into Codelinear's insights for the latest trends, tips, and best practices in software development. Stay informed with our comprehensive articles, tutorials, and guides covering various topics, including web development, mobile apps, software consulting, project management, and more."
        />
      </Helmet>
      <Bloghero />
      <Featured/>
      <Allblogs/>
    </>
  );
};

export default Blog;
