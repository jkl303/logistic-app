import { useParams } from "react-router-dom";
import { Hero } from "../../components/common/Hero/Hero";
import { News } from "../../components/common/News/News";
import heroBlog from "../../images/BlogPage/heroBlog.jpg";

const Blog = () => {
  const params = useParams();

  return (
    <>
      <Hero
        text={params.category ? "Category" : "Blog"}
        title={
          params.category
            ? params.category
            : "Our Latest News"
        }
        img={heroBlog}
      />
      <News category={params.category} all />
    </>
  );
};

export default Blog;
