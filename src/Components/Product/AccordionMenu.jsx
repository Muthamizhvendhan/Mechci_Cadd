import React, { useState } from "react";
import Accordion from "../Accoridon";
import AccordionList from "../Accordionmobile";
import Products from "./Products";
import Imagecards from "./Imagecards";
import { widgetData1,widgetData2 } from "../../data/productData";

const sections = [
  {
    title: "Area of Services",
    content: (
      <>
        <Products data={widgetData1}  />
      </>
    ),
  },
  {
    title: "Area of Business",
    content: (
      <>
        <Products data={widgetData2} />
      </>
    ),
  },
  {
    title: "Inhouse expertise teams",
    content: (
      <>
        <Imagecards />
      </>
    ),
  },
];

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordionMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Accordion />
      <AccordionList />

      <div className="accordion">
        <dl className="border border-gray-300">
          {sections.map((section, index) => (
            <div key={index}>
              <dt>
                <button
                  className={`accordion-title block w-full text-center p-4 bg-blue-500 border-b-2 text-white font-bold text-8xl max-sm:text-3xl max-md:text-5xl transition-colors duration-300 ${
                    activeIndex === index
                      ? "is-expanded bg-blue-600"
                      : "is-collapsed"
                  }`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion${index}`}
                  onClick={() => toggleAccordionMenu(index)}
                >
                  {section.title}
                </button>
              </dt>
              <dd
                className={`accordion-content transition-max-height duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "is-expanded max-h-auto"
                    : "is-collapsed max-h-0"
                }`}
                id={`accordion${index}`}
                aria-hidden={activeIndex !== index}
              >
                <div className="p-4 bg-gray-100">{section.content}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default AccordionMenu;
