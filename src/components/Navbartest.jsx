import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import ProjectsData from "../pages/ProjectData";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../img/logo.jpg";

const links = [
  { name: "Home", scrollTo: "home" },
  { name: "Profile", to: "/profile" },
  { name: "Gallery", to: "/gallery" },
  { name: "About", scrollTo: "about" },
  {
    name: "Projects",
    dropdown: ProjectsData.map((project) => ({
      name: project.title,
      to: `/projects/${project.id}`,
    })),
  },
  { name: "President", scrollTo: "president" },
  { name: "Blogs", scrollTo: "blogs" },
  { name: "Contact", scrollTo: "contact" },
];

const Navbartest = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="bg-white shadow sticky top-0 z-50 w-full">
      <div className=" w-10/12 mx-auto px-4 py-3 poppins-regular flex justify-between items-center">
        <h1 className="text-5xl anton-regular flex flex-row font-bold justify-center items-center gap-5 tracking-wider text-orange-500">
          <img src={Logo} alt="" className="w-14 h-14" />
          AICURD
        </h1>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobile}>
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 font-medium">
          <ul className="flex space-x-6">
            {links.map((link, index) => {
              // Dropdown Case
              if (link.dropdown) {
                return (
                  <li key={index} className="relative group">
                    <span className="cursor-pointer hover:text-orange-500">
                      {link.name}
                    </span>
                    <ul className="absolute top-full left-0 mt-1 bg-white border shadow-xl rounded-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-2 z-50 w-[500px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <RouterLink
                            to={item.to}
                            className="block w-full px-1 py-1 text-sm text-black hover:bg-orange-500 hover:text-white rounded-md"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              // ✅ Redirect if link has `to`
              if (link.to) {
                return (
                  <li key={index}>
                    <RouterLink to={link.to} className="hover:text-orange-500">
                      {link.name}
                    </RouterLink>
                  </li>
                );
              }

              // Scroll otherwise
              return (
                <li key={index}>
                  {isHomePage ? (
                    <ScrollLink
                      to={link.scrollTo}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer hover:text-orange-500"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${link.scrollTo}`}
                      className="hover:text-orange-500"
                    >
                      {link.name}
                    </RouterLink>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ✅ Social Icons */}
          <div className="ml-6 flex gap-4 text-xl">
            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a> */}
            <a
              href="https://www.facebook.com/profile.php?id=61579795409472"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/aicurdngo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden flex flex-col px-6 pb-6 space-y-4 bg-white">
          <ul className="flex flex-col space-y-4">
            {links.map((link, index) => {
              if (link.dropdown) {
                return (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold text-orange-500">
                      {link.name}
                    </span>
                    <ul className="ml-4 mt-1 grid grid-cols-2 gap-2">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <RouterLink
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm hover:text-orange-500"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              // ✅ Redirect if link has `to`
              if (link.to) {
                return (
                  <li key={index}>
                    <RouterLink
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-orange-500"
                    >
                      {link.name}
                    </RouterLink>
                  </li>
                );
              }

              // Scroll otherwise
              return (
                <li key={index}>
                  {isHomePage ? (
                    <ScrollLink
                      to={link.scrollTo}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setMobileOpen(false)}
                      className="cursor-pointer hover:text-orange-500"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${link.scrollTo}`}
                      onClick={() => setMobileOpen(false)}
                      className="hover:text-orange-500"
                    >
                      {link.name}
                    </RouterLink>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ✅ Social Icons in Mobile */}
          <div className="pt-6 border-t mt-4 flex justify-center gap-6 text-xl">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579795409472"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/aicurdngo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbartest;
