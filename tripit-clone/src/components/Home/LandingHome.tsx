import React from 'react';
import bgImag from '../../assets/illu-homepage-hero.svg';

const LandingHome: React.FC = () => {
  return (
    <div className="relative mt-24 pt-1">
      <div className="flex bg-cover bg-center bg-no-repeat w-full md:h-[600px] lg:h-[700px] xl:h-[750px] text-black items-center md:bg-none md:block">
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImag})` }}
        ></div>
        <div className="relative ml-4 md:ml-[37em] px-4 md:px-8 lg:px-12 flex-col items-left text-left space-y-6 md:space-y-8 inline-block md:mt-[104px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
            An easier trip, <br className="hidden md:inline" /> each time
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-lg block">
            Imagine checking one place for your travel details and getting a heads up as things happen throughout your trip. See why life without TripIt is a distant memory for millions of travelers.
          </p>
          <div>
            <button className="bg-primary w-[60%] text-white px-6 py-3 box-border rounded-sm hover:bg-secondary transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;