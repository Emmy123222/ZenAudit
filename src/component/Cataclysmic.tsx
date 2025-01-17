const Cataclysmic = () => {
  return (
    <div className="bg-black text-white py-16 px-5 relative">
      {/* Title */}
      <div className="relative p-[3px] rounded-lg bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-[length:200%_200%] animate-borderMove w-full max-w-4xl mx-auto">
        <div className="bg-black rounded-lg p-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold max-sm:text-2xl">
              Cataclysmic and Stateful Fuzzing
            </h1>
          </div>

          {/* Description */}
          <div className="text-center space-y-6 text-lg text-gray-300">
            <p>
              Smart Contract Fuzzing simulates millions of randomized and
              targeted transactions probing your system for critical flaws.
            </p>
            <p>
              In every engagement, fuzzing engineers construct a comprehensive
              stateful fuzzing suite for your Smart Contract system.
            </p>
            <p>
              This is how ZenGuard sees around corners and uncovers
              vulnerabilities invisible to the naked eye.
            </p>
            <p>
              Additionally, your fuzzing suite continues to provide continuous
              security coverage even after your Audit engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cataclysmic;
