import React, { useState } from 'react';

const Home = () => {
  const [selectedService, setSelectedService] = useState("Astrology");

  const services = [
    { id: 'astrology', label: 'Astrology', value: 'Astrology' },
    { id: 'vastu', label: 'Vastu', value: 'Vastu' },
    { id: 'gemstone', label: 'Gemstone', value: 'Gemstone' },
    { id: 'career', label: 'Career', value: 'Career' },
    { id: 'matchmaking', label: 'Matchmaking', value: 'Matchmaking' },
    { id: 'others', label: 'Others', value: 'Others' },
  ];

  const cards = [
    {
      imageUrl: 'https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg',
      title: 'Ask a Question',
      description: 'Your paragraph goes here. Add details or information related to the question.',
      price: '£5.00 ',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg',
      title: 'Astro Predictions for an Hour',
      description: 'It contains information about you as a person. Discussion about different areas of life, chat about the past, present and future happenings in life, strengths and weaknesses of yours as a person.',
      price: '£50.0 ',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg',
      title: 'Remedies',
      description: 'Initial rundown of issues that are currently running with advice on possible remedies to overcome the current Issues.',
      price: '£200 ',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dryli2l24/image/upload/v1705679445/desktop-wallpaper-solar-system-witchy-aesthetic-notebook-astrology-laptop-thumbnail_rsyl8h.jpg',
      title: 'Fulfilment of Remedies with Rituals',
      description: 'Spiritual rituals need to be performed as part of the remedy.',
      price: '', // Add a placeholder or remove the empty string based on your requirements
    },
  ];

  const handleServiceChange = (value) => {
    setSelectedService(value);
  };

  return (
    <div>
      {/* banner Section */}
      <div className="bg-cover bg-center h-80 flex flex-col items-center justify-center text-white" style={{ backgroundImage: 'url("https://res.cloudinary.com/dryli2l24/image/upload/v1705665116/hero-sec-bg-img_zfhaer.png")' }}>
        <h1 className="text-4xl mb-2">Ramastro</h1>
        <p className="text-lg">Write your description here...</p>
      </div>

      {/* Service Selection */}
      <div className="home-container mt-8">
        {/* Welcome Section */}
        <div className='flex flex-col md:flex-row mt-8 md:mt-16 pl-4 md:pl-32 pr-4 md:pr-32 justify-between items-center'>
          <img
            src="https://res.cloudinary.com/dryli2l24/image/upload/v1705670166/welcome-to-rajnagar-welcome-hand-11562969553eyjkkrcux0_rrpk0p.png"
            alt="welcome"
            className='h-40 md:mr-16'
          />
          <div className='md:w-1/2'>
            <h1 className='text-xl font-bold mb-4'>Enlightening Vedic Astrology Readings</h1>
            <p>
              With many years of experience in Vedic astrology reading and many long-term clients, I am proud to be one of the top providers of astrology services around. I'm happy to welcome both those who are well-versed in their stars, planets, and houses as well as those who are brand new to this ancient form of esoteric knowledge. Whatever your previous experience, you will find my discreet and charming premises a sanctuary where you can let your mind relax and comfortably reflect on the bigger picture and deeper meaning in your life. Make an appointment through my booking form today.
            </p>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className='flex flex-col mb-4 mt-8 md:mt-16 h-64 p-4 md:p-32 justify-center items-center' style={{ backgroundColor: '#0B3177' }}>
  <h1 className='text-xl text-white font-bold mb-4 md:mr-8'>Testimonials</h1>
  <div className='text-white text-center md:text-left'>
    <p className='mb-2 md:w-96' style={{color : "#D3D3D3"}}>
      I wanted to marry a girl of my choice but our gun Milan came less than 18 points. My family was not agreeing to the marriage. We then met Ram astro and he cleared the doubts of my family by clarifying that gun Milan is a part of match-making and not the only criterion. Because of Pandit ji's valuable guidance, I am today married to the girl of my choice.
    </p>
  </div>
</div>

        <h2 className='text-sky-800 font-bold font-inter ml-4 md:ml-32 text-xl mb-4'>Select Service</h2>
        <div className="flex flex-wrap mt-4 pl-4 md:pl-32 pr-4 md:pr-32">
          {services.map((service) => (
            <div key={service.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
              <div className={`custom_check_box flex border-gray-300 rounded p-4 ${selectedService === service.value ? 'bg-orange-500' : ''}`}>
                <input
                  type="radio"
                  className="mr-2"
                  name="select_service"
                  id={service.id}
                  value={service.value}
                  checked={selectedService === service.value}
                  onChange={() => handleServiceChange(service.value)}
                />
                <label className="w3-btn w3-round-large block w-full text-center py-2" htmlFor={service.id}>
                  {service.label}
                </label>
              </div>
            </div>
          ))}
        </div>

        

        
        {/* Expertise Section */}
        <div style={{ backgroundColor: '#0B3177' }}>
          <h2 className='text-sky-800 font-bold font-inter ml-4 md:ml-32 text-xl mb-4'>Expertise</h2>
          <div className='flex items-center justify-center'>
            <h1 className='mb-2 text-xl font-bold'>Vedic Astrology Advice</h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                <img
                  src={card.imageUrl}
                  alt="CardImage"
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-sky-800 font-bold font-inter text-xl mb-4">{card.title}</h2>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="text-black font-bold text-lg mb-4">{card.price}</div>
                <button
                  className="border border-[#FFD700] text-black hover:bg-[#FFD700] hover:text-black py-2 px-4 rounded-full "
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-center items-center '>
          <h2 className='text-sky-800 text-xl mb-2 font-bold'>Contact Us</h2>
          <h1 className='mb-2 text-lg mt-2 font-bold'>Ram Astro Jyotish Kendra</h1>
          <p className='mb-2 text-md font-bold'>City Office</p>
          <p className='mb-2 text-md font-bold text-[#565D6D]'>142, Akashneem Marg. DLF Phase-2 Sector 25. Gurugram, Haryana, 122002</p>

          <p className='mb-2 text-md font-bold'>Phone</p>
          <p className='mb-2 text-md font-bold text-[#565D6D]'>*91 - 9999097600</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
