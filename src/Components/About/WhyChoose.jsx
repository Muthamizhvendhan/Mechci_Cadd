import React from "react";
import PrimaryBtn from "../common/buttons/PrimaryBtn";

const WhyChoose = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12  bg-white dark:bg-zinc-900">
      <div className="flex-1 flex justify-center items-center relative ">
        <div className="absolute w-72 h-72 md:w-96  md:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
        <div className="relative grid  gap-4">
          <img
            src="https://placehold.co/250x250?text=Solidworks"
            alt="Shopify logo"
            className="w-full rounded-full bg-green-500 p-2"
          />
        </div>
      </div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-12">
        <h3 className="text-blue-500 dark:text-blue-400 uppercase text-sm font-semibold">
          Why Choose Us
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 mt-2">
          Boost Your Business
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          With Team Mechci
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 mt-4">
          Our team can assist you in transforming your business through latest
          Design capabilities to stay ahead of the curve.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>{" "}
            Latest Design Solutions & Integration for Corporate Needs
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>{" "}
            Over 100+ Possible Support
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>{" "}
            Latest Design Solutions 
          </li>
          <li className="flex items-center text-zinc-800 dark:text-zinc-100">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>{" "}
            Dedicated Support
          </li>
        </ul>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-5">
          <PrimaryBtn text="Services"/>
        </div>

      </div>
    </div>
  );
};

export default WhyChoose;
