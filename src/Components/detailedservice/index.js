import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import servicesData from "./data";

const DetailedService = () => {
  const location = useLocation();
  let selectedService = location.state;
  const servicedata = servicesData.find((e) => e.id == selectedService.id);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-8 rounded">
        {/* Image Section */}
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <img
            src={servicedata.imageurl}
            className="w-full h-full object-cover rounded"
            alt="service-image"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            {servicedata.title}
          </h2>
          <p>{servicedata.description}</p>
          <div className="text-center md:text-left mt-8">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-700 focus:outline-none"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedService;
