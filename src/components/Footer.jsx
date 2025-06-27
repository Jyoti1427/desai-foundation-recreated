import React from "react";
import logo from "../assets/images/TheDesaiFoundation-log0.png";
import cert1 from "../assets/images/clientlogo1.png";
import cert2 from "../assets/images/candid-seal-platinum-2025.svg";
import cert3 from "../assets/images/Certification-Badge-MAR-2024-2025.png";
import cert4 from "../assets/images/siteVisitVerified_large-1.png";
import cert5 from "../assets/images/vetted_large-1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";
// import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Top Part */}
      <div className="max-w-7xl mx-auto flex justify-center px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 space-x-12 ">
          {/* Logo */}
          <div>
            <img src={logo} alt="Desai Logo" className="h-20 mb-4" />
            <p className="mb-4 text-base">
              <strong>
                The Desai Foundation is an organization that empowers women and
                children through community programming to elevate health,
                livelihood, and menstrual equity in rural India.
              </strong>
            </p>
            <button className="bg-white text-primary font-extrabold rounded-full px-5 py-3 mt-6 hover:bg-black hover:text-white uppercase">
              Donate Now
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-20">
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="font-bold text-base">
              300 Tradecenter, Suite 3450 Woburn, MA 01801
            </p>
            <p className="font-bold text-base">
              Phone: (781)-270-3655
            </p>
            <p className="font-bold text-base">
              <a href="https://mail.google.com/">Email: info@thedesaifoundation.org</a>
            </p>
          </div>
      
            {/* Quick Links */}
            <div className="mt-20">
              <h3 className="text-xl font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 font-bold">
                <li>
                  <div className="flex justify-start items-center gap-3">
                    <FaChevronRight className="text-white text-xl" />
                    <a href="#" className="hover:underline">
                      Our Programs
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-start items-center gap-3">
                    <FaChevronRight className="text-white text-xl" />
                    <a href="#" className="hover:underline">
                      Events
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex justify-start items-center gap-3">
                    <FaChevronRight className="text-white text-xl" />
                    <a href="#" className="hover:underline">
                      Ways to Donate
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="mt-20 ">
              <h3 className="text-xl font-bold mb-3">Social Media</h3>
              <ul className="space-y-2 font-bold">
                <li className="flex items-center gap-3">
                  <FaFacebook className="text-white text-xl" />
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaInstagram className="text-white text-xl" />
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaTwitter className="text-white text-xl" />
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedin className="text-white text-xl" />
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
        
        </div>
      </div>
      {/* Bottom Part */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 p-6 max-w-7xl mx-auto ">
        {/* Left: Copyright */}
        <p className="mb-12">
          &copy; {new Date().getFullYear()} Desai Foundation. All rights
          reserved.
        </p>

        {/* Right: Registration Images & Text */}
        <div className="flex flex-col py-12 items-center md:items-start">
          <div className="flex flex-wrap gap-5 mb-10">
            <img src={cert1} alt="Certification 1" className="h-24" />
            <img src={cert2} alt="Certification 2" className="h-24" />
            <img src={cert3} alt="Certification 3" className="h-24" />
            <img src={cert4} alt="Certification 4" className="h-24" />
            <img src={cert5} alt="Certification 5" className="h-24" />
          </div>
          <p className="text-center md:text-left">
            <strong>DESAI FOUNDATION </strong> is a registered 501(c)3
            organization
          </p>
          <p className="text-center md:text-left">
            <strong>Tax ID#: </strong> 04-3433749 80(G)
          </p>
          <p className="text-center md:text-left">
            <strong>Registered Number:</strong> E-31940(M) PAN Number:
            AACTT7301H.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
