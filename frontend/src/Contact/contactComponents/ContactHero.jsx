import React from 'react';
import bgImg from '../../assets/images/ContactHeroImg.jpg';
// import '../../Styles/Contact/ContactHero.css'; // Tailwind version used now

function ContactHero() {
  return (
    <div className="relative h-[400px] md:h-[450px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg}
          alt="Contact Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 text-white">
        <div className="max-w-2xl">
          {/* Small heading */}
          <p className="text-sm font-semibold uppercase mb-2">Connect</p>

          {/* Big heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>

          {/* Description */}
          <p className="text-lg mb-6">
            We're here to answer your questions and help you with your inquiries.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-[12px] border-t-[1.5px] border-r-[1.5px] border-l-[1.5px] border-b-[4px] border-[#0d9161] bg-[#11B67A] text-white font-medium hover:bg-[#0d9161] transition-colors duration-300 flex items-center justify-center">
              Contact
            </button>
            <button className="px-6 py-2 rounded-[12px] border border-white/20 border-b-4 font-medium text-white bg-transparent hover:bg-[#0d9161] transition-colors duration-300 cursor-pointer text-center">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;