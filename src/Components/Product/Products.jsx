import React, { useState } from "react";
import { widgetData1, widgetData2 } from "../../data/productData";
import Banner from "../common/Banner";

const Products = () => {
  const [activeTab, setActiveTab] = useState("cadd");

  return (
    // Tab Menu
    <>
      <Banner bannerImg="https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-704.jpg?t=st=1720250905~exp=1720254505~hmac=39ddfee013728820a7cadd7951a9222fae735dfc8b737807d7a483d17b0a38af&w=1380"/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Engineering Design
        </h1>
        {/* Tab Menu */}
        <div className="flex justify-center border-b border-zinc-300">
          <button
            className={`tab-button px-4 py-2 focus:outline-none ${
              activeTab === "cadd" ? "border-b-2 font-bold border-black" : ""
            }`}
            onClick={() => setActiveTab("cadd")}
          >
            CADD DESIGN
          </button>

          <button
            className={`tab-button px-4 py-2 focus:outline-none ${
              activeTab === "plant" ? "border-b-2 font-bold border-black" : ""
            }`}
            onClick={() => setActiveTab("plant")}
          >
            PLANT ENGINEERING DESIGN
          </button>
        </div>

        <div className="tab-content mt-4">
          {activeTab === "cadd" ? (
            <div id="cadd" className="tab-panel">
              {/* Service cards for CADD */}
              <div className="grid grid-cols-1 md:grid-row-2 lg:grid-cols-2 gap-4">
                {widgetData1.map((cardData, index) => (
                  <div className="bg-blue-200 text-secondary-foreground p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <img
                      src={cardData.imageSrc}
                      alt={cardData.imageAlt}
                      className="w-full md:w-1/3 rounded-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <h2 className="text-primary text-2xl font-bold">
                        {cardData.title}
                      </h2>

                      {cardData.description.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                      <p className="text-muted-foreground">
                        Our industrial design experts can assist in all of the
                        following areas:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {cardData.listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div id="plant" className="tab-panel">
              {/* Service cards for Plant */}
              <div className="grid grid-cols-1 md:grid-row-2 lg:grid-cols-2 gap-4">
                {widgetData2.map((cardData, index) => (
                  <div className="bg-blue-200 text-secondary-foreground p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <img
                      src={cardData.imageSrc}
                      alt={cardData.imageAlt}
                      className="w-full md:w-1/3 rounded-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <h2 className="text-primary text-2xl font-bold">
                        {cardData.title}
                      </h2>

                      {cardData.description.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                      <p className="text-muted-foreground">
                        Our industrial design experts can assist in all of the
                        following areas:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {cardData.listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
