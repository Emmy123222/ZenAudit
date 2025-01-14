import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 p-16 ">
      <div className=" mx-auto px-6 flex gap-10 justify-between space-y-2">
        <div className="">
          <h2 className="text-2xl font-bold mb-4">ZenGuardAudit</h2>
          <p className="text-gray-400">
            Delivering precision engineered security for protocols
          </p>
          {/* <p className="text-gray-400 mt-2">New York, New York</p> */}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#Product"
                className="text-gray-400 hover:text-white transition"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social</h3>
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/daniel-agantem-739726104/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/DAgantem1624"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </div>
      <hr className="border-2 border-gray-700 mt-8" />
      <div className="mt-10  pt-6 flex gap-6 text-gray-400">
        <p>© 2025 ZenGuardAudit</p>
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
