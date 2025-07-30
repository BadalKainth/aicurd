// src/components/Navbar.jsx
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ProjectsData from "../pages/ProjectData";

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
        <ul className="hidden lg:flex space-x-6 font-medium">
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
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="lg:hidden flex flex-col px-6 pb-6 space-y-4 bg-white">
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
      )}
    </nav>
  );
};

export default Navbartest;
