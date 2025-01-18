import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const linkVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <motion.footer
      className="bg-black text-white py-10 px-16 max-sm:px-4 max-sm:py-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="mx-auto flex justify-between gap-10 space-y-2 max-sm:flex-col max-sm:gap-6">
        {/* Brand Section */}
        <motion.div
          className="cursor-pointer"
          onClick={() => handleNavigation("/")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 max-sm:text-xl">
            ZenGuardAudit
          </h2>
          <p className="text-gray-400 text-sm max-sm:text-xs">
            Delivering precision-engineered security for protocols
          </p>
        </motion.div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 max-sm:text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {["/product", "/about", "/contact"].map((path, index) => (
              <motion.li
                key={path}
                className="text-gray-400 hover:text-white transition text-sm max-sm:text-xs cursor-pointer"
                onClick={() => handleNavigation(path)}
                custom={index}
                variants={linkVariant}
              >
                {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </motion.li>
            ))}
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

      {/* Bottom Section */}
      <div className="mt-10 pt-6 flex justify-between items-center gap-6 text-gray-400 max-sm:gap-4">
        <p className="text-sm max-sm:text-xs">© 2025 ZenGuardAudit</p>
        <motion.a
          href="#"
          className="hover:text-white transition text-sm max-sm:text-xs"
          whileHover={{ scale: 1.1 }}
        >
          Privacy Policy
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
