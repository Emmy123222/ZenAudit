import { motion } from "framer-motion";
import img from "../assets/image5.png";

const services = [
  { title: "Comprehensive Smart Contract Audits" },
  { title: "Cross-Chain Protocol Reviews" },
  { title: "In-House Security Consulting" },
];
const service = [
  { title: "Gas Optimization Analysis" },
  { title: "Testing and Simulation with Foundry" },
];

const Service = () => {
  return (
    <section className="relative bg-black text-white py-16 space-y-6 ">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          fill="none"
          stroke="rgba(128,128,128,0.3)"
          strokeWidth="2"
        />
      </svg>

      <motion.div
        className="absolute top-2/2 left-0 transform -translate-y-1/2 -translate-x-3/2"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={img} alt="Left Cube" className="sm:hidden max-sm:w-12" />
        <img src={img} alt="Left Cube" className="w-40 max-sm:hidden" />
      </motion.div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold max-sm:text-2xl">Services Offered</h2>
      </div>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4 max-sm:gap-4 max-sm:flex-col">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white bg-opacity-5 border border-gray-600 rounded-[26px] flex justify-center items-center text-center p-6 w-[200px] h-[250px] max-sm:w-full max-sm:h-[200px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            <p className="text-lg max-sm:text-sm">{service.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 max-sm:gap-4 max-sm:flex-col">
        {service.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white bg-opacity-5 border border-gray-600 flex justify-center items-center text-center p-6 rounded-[26px] w-[200px] h-[250px] max-sm:w-full max-sm:h-[200px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: (services.length + index) * 0.2,
              ease: "easeInOut",
            }}
          >
            <p className="text-lg max-sm:text-sm">{service.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Right Floating Icon */}
      <motion.div
        className="absolute bottom-2/2 right-0 transform translate-y-1/2 translate-x-3/2"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={img} alt="Right Cube" className="sm:hidden max-sm:w-12" />
        <img src={img} alt="Left Cube" className="w-40 max-sm:hidden" />
      </motion.div>
    </section>
  );
};

export default Service;
