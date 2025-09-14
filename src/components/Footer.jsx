import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const footerData = {
    company: "Revatix",
    year: "2025",
    info: [
      { label: "Address:", value: "Raghuvanshi Chokadi, Bhuj. 370001", isLink: false },
      { label: "Contact:", value: "+91 99251 32277", isLink: true, href: "tel:+919925132277" },
      { label: "Email:", value: "support@revatix.in", isLink: true, href: "mailto:support@revatix.in" },
    ],
    socials: [
      { icon: <FaFacebookF />, href: "https://facebook.com", hoverColor: "hover:from-blue-500 hover:to-blue-700" },
      { icon: <FaTwitter />, href: "https://twitter.com", hoverColor: "hover:from-sky-400 hover:to-sky-600" },
      { icon: <FaLinkedinIn />, href: "https://linkedin.com", hoverColor: "hover:from-blue-600 hover:to-blue-800" },
      { icon: <FaInstagram />, href: "https://instagram.com", hoverColor: "hover:from-pink-500 hover:to-pink-700" },
      { icon: <FaPhoneAlt />, href: "tel:+919925132277", hoverColor: "hover:from-green-400 hover:to-green-600" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-indigo-400">
            {footerData.company}
          </span>
        </div>

        {/* Info links */}
        <div className="flex flex-wrap justify-center gap-6 text-md mb-8">
          {footerData.info.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="font-semibold text-white">{item.label}</span>
              {item.isLink ? (
                <a href={item.href} className="cursor-pointer transition-colors duration-300">
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {footerData.socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 flex items-center justify-center rounded-full text-white text-lg transition-all duration-300 transform hover:scale-110 
                bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-md ${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-4 text-md">
          &copy; {footerData.year} {footerData.company}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
