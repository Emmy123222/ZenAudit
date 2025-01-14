import { useNavigate } from "react-router-dom";
import img from "../assets/image1.png";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const navbarVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const navigate = useNavigate();
  const linkVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
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
          className="text-2xl font-bold hover:text flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={img} alt="" className="w-7 h-7 text-white" />
          ZenGuardAudit
        </motion.div>

        <motion.div
          className=" md:flex space-x-6 "
          initial="hidden"
          animate="visible"
        >
          <motion.div
            onClick={() => navigate("/product")}
            className="hover:text-blue-300 text-[20px] cursor-pointer"
            custom={0}
            variants={linkVariant}
            initial="hidden"
            animate="visible"
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
            initial="hidden"
            animate="visible"
          >
            Blog
          </motion.div>

          <motion.div
            onClick={() => navigate("/contact")}
            className="hover:text-blue-300 text-[20px] cursor-pointer"
            custom={2}
            variants={linkVariant}
            initial="hidden"
            animate="visible"
          >
            Contact
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          onClick={() => navigate("/getStarted")}
          className="hover:border-2 border-gray-400 text-white hover:text-gray-400 w-[150px] h-[50px] flex items-center text-[20px] justify-center rounded-[20px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Get Started
        </motion.div>

        {/* Hamburger Menu for Mobile */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
