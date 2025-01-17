const Pay = () => {
  return (
    <div className="bg-black text-white py-16 px-5">
      <div className="relative p-[3px] rounded-lg bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-[length:200%_200%] animate-borderMove w-full max-w-4xl mx-auto">
        <div className="bg-black rounded-lg p-6">
          <div className="text-center mb-12">
            {/* Title */}
            <h1 className="text-4xl font-bold max-sm:text-2xl">
              Pay-Per-Vulnerability
            </h1>
          </div>

          {/* Description */}
          <div className="text-center space-y-4 text-lg">
            <p className="text-gray-300">
              ZenGuard offers two engagement pricing options: Flat-cost and
              Pay-per-vulnerability.
            </p>
            <div className="font-semibold text-2xl mt-6">
              {/* Option 1 */}
              <p>Think your code is unbreakable?</p>
              <p className="text-gray-400 text-lg mt-2">
                • Go with the Pay-per-vulnerability option
              </p>
            </div>
            <div className="font-semibold text-2xl mt-6">
              {/* Option 2 */}
              <p>Just want to fit us into your budget?</p>
              <p className="text-gray-400 text-lg mt-2">• Take the Flat-cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
