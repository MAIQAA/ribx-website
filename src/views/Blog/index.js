import Hero from "../../components/blog/Hero";
import Blog from "../../components/home/Blog";
const BlogPage = () => {
  return (
    <div className="overflow-x-clip space-y-16">
      <Hero />
      <Blog />
    </div>
  );
};

export default BlogPage;
