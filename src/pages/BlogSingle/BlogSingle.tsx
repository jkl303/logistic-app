import { useParams } from "react-router-dom";
import { news } from "../../data/news";
import { HeroBlog } from "../../components/BlogSinglePage/HeroBlog/HeroBlog";
import { BlogMain } from "../../components/BlogSinglePage/BlogMain/BlogMain";

const BlogSingle = () => {
  const { title } = useParams();

  const currentBlog = news.filter((blog) => {
    return blog.title === title;
  })[0];

  return (
    <>
      <HeroBlog blog={currentBlog} />
      <BlogMain category={currentBlog.category} />
    </>
  );
};

export default BlogSingle;
