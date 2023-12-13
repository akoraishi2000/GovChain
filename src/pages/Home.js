import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="mx-auto  text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            GovChain
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            A Transparent and Secured Governing System
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
