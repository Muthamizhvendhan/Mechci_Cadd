import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [enquiry, setEnquiry] = useState("");

  const handleEnquiryChange = (event) => {
    setEnquiry(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center p-6">
      <div className="p-8 max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 text-white rounded-lg md:rounded-r-none">
          <h2 className="text-xl font-bold mb-4">Hotline 24/7</h2>
          <p className="text-3xl font-bold mb-8">(+91) 44444 55555</p>
          <p className="mb-4">
            <strong>Address:</strong> 58 Lorem Ipsum, Lorem pisojsum, TN 1
          </p>
          <p className="mb-4">
            <strong>Email:</strong> contact@text.co
          </p>
          <p className="mb-4">
            <strong>Fax:</strong> fax@l.co
          </p>
          <p className="mb-4">
            <strong>Work Hour:</strong> Mon - Sat: 9:00 - 18:00
          </p>
          <Link to="https://maps.app.goo.gl/1ZQZBFrWazJdBhQZ8" target="_blank" className="text-white underline">
            GET DIRECTION
          </Link>
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Request Free Consultancy
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:mb-3"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <select
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={enquiry}
              onChange={handleEnquiryChange}
              required
            >
              <option value="" disabled>
                Your Enquiry about
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            <textarea
              placeholder="Write your inquiry here"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-zinc-800"
            >
              Request Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
