import React, { useState } from "react";

const DetailedService = () => {
    return(
        <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-8 rounded">
        {/* Image Section */}
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <img
            src="https://www.horoscope.com/wp-content/uploads/sites/2/2020/08/matchmaking-768x512.jpg"
            className="w-full h-full object-cover rounded"
            alt="service-image"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Matchmaking Service
          </h2>
          <p>
          Encouraging individuals to ask questions entails fostering a culture of clarity and precision, steering away from vague or ambiguous statements. For instance, a well-articulated inquiry might involve seeking guidance on a specific event, such as determining the optimal timing for a knee surgery. By emphasizing the importance of precision in questioning, individuals can ensure that the responses they receive are equally detailed and insightful, ultimately leading to more informed decisions and actions.
          </p>
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
    )
}

export default DetailedService