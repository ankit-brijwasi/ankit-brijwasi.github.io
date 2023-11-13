import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"
import profilePic from "../assets/profile-pic.jpeg";

const NavLinks = ({ pathname, activeRoute, inactiveRoute }) => {
  return (
    <ul className="flex text-sky-800 font-[400] text-[16px] justify-between sm:justify-end align-center pt-3">
      <Link className={"/" === pathname ? activeRoute : inactiveRoute} to="/">
        <li className="mr-3 font-[calibri]">Home</li>
      </Link>
      <Link
        className={"/projects" === pathname ? activeRoute : inactiveRoute}
        to="/projects"
      >
        <li className="mr-3 font-[calibri]">Projects</li>
      </Link>
      <Link
        className={"/tech-stack" === pathname ? activeRoute : inactiveRoute}
        to="/tech-stack"
      >
        <li className="mr-3 font-[calibri]">Tech Stack</li>
      </Link>
      <Link
        className={"/blogs" === pathname ? activeRoute : inactiveRoute}
        to="/blogs"
      >
        <li className="font-[calibri]">Blogs</li>
      </Link>
    </ul>
  );
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const activeRoute = "text-black";
  const inactiveRoute = "underline";

  return (
    <>
      <div className="pt-8">
        <img
          src={profilePic}
          className="rounded-full w-[200px] pb-4"
          alt="Ankit Brijwasi"
        />
      </div>
      <nav className="pt-4 pb-6">
        <div className="flex justify-between align-center">
          <Link to={"/"} className="text-[30px] font-[800]">Ankit Brijwasi</Link>
          <div className="hidden sm:block">
            <NavLinks
              pathname={pathname}
              activeRoute={activeRoute}
              inactiveRoute={inactiveRoute}
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sky-800 cursor-pointer inline-block sm:hidden"
          >
            <FaBars color="#222" />
          </button>
        </div>
        <div className="block sm:hidden">
          {isOpen && (
            <NavLinks
              pathname={pathname}
              activeRoute={activeRoute}
              inactiveRoute={inactiveRoute}
            />
          )}
        </div>
      </nav>
    </>
  );
}
