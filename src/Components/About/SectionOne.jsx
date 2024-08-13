import React from "react";

const SectionOne = () => {
  return (
    <div className="sm:flex items-center justify-center max-w-screen-xl mx-auto">
      <div className="sm:w-1/2 sm:p-10 p-5 flex justify-center">
        <div className="image text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="Company" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5 flex flex-col items-center sm:items-start">
        <div className="text text-center sm:text-left">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;