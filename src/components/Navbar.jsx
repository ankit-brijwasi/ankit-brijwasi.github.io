import { Link, useLocation } from "react-router-dom";
import profilePic from "../assets/profile-pic.jpeg";

export default function Navbar() {
  const { pathname } = useLocation();
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
      <nav className="flex justify-between pt-4 pb-6">
        <h1 className="text-[30px] font-[800]">Ankit Brijwasi</h1>
        <ul className="flex text-sky-800 font-[400] text-[16px] justify-end align-center pt-3">
          <Link
            className={"/" === pathname ? activeRoute : inactiveRoute}
            to="/"
          >
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
      </nav>
    </>
  );
}
