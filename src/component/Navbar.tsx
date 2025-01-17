import { useNavigate } from "react-router-dom";
import img from "../assets/image1.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navbarVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const linkVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      className="text-white absolute top-0 left-0 right-0 z-50 bg-black bg-opacity-25 backdrop-blur-md"
      initial="hidden"
      animate="visible"
      variants={navbarVariant}
    >
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <motion.div
          onClick={() => navigate("/")}
          className="text-2xl font-bold flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={img} alt="Logo" className="w-7 h-7" />
          ZenGuardAudit
        </motion.div>

        {/* Hamburger Menu for Small Screens */}
        <div
          className="block sm:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>

        {/* Navigation Links */}
        <motion.div
          className={`hidden sm:flex space-x-6`}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            onClick={() => navigate("/product")}
            className="hover:text-blue-300 text-[20px] cursor-pointer"
            custom={0}
            variants={linkVariant}
          >
            Product
          </motion.div>
          <motion.div
            onClick={() => navigate("About")}
            className="hover:text-blue-300 text-[20px] cursor-pointer"
          >
            About
          </motion.div>
          <motion.div
            onClick={() => navigate("/blog")}
            className="hover:text-blue-300 text-[20px] cursor-pointer"
            custom={2}
            variants={linkVariant}
          >
            Blog
          </motion.div>
          <motion.div
            onClick={() => navigate("/contact")}
            className="hover:text-blue-300 text-[20px] cursor-pointer"
            custom={2}
            variants={linkVariant}
          >
            Contact
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          onClick={() => navigate("/getStarted")}
          className="max-sm:hidden text-[20px] hover:border-2 border-gray-400 text-white hover:text-gray-400 w-[150px] h-[50px] flex items-center justify-center rounded-[20px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Get Started
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-start px-4 space-y-3 mt-3 bg-black p-5 rounded-[26px] w-full">
          <div
            onClick={() => {
              navigate("/product");
              setMobileMenuOpen(false);
            }}
            className="text-white text-sm cursor-pointer hover:text-blue-300"
          >
            Product
          </div>
          <div
            onClick={() => {
              navigate("About");
              setMobileMenuOpen(false);
            }}
            className="text-white text-sm cursor-pointer hover:text-blue-300"
          >
            About
          </div>
          <div
            onClick={() => {
              navigate("/blog");
              setMobileMenuOpen(false);
            }}
            className="text-white text-sm cursor-pointer hover:text-blue-300"
          >
            Blog
          </div>
          <div
            onClick={() => {
              navigate("/contact");
              setMobileMenuOpen(false);
            }}
            className="text-white text-sm cursor-pointer hover:text-blue-300"
          >
            Contact
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
