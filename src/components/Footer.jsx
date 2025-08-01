import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "Home", scrollTo: "home" },
  { name: "About", scrollTo: "about" },
  { name: "President", scrollTo: "president" },
  { name: "Blogs", scrollTo: "blogs" },
  { name: "Donate", scrollTo: "donate" },
  { name: "Contact", scrollTo: "contact" },
];

const Footer = () => {
  return (
    <footer className="poppins-regular lg:grid-cols-[auto,1fr,1fr] lg:justify-center lg:items-center lg:items-center bg-orange-500 text-white py-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto,1fr,1fr] lg:justify-center lg:items-center lg:items-center lg:text-center gap-10">
        {/* Nav Links */}
        <div className="flex flex-col gap-4 lg:px-10 sm:flex text-sm font-medium w-60">
          <div className="flex lg:ml-32 lg:text-start gap-2">
            {links.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.scrollTo}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-neutral-700"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col items-center  space-y-6 text-center lg:text-left">
          <div className="flex flex-col items-center  space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white border-b pt-4 border-gray-100">
              AICURD Foundation
            </h2>
            <p className="mt-2 poppins-regular text-md text-gray-100">
              Address: 16, Bhai Veer Singh Marg, <br />
              Gol Market, New Delhi - 110001
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 text-xl">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neutral-700 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neutral-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neutral-700 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-30 lg:w-2/3 lg:h-40  rounded overflow-hidden shadow-lg">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9700176735428!2d77.2023660749567!3d28.630660684166596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd500690e88d%3A0x2d8093efcf43c80c!2s16%2C%20Bhai%20Veer%20Singh%20Marg%2C%20Sector%204%2C%20Gole%20Market%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1753876556499!5m2!1sen!2sin"
            width="100%"
            height="auto"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center poppins-regular text-sm text-gray-100 mt-10 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} AICURD Foundation. All rights reserved to
        SSBPO.
      </div>
    </footer>
  );
};

export default Footer;
