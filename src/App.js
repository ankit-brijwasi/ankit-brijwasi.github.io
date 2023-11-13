import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/blogs";
import Project from "./pages/projects";
import TechStack from "./pages/tech-stack";
import Home from "./pages/home";

const Layout = () => {
  return (
    <article className="mx-auto px-4 sm:px-2 w-full max-w-[700px] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </article>
  );
};

function App() {
  return (
    <div className={"bg-[#f2f2f2]"}>
      <article className="mx-auto w-full max-w-[700px] min-h-screen">
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/tech-stack" element={<TechStack />} />
            </Route>
          </Routes>
        </HashRouter>
      </article>
    </div>
  );
}

export default App;
