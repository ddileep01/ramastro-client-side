import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/index.js";

const animations = [
  `fade-up`,
  `fade-down`,
  `fade-left`,
  `fade-right`,
  `fade-up-right`,
  `fade-up-left`,
  `fade-down-right`,
  `fade-down-left`,
  `zoom-in`,
  `zoom-in-up`,
  `zoom-in-down`,
  `zoom-in-left`,
  `zoom-in-right`,
  `zoom-out`,
  `zoom-out-up`,
  `zoom-out-down`,
  `zoom-out-left`,
  `zoom-out-right`,
  `slide-up`,
  `slide-down`,
  `slide-right`,
  `slide-left`,
  `flip-left`,
  `flip-right`,
  `flip-up`,
  `flip-down`,
];

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate();

  const [cards] = useState([
    {
      id: 1,
      imageUrl: "https://example.com/image1.jpg",
      title: "Card 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imageUrl: "https://example.com/image2.jpg",
      title: "Card 2",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: "https://example.com/image3.jpg",
      title: "Card 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ]);

  const bottomcards = [
    {
      imageUrl:
        "https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg",
      title: "Ask a Question",
      description:
        "Your paragraph goes here. Add details or information related to the question.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg",
      title: "Astro Predictions for an Hour",
      description:
        "Your paragraph goes here. Add details or information related to the question.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg",
      title: "Remedies",
      description:
        "Your paragraph goes here. Add details or information related to the question.",
    },
  ];

  const testimonials = [
    {
      content:
        "I wanted to marry a girl of my choice but our gun Milan came less than 18 points. My family was not agreeing to the marriage. We then met Ram astro and he cleared the doubts of my family by clarifying that gun Milan is a part of match-making and not the only criterion. Because of Pandit ji's valuable guidance, I am today married to the girl of my choice.",
    },
    {
      content:
        "I wanted to marry a girl of my choice but our gun Milan came less than 18 points. My family was not agreeing to the marriage. We then met Ram astro and he cleared the doubts of my family by clarifying that gun Milan is a part of match-making and not the only criterion. Because of Pandit ji's valuable guidance, I am today married to the girl of my choice.",
    },
    {
      content:
        "I wanted to marry a girl of my choice but our gun Milan came less than 18 points. My family was not agreeing to the marriage. We then met Ram astro and he cleared the doubts of my family by clarifying that gun Milan is a part of match-making and not the only criterion. Because of Pandit ji's valuable guidance, I am today married to the girl of my choice.",
    },
  ];

  const movetoallservices = () => {
    navigate("/allservices");
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#DC9814] text-center h-32">
        <p className="text-white pt-16">
          <br />
          <strong>₹100 OFF</strong> in Welcome Offer unlocked ⚡ Applicable on your first order.
        </p>
      </div>

      {/* Carousel */}
      <div className="mb-8">
        <Slider {...carouselSettings}>
          <div>
            <img
              src="https://www.starstell.com/assets/images/banner-marriage.webp"
              alt="Slide 1"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src="https://www.starstell.com/assets/images/banner-job-switch.webp"
              alt="Slide 2"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src="https://www.starstell.com/assets/images/banner-love.webp"
              alt="Slide 3"
              className="w-full h-96 object-cover"
            />
          </div>
        </Slider>
      </div>

      <div
        className="flex flex-col mb-4 md:flex-row md:space-x-4 p-4 md:p-8 justify-between items-center"
        style={{ backgroundColor: "#729aa6" }}
      >
        <img
          src="https://res.cloudinary.com/dryli2l24/image/upload/v1705670166/welcome-to-rajnagar-welcome-hand-11562969553eyjkkrcux0_rrpk0p.png"
          alt="welcome"
          className="h-40 md:mt-4 md:mr-16"
        />
        <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-xl md:text-2xl text-white font-bold mb-4">
            Enlightening Vedic Astrology Readings
          </h1>
          <p className="text-white">
            With many years of experience in Vedic astrology reading and many
            long-term clients, I am proud to be one of the top providers of
            astrology services around. I'm happy to welcome both those who are
            well-versed in their stars, planets, and houses as well as those who
            are brand new to this ancient form of esoteric knowledge. Whatever
            your previous experience, you will find my discreet and charming
            premises a sanctuary where you can let your mind relax and
            comfortably reflect on the bigger picture and deeper meaning in your
            life. Make an appointment through my booking form today.
          </p>
        </div>
      </div>

      <h1 className="mb-2 text-black ml-2 text-2xl">Our Services</h1>
      <div className="flex flex-col mb-4 md:flex-row md:space-x-4 p-4 md:p-8 items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-1/2 mb-2 md:w-1/3 p-4 h-48 bg-cover bg-center bg-no-repeat bg-gray-500 relative text-white overflow-hidden rounded-lg transition-all duration-300 hover:opacity-80"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 p-4">
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                {card.title}
              </h1>
              <p className="text-gray-300">{card.content}</p>
              <button
                className="border mt-4 border-[#FFD700] text-white hover:bg-[#FFD700] hover:text-black py-2 px-4 rounded-full"
                onClick={movetoallservices}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 md:flex md:space-x-4 p-4 md:p-8 items-center">
        {bottomcards.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <img
              src={card.imageUrl}
              alt="CardImage"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-sky-800 font-bold font-inter text-xl mb-4">
              {card.title}
            </h2>
            <p className="text-gray-600 mb-4">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 ">
        <Slider {...carouselSettings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-orange-300 sm:p-4 sm:h-auto md:p-8 md:h-48 flex justify-center text-center text-white"
            >
              <p className="self-center content-center">
                {testimonial.content}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-black mt-8 h-40 text-white p-4 text-center">
        © 2024 Your Website Name. All Rights Reserved.
      </div>
    </>
  );
};

export default Home;
