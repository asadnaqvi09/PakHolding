import React from "react";
import heroImg from "../../assets/images/AboutImg.png";

function AboutHero() {
  return (
    <div className="aboutHero flex flex-col">
      {/* First Section: Hero with Background Image */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Welcome to Pakholding
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Dedicated to innovation, integrity, and excellence in investment and development across diverse sectors.
          </p>
        </div>
      </section>

      {/* Second Section: Green Background */}
      <section className="bg-[#033B2E] text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#B4D6C5] mb-2">Innovate</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Our Journey: Building a <br /> Brighter Future
            </h2>
          </div>
          <div>
            <p className="text-lg mb-6">
              At Pakholding, we are dedicated to transforming visions into reality.
              Our mission is to create sustainable value through innovative investments
              in retail, real estate, and lifestyle sectors.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 cursor-pointer border border-white rounded-full hover:bg-white hover:text-[#033B2E] transition">
                Learn More
              </button>
              <button className="px-6 py-2 rounded-full text-white flex items-center gap-2 cursor-pointer hover:text-[#B4D6C5] transition">
                Join Us <span className="text-xl">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutHero;
