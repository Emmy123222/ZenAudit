import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-16 max-sm:px-4 max-sm:py-8">
      <div className="mx-auto flex justify-between gap-10 space-y-2 max-sm:flex-col max-sm:gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 max-sm:text-xl">
            ZenGuardAudit
          </h2>
          <p className="text-gray-400 text-sm max-sm:text-xs">
            Delivering precision engineered security for protocols
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 max-sm:text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#Product"
                className="text-gray-400 hover:text-white transition text-sm max-sm:text-xs"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="text-gray-400 hover:text-white transition text-sm max-sm:text-xs"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="text-gray-400 hover:text-white transition text-sm max-sm:text-xs"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 max-sm:text-lg">Social</h3>
          <div className="flex items-center space-x-4 max-sm:space-x-3">
            <motion.a
              href="https://www.linkedin.com/in/daniel-agantem-739726104/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl max-sm:text-xl"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/DAgantem1624"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl max-sm:text-xl"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </div>

      <hr className="border-2 border-gray-700 mt-8 max-sm:mt-6" />

      <div className="mt-10 pt-6 flex justify-between items-center gap-6 text-gray-400  max-sm:hidden max-sm:gap-4 ">
        <p className="text-sm max-sm:text-xs">© 2025 ZenGuardAudit</p>
        <a
          href="#"
          className="hover:text-white transition text-sm max-sm:text-xs"
        >
          Privacy Policy
        </a>
      </div>
      <div className="mt-10 pt-6 flex  items-center gap-6 text-gray-400 sm:hidden   max-sm:gap-4 max-sm:flex">
        <p className="text-sm max-sm:text-xs">© 2025 ZenGuardAudit</p>
        <a
          href="#"
          className="hover:text-white transition text-sm max-sm:text-xs"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
