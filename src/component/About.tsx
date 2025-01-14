
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
    <div id="About" className=" bg-black p-10  w-full h-screen ">
      {/* Title with Motion */}
      <motion.div
        className="flex  justify-center mt-40  "
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-white text-[50px]">
          <strong>{title}</strong>
        </h1>
      </motion.div>

      {/* Content with Motion */}
      {content.map((line, index) => (
        <motion.p
          key={index}
          className="text-white text-[30px] flex justify-center"
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
