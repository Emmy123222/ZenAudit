import { motion } from "framer-motion";
import img from "../../src/assets/image2.png";

const Contact = () => {
  // Variants for animations
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6 },
    },
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
      <div className="relative z-10 flex flex-col justify-center items-center">
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

          {/* Form */}
          <motion.form className="space-y-6">
            <div className="flex flex-col gap-6">
              {/* First Name */}
              <motion.input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 h-[60px] rounded-[24px] bg-black/40 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-black focus:outline-none"
                variants={inputVariant}
              />
              {/* Last Name */}
              <motion.input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 h-[60px] rounded-[24px] bg-black/40 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-black focus:outline-none"
                variants={inputVariant}
              />
            </div>
            {/* Email Address */}
            <motion.input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 h-[60px] rounded-[24px] bg-black/40 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-black focus:outline-none"
              variants={inputVariant}
            />
            {/* Company */}
            <motion.input
              type="text"
              placeholder="Company"
              className="w-full px-4 py-2 h-[60px] rounded-[24px] bg-black/40 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-black focus:outline-none"
              variants={inputVariant}
            />
            {/* Message */}
            <motion.textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 h-[60px] rounded-[24px] bg-black/40 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-black focus:outline-none"
              variants={inputVariant}
            ></motion.textarea>
            {/* Submit Button */}
            <motion.div
              className="flex justify-center items-center"
              variants={buttonVariant}
            >
              <button
                type="submit"
                className="w-[300px] h-[60px] py-3 bg-black text-white font-bold text-lg rounded-[24px] transition duration-300"
              >
                Submit
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
