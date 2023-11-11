import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { GlobalStyle } from "./styles/GlobalStyle";
import "animate.css/animate.min.css";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(
  () => import("./pages/AboutUs/AboutUs"),
);
const Services = lazy(
  () => import("./pages/Services/Services"),
);
const ServiceSingle = lazy(
  () => import("./pages/ServiceSingle/ServiceSingle"),
);
const Project = lazy(
  () => import("./pages/Project/Project"),
);
const ProjectSingle = lazy(
  () => import("./pages/ProjectSingle/ProjectSingle"),
);
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogSingle = lazy(
  () => import("./pages/BlogSingle/BlogSingle"),
);
const Team = lazy(
  () => import("./pages/TeamPage/TeamPage"),
);
const Contact = lazy(
  () => import("./pages/Contact/Contact"),
);
const Pricing = lazy(
  () => import("./pages/PricingPage/PricingPage"),
);
const NotFound = lazy(() => import("./pages/404/404"));

const App = () => {
  AOS.init({ duration: 500 });

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/service" element={<Services />} />
          <Route
            path="/service-single"
            element={<ServiceSingle />}
          />
          <Route
            path="/our-project"
            element={<Project />}
          />
          <Route
            path="/project/:name"
            element={<ProjectSingle />}
          />
          <Route
            path="/blog/:category?"
            element={<Blog />}
          />
          <Route
            path="/post/:title"
            element={<BlogSingle />}
          />
          <Route path="/our-team" element={<Team />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
