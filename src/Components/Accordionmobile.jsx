import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const items = [
  {
    id: "item1",
    title: "Engineering Design",
    images: [
      {
        src: "http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg",
        title: "Engineering Design",
        content:
          "We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.",
      },
    ],
    background: "#FFF",
  },
  {
    id: "item2",
    title: "HR Employment",
    images: [
      {
        src: "http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg",
        title: "Engineering Design",
        content:
          "We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.",
      },
    ],
    background: "#FFF",
  },
  {
    id: "item3",
    title: "HR Employment",
    images: [
      {
        src: "http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg",
        title: "Engineering Design",
        content:
          "We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.",
      },
    ],
    background: "#FFF",
  },
  {
    id: "item4",
    title: "HR Employment",
    images: [
      {
        src: "http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg",
        title: "Engineering Design",
        content:
          "We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.",
      },
    ],
    background: "#FFF",
  },
  {
    id: "item5",
    title: "HR Employment",
    images: [
      {
        src: "http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg",
        title: "Engineering Design",
        content:
          "We have identified precise customer personas based on demographics, behaviours, and pain points, allowing us to tailor our messaging effectively. We have identified precise customer personas based on demographics, behaviours, and pain points.",
      },
    ],
    background: "#FFF",
  },
];

const Accordionmobile = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <ul className="block lg:hidden list-none p-0 m-0">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <input
            type="checkbox"
            id={item.id}
            className="hidden"
            checked={activeItem === item.id}
            onChange={() => handleToggle(item.id)}
          />
          <label
            htmlFor={item.id}
            className={`block p-4 border rounded cursor-pointer transition duration-150 ease-in-out ${
              activeItem === item.id ? "bg-white shadow-lg" : "bg-gray-200"
            } ${item.background}`}
          >
            <div
              className={`absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 transition-transform duration-300 ease-in-out ${
                activeItem === item.id ? "rotate-0" : "rotate-90"
              }`}
            ></div>
            <h2
              className={`text-center text-3xl transition-transform duration-300 ease-in-out ${
                activeItem === item.id
                  ? "text-white text-3xl"
                  : "text-gray-700 text-xl"
              }`}
            >
              {item.title}
            </h2>
          </label>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeItem === item.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="p-0">
              {item.images.map((image, index) => (
                <li key={index} className="relative w-full h-[500px]">
                  <a
                    href={image.src}
                    title={image.title}
                    className="block w-full h-full bg-gray-300 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.src})` }}
                  >
                    {image.content && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 text-white p-4 text-center">
                        <div className="mb-4">
                          <h2 className="text-3xl">{image.title}</h2>
                          <p className="text-sm">{image.content}</p>
                        </div>
                        <button className="relative overflow-hidden h-11 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer group">
                          <span className="relative z-10">Click Me</span>
                          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#965DE9] to-[#6358EE] transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                        </button>
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordionmobile;
