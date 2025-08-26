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
    <footer className="poppins-regular lg:grid-cols-[auto,1fr,1fr] lg:justify-center lg:items-center bg-orange-500 text-white py-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto,1fr,1fr] lg:justify-center lg:items-center  lg:text-center gap-10">
        {/* Nav Links */}
        <div class="flex flex-row max-w-7xl lg:flex lg:flex-col justify-center lg:pl-7 font-semibold lg:text-start gap-2">
          <div className="flex flex-row  lg:flex lg:flex-col  lg:ml-32 lg:text-start gap-2">
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
        <div className="flex flex-col items-center space-y-6 text-center lg:text-left">
          <div className="flex flex-col items-center space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white border-b border-gray-100">
              AICURD
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
              href="https://www.facebook.com/profile.php?id=61579795409472"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neutral-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/aicurdngo/"
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
            title="AICURD Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9701739684465!2d77.20494099999999!3d28.630656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x831f89b0d939c61f%3A0xbf5baa3264801f73!2sAICURD%20NGO%20ALL%20INDIA%20CENTRE%20FOR%20URBAN%20AND%20RURAL%20DEVELOPMENT!5e0!3m2!1sen!2sin!4v1756189037827!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center poppins-regular text-sm text-gray-100 mt-10 border-t pt-4 border-gray-200">
        © {new Date().getFullYear()} AICURD Foundation. All rights reserved to
        <span className="font-bold tracking-wide text-gray-50"> SSBPO.</span>
      </div>
    </footer>
  );
};

export default Footer;
