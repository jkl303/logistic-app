import { Hero } from "../../components/common/Hero/Hero";
import { News } from "../../components/common/News/News";
import heroBlog from "../../images/BlogPage/heroBlog.jpg";

const Blog = () => {
  return (
    <>
      <Hero
        text="Blog"
        title="Our Latest News"
        img={heroBlog}
      />
      <News all />
    </>
  );
};

export default Blog;
