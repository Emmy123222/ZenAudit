import { motion } from "framer-motion";
import img from "../../src/assets/image2.png";

const Contact = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="w-full relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
      initial="hidden"
      animate="visible"
      variants={containerVariant}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center overflow-x-hidden">
        <div className="p-28 space-y-12">
          {/* Contact Header */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white text-[25px] border-4 border-black rounded-full w-[150px] h-[50px] flex items-center justify-center">
              Contact
            </p>
          </motion.div>
          <motion.h2
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Get in touch
          </motion.h2>

          {/* Google Form */}
          <motion.div
            className="w-full max-w-4xl mx-auto bg-white p-5 rounded-[26px] shadow-lg max-sm:w-fit"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdgPZ63ZDEST4HUJgA-ccWWNbaCbP-9DGjXYELljDShZS9Nfw/viewform?embedded=true"
              width="400"
              height="400"
              className="max-sm:w-fit "
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
