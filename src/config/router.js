import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../views/Home";
import AboutPage from "../views/About";
import BlogPage from "../views/Blog";
import Navbar from "../components/Navbar/Navbar";
import Contactpage from "../views/Contact";
import ServicesPage from "../views/Services";
import SingleBlog from "../views/SinglePost";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ChatbotPage from "../views/Chatbot";
import GenerativeDevelopmentPage from "../views/Generative-Development";
import WebApplicationsPage from "../views/Web-Applications";
import MachineLearningPage from "../views/Machine-Learning";
import TokenizationPage from "../views/Tokenization";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <ScrollToTop />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      }
    >
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="blog" element={<BlogPage />}></Route>
      <Route path="contact" element={<Contactpage />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="singleblog" element={<SingleBlog />}></Route>
      <Route path="services/chatbot" element={<ChatbotPage />}></Route>
      <Route
        path="services/generative-development"
        element={<GenerativeDevelopmentPage />}
      ></Route>
      <Route
        path="services/web-applications"
        element={<WebApplicationsPage />}
      ></Route>
      <Route
        path="services/machine-learning"
        element={<MachineLearningPage />}
      ></Route>
      <Route
        path="services/tokenization"
        element={<TokenizationPage />}
      ></Route>
    </Route>
  )
);
export default function Router() {
  return <RouterProvider router={router} />;
}
