import img from "../assets/image5.png";
import { motion } from "framer-motion";

const Audit = () => {
  const cards = [
    {
      title: "DEDICATED AUDIT TEAM",
      description:
        "A minimum of two (2) full-time security researchers will be assigned to this engagement. For projects with a larger scope, additional researchers will be allocated to ensure comprehensive coverage.",
    },
    {
      title: "MITIGATION SUPPORT",
      description:
        "We will collaborate with your development team during a mutually agreed-upon mitigation period to assist in implementing minor fixes and recommended improvements.",
    },
    {
      title: "SEAMLESS COMMUNICATION",
      description:
        "Our team will maintain consistent communication with your development team to provide clarity and ensure timely resolution of identified issues.",
    },
    {
      title: "TESTING SUITE PROVISION",
      description:
        "We will share the testing suite utilized during the audit, including any custom scripts or tools developed specifically for your project (e.g., Echidna, Foundry, Medusa).",
    },
    {
      title: "COMPREHENSIVE DELIVERABLES",
      description:
        "At the conclusion of the audit, a detailed report will be provided, outlining all identified vulnerabilities, their severity levels, and recommended remediation steps.",
    },
    {
      title: "POST-AUDIT SUPPORT",
      description:
        "We will remain available to address follow-up questions or provide clarifications after the final report is delivered.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-5 relative">
      <motion.div
        className="absolute top-1/2 left-0 transform translate-y-1/2 translate-x-3/2 bottom-0  bg-transparent"
        animate={{
          rotate: [0, 360], // Full spin
        }}
        transition={{
          duration: 5, // Time for one full spin
          repeat: Infinity, // Infinite looping
          ease: "linear", // Smooth constant speed
        }}
      >
        <img src={img} alt="Right Cube" className="w-40" />
      </motion.div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Audit Engagement Overview</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-0 border border-gray-400 text-gray-300 p-6 rounded-[26px] shadow-lg"
          >
            <h3 className="text-orange-400 font-semibold text-lg mb-2">
              {card.title}
            </h3>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
      <motion.div
        className="absolute bottom-1/2 right-0 transform translate-y-1/2 translate-x-3/2 top-0 bg-transparent"
        animate={{
          rotate: [0, 360], // Full spin
        }}
        transition={{
          duration: 5, // Time for one full spin
          repeat: Infinity, // Infinite looping
          ease: "linear", // Smooth constant speed
        }}
      >
        <img src={img} alt="Right Cube" className="w-40" />
      </motion.div>
    </div>
  );
};

export default Audit;
