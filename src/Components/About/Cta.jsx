import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div
      className="flex items-center justify-center bg-gray-900 bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/cta.webp')",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center bg-cover bg-center dui-bg-fixed">
        <div className="p-8 bg-gray-900 bg-opacity-50 text-white text-center w-full max-w-full  ">
          <h1 className="text-4xl font-bold mb-4">Call to Action (CTA)</h1>
          <p className="text-lg mb-8">
            Jadilah bagian dari komunitas kami dan nikmati manfaat eksklusif.
          </p>
          <div className="flex gap-x-8 justify-center">
            <Link
              href="https://github.com/idugeni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-wide border border-white px-5 py-2 relative overflow-hidden transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                WhatsApp
              </span>
              <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100"></span>
            </Link>
            <Link
              href="https://github.com/idugeni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-wide border border-white px-5 py-2 relative overflow-hidden transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                Call
              </span>
              <span className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
