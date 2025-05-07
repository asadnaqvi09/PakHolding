import React from "react";
import heroImg from "../../assets/images/AboutImg.png";

function AboutHero() {
  return (
    <>
      <div className="aboutHero flex flex-col">
        {/* first section */}
        <section className="relative h-[400px] w-full">
          {/* Hero Image with container for overlay */}
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            {/* Light black overlay (rgba(0,0,0,0.3) for 30% opacity) */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-30"></div>
          </div>

          {/* Overlay Text */}
          <div className="relative z-10 flex h-full flex-col text-white font-medium items-center justify-center text-center px-4">
            <h1 className="text-2xl md:text-4xl  mb-4">
              Welcome to Pakholding
            </h1>
            <p className="text-md md:text-xl mb-8 max-w-2xl">
              Dedicated to innovation, integrity, and excellence in investment
              and development across diverse sectors.
            </p>
          </div>
        </section>

        {/* second section */}
        <section className="hero-desktop-content">
          <div className="flex flex-col">
            <h2 className="hero-desktop-subtitle text-sm font-bold">
              Innovate
            </h2>
            <h1 className="hero-desktop-subtitle text-2xl md:text-4xl font-bold mb-4">
              Our Journey : Building a <br />
              <span className="hero-desktop-title-line">Brighter Future</span>
            </h1>
          </div>
          <div className="hero-desktop-text-content">
            <p className="hero-desktop-description">
              At Pakholding, we are dedicated to transforming visions into
              reality. Our mission is to create sustainable value through
              innovative investments in retail, real estate, and lifestyle
              sectors.
            </p>

            <div className="hero-desktop-buttons">
              <button className="hero-button secondary-button">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );

}
export default AboutHero;
