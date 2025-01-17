const WhyYouChoose = () => {
  const content =
    "At ZenGuardAudits, we bring together a team of skilled security researchers with extensive experience in safeguarding blockchain projects. We prioritize both security and efficiency, leveraging cutting-edge testing frameworks and advanced simulation techniques to deliver exceptional results.";
  const contents =
    "Our meticulous approach ensures that your project is not only secured against potential vulnerabilities but also optimized for seamless performance in real-world deployments.";

  return (
    <div className="bg-black text-white py-16 px-5">
      {/* Animated Border Container */}
      <div className="relative p-[3px] rounded-lg bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-[length:200%_200%] animate-borderMove w-full max-w-4xl mx-auto">
        {/* Inner Static Content */}
        <div className="bg-black rounded-lg p-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold max-sm:text-2xl">Why Choose Us</h2>
          </div>
          <div className="text-lg text-gray-300 space-y-4">
            <p>{content}</p>
            <p>{contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYouChoose;
