import React from "react";

const EmpowerSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold  mb-4">
          Empowering businesses through global trade
        </h2>
        <p className=" max-w-2xl mx-auto">
          Alibaba.com offers one-stop B2B trading solutions for global small and
          medium-sized businesses, empowering them to transform through digital
          trade, grasp opportunities, and accelerate growth internationally.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Card */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15865.jpg"
            alt="Business team"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white w-full">
            <p className="text-orange-400 text-xs mb-1">OUR MISSION</p>
            <h3 className="text-xl font-semibold">
              Make it easy to do business anywhere.
            </h3>
          </div>
        </div>

        {/* Text Block */}
        <div className="grid gap-6">
          {/* Locations Card */}
          <div className="bg-[#fff3f0] p-6 rounded-xl">
            <p className="text-orange-500 text-xs mb-1">OUR LOCATIONS</p>
            <h3 className="text-2xl font-semibold text-[#4e2600] mb-3">
              We have teams around the world.
            </h3>
            <p className="text-gray-600 text-sm">
              Hangzhou, China <br />
              Paris, France <br />
              Munich, Germany <br />
              Tokyo, Japan <br />
              Seoul, Korea <br />
              London, UK <br />
              New York, US <br />
              ... <br />
              and many other locations worldwide.
            </p>
          </div>

          {/* ESG Promise Card */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/wind-turbine_1127-4002.jpg"
              alt="Wind Turbine"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white w-full">
              <p className="text-orange-400 text-xs mb-1">OUR ESG PROMISES</p>
              <h3 className="text-xl font-semibold">
                Responsible technology. Sustainable future.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerSection;
