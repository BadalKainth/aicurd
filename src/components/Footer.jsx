import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map Section */}
        <div className="w-full h-64 lg:h-80 rounded overflow-hidden shadow-lg">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9700176735428!2d77.2023660749567!3d28.630660684166596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd500690e88d%3A0x2d8093efcf43c80c!2s16%2C%20Bhai%20Vir%20Singh%20Marg%2C%20Sector%204%2C%20Gole%20Market%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1753876556499!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Info Section */}
        <div className="flex flex-col items-center lg:items-start justify-between space-y-6 ">
          <div className="text-center poppins-regular lg:text-left">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white border-b pt-4 border-gray-100">
              AICURD Foundation
            </h2>
            <p className="mt-2 poppins-regular text-md text-gray-100 ">
              Address: 16, Bhai Veer Singh Marg, Gol Market, New Delhi - 110001
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6  text-xl">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center poppins-regular text-sm text-gray-100 mt-10 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} AICURD Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
