import React, { useState } from "react";
import { widgetData1 } from "../../data/productData";
// import Banner from "../common/Banner";
// import Accordion from "../Accoridon";
// import AccordionList from "../Accordionmobile";
// import AccordionMenu from "./AccordionMenu";

const Products = () => {
  const [activeTab, setActiveTab] = useState("Tab Menu 1");

  return (
    // Tab Menu
    <>
      {/* <Banner bannerImg="https://img.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-704.jpg?t=st=1720250905~exp=1720254505~hmac=39ddfee013728820a7cadd7951a9222fae735dfc8b737807d7a483d17b0a38af&w=1380"/> */}
      {/* <Accordion /> */}
      {/* <AccordionList /> */}
      {/* <AccordionMenu/> */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Engineering Design
        </h1>
        {/* Tab Menu */}
        <div className="flex justify-center border-b border-zinc-300">
          {widgetData1.map((item, index) => (
            <button
              key={index}
              className={`tab-button px-4 py-2 focus:outline-none ${
                activeTab === item.tabmenu
                  ? "border-b-2 font-bold border-black"
                  : ""
              }`}
              onClick={() => setActiveTab(item.tabmenu)}
            >
              {item.tabmenu}
            </button>
          ))}
        </div>

        <div className="tab-content mt-4">
          {widgetData1.map((item, index) =>
            activeTab === item.tabmenu ? (
              <div id="cadd" className="tab-panel" key={index}>
                {/* Service cards for CADD */}
                <div className="grid grid-cols-1 md:grid-row-1 lg:grid-cols-1 gap-4">
                  <div className="bg-blue-200 text-secondary-foreground p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full md:w-1/2 max-sm:w-full rounded-lg"
                    />
                    <div className="flex flex-col space-y-2 w-1/2 max-sm:w-full">
                      <h2 className="text-primary text-2xl font-bold">
                        {item.title}
                      </h2>

                      {item.description.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground text-justify"
                        >
                          {paragraph}
                        </p>
                      ))}
                      <p className="text-muted-foreground">
                        Our industrial design experts can assist in all of the
                        following areas:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {item.listItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
