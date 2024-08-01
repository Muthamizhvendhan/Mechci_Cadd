import React from "react";
import Careercard from "../Components/Career/Careercard";

const Career = () => {
  return (
    <>
      <div className="bg-image">
        <div className="bg-gradient-to-r  py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-4xl font-bold mb-4 text-black">
                The best place for your{" "}
                <span className=" text-black px-2 py-1 rounded">future</span>
              </h1>
              <p className="text-lg mb-6">
                We help you to find the best job to build your future and build
                a better future of digital era.
              </p>
              <Careercard />

            </div>
            {/* <div className="flex justify-center items-center">
              <div className="card dark:bg-zinc-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        placeholder="E-Mail"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        id="phone"
                        placeholder="Contact I.D"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <select
                        id="subject"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      >
                        <option value>Domain</option>
                        <option value={"Value"}>others</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-full">
                    <input
                      type="file"
                      id="pdf"
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => {
                        const fileName = e.target.files[0].name;
                        document.getElementById("file-name").textContent =
                          fileName;
                      }}
                    />
                    <label
                      htmlFor="pdf"
                      className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none cursor-pointer"
                    >
                      Choose CV
                      <span
                        id="file-name"
                        className="ml-2 text-sm text-gray-500"
                      ></span>
                    </label>
                  </div>
                  <div>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="How can we help you?"
                      className="mt-1 pl-2 pt-2 block w-full rounded-3xl border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="button relative overflow-hidden h-12 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer"
                    >
                      <span className="button-content relative z-10">
                        Send Your Request
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
          <div className="mt-12 card bg-blue-200 rounded-lg py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-blue-400">
              <div>
                <h2 className="text-3xl font-bold">1,9K+</h2>
                <p className="mt-2">Placements</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">276K+</h2>
                <p className="mt-2">Job Seekers Active</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">3,4K+</h2>
                <p className="mt-2">Incorporated Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
