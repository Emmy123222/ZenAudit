import { motion } from "framer-motion";
import img from "../../src/assets/image2.png";
import Service from "./Service";
import Expertise from "./Expertise";
import WhyYouChoose from "./WhyYouChoose";
import Audit from "./Audit";
import Pay from "./Pay";
import Cataclysmic from "./Cataclysmic";

const Hero = () => {
  return (
    <div>
      <div
        className=" w-full relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-white flex flex-col justify-center h-full">
          <div className=" p-10 ">
            <motion.h1
              className="text-[50px] text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <strong>Delivering precision</strong>
            </motion.h1>

            <motion.h1
              className="text-[50px] text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }} // Add a delay for staggered animation
            >
              <strong>Engineered security for protocols</strong>
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <Service />
        <Expertise />
        <WhyYouChoose />
        <Audit />
        <Pay />
        <Cataclysmic />
      </div>
    </div>
  );
};

export default Hero;
