import { motion } from "framer-motion";

const About = () => {
  const title = "About Us";
  const content = [
    "ZenGuardAudits specializes in providing top-tier smart contract security",
    "audits, ensuring robust, reliable, and trustless solutions for",
    "decentralized applications. Our expertise spans across multiple",
    "blockchains and protocols, delivering unmatched security and efficiency",
    "for our clients.",
  ];

  return (
    <div id="About" className="bg-black p-10 w-full ">
      {/* Title with Motion */}
      <motion.div
        className="flex justify-center mt-40 max-sm:mt-20"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-white text-[50px] max-sm:text-[30px] text-center">
          <strong>{title}</strong>
        </h1>
      </motion.div>

      {/* Content with Motion */}
      {content.map((line, index) => (
        <motion.p
          key={index}
          className="text-white text-[30px] max-sm:text-[18px] flex justify-center text-center max-sm:px-4"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: index * 0.2 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default About;
