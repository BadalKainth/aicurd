import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import ProjectsData from "../pages/ProjectData";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const links = [
  { name: "Home", scrollTo: "home" },
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
  { name: "Donate", scrollTo: "donate" },
  { name: "Contact", scrollTo: "contact" },
];

const Navbartest = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 poppins-regular flex justify-between items-center">
        <h1 className="text-5xl anton-regular font-bold tracking-wider text-orange-500">
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
              if (link.dropdown) {
                return isHomePage ? (
                  <li key={index} className="relative group">
                    <ScrollLink
                      to="projects"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer hover:text-orange-500"
                    >
                      {link.name}
                    </ScrollLink>
                    <ul className="absolute top-full left-0 mt-3 bg-white border shadow-xl rounded-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-2 z-50 w-[500px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <RouterLink
                            to={item.to}
                            className="block w-full px-1 py-1 text-sm text-gray-700 hover:bg-orange-500 hover:text-white rounded-md"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index} className="relative group">
                    <RouterLink
                      to="/#projects"
                      className="cursor-pointer hover:text-orange-500"
                    >
                      {link.name}
                    </RouterLink>
                    <ul className="absolute top-full left-0 mt-3 bg-white border shadow-xl rounded-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-3 z-50 w-[500px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx}>
                          <RouterLink
                            to={item.to}
                            className="block w-full px-3 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white rounded-md"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

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

          {/* ✅ Social Icons on large screen */}
          <div className="ml-6 flex gap-4 text-xl text-gray-700">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
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
                            className="text-sm text-gray-700 hover:text-orange-500"
                          >
                            {item.name}
                          </RouterLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

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

          {/* ✅ Social Icons in Mobile Menu Bottom */}
          <div className="pt-6 border-t mt-4 flex justify-center gap-6 text-xl text-gray-700">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
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
