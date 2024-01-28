import React, { useState, useEffect } from "react";
import service from "./data";

const Allservices = () => {
  useEffect(() => {
    console.log("services", service);
  });
  return (
    <div className="my-6 mx-10 lg:my-12 lg:mx-16">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold text-gray-700">SERVICES</h1>
        <p className="font-bold text-gray-500 pt-1">
          Navigate life's journey with celestial guidance and astrological
          wisdom.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-6 gap-4">
        {service.map((arr, fkey) => (
          <div
            className="relative hover:scale-105 transition-transform min-w-8 min-h-60"
            key={arr.id}
          >
            <div className="bg-cover bg-[url('https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-full">
              <div className="absolute inset-0">
                <div className="bg-black opacity-50 h-full"></div>
                <div className="absolute inset-0 text-white flex flex-col justify-around ml-4">
                  <div>
                    <h1 className="font-bold text-2xl ">{arr.headtag}</h1>
                    <p className="mb-5">{arr.paratag}</p>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="text-white py-2 px-6 rounded focus:outline-none hover:bg-green-700 bg-green-500"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
