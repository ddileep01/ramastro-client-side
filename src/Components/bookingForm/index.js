// BookingForm.js

import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    timeOfBirth: "",
    locationOfBirth: "",
    predictionType: "Parashara Method",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here, such as sending data to a server or displaying a confirmation message.
    console.log("Form submitted:", formData);
  };

  return (
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
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Lakshman"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Dasyam"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="lakshmandasyam@example.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-semibold mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="placeOfBirth"
                  className="block text-sm font-semibold mb-1"
                >
                  Place of Birth
                </label>
                <input
                  type="text"
                  placeholder="Write your place of birth here"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="timeOfBirth"
                  className="block text-sm font-semibold mb-1"
                >
                  Time of Birth
                </label>
                <input
                  type="time"
                  id="timeOfBirth"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="predictionType"
                  className="block text-sm font-semibold mb-1"
                >
                  Type of Prediction
                </label>
                <select
                  id="predictionType"
                  name="predictionType"
                  className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                  value={formData.predictionType}
                  onChange={handleChange}
                >
                  <option value="Parashara Method">Parashara Method</option>
                  <option value="Jaimini Method">Jaimini Method</option>
                  <option value="KP Method">KP Method</option>
                  <option value="Western Astrology">Western Astrology</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="999-999-999"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border p-2 w-full rounded focus:outline-none focus:border-green-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center md:text-left">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-700 focus:outline-none"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
