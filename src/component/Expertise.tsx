const service = [
  { title: "Solidity, Huff, and YulSmart Contract Analysis" },
  { title: "Cross-Chain Interoperability" },
  { title: "Advanced Testing Frameworks(Foundry)" },
];

const Expertise = () => {
  return (
    <section className="bg-black text-white py-16 space-y-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Expertise</h2>
      </div>
      <div className="flex justify-center gap-8 px-4 md:px-16 lg:px-32">
        {service.map((service, index) => (
          <div
            key={index} // Use index as the key
            className="relative bg-white bg-opacity-5 border border-black flex justify-center items-center  text-center p-6 rounded-[26px] w-[200px] h-[250px]"
          >
            {/* Service Title */}
            <p className="text-lg">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
