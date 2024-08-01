import React from "react";

const data = [
  {
    id: 1,
    title: "CIVIL",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    expectations: [
      "Manage construction projects",
      "Ensure compliance with safety regulations",
      "Coordinate with engineers and architects",
    ],
    icon: "/engineer.png",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
  {
    id: 2,
    title: "ELECTRICAL",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    expectations: [
      "Design electrical systems",
      "Ensure compliance with safety regulations.",
      "Ensure compliance with safety regulations.",
    ],
    icon: "/engineer.png",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
  {
    id: 3,
    title: "MECH",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    expectations: [
      "Design mechanical systems",
      "Ensure compliance with safety regulations.",
      "Ensure compliance with safety regulations.",
    ],
    icon: "/engineer.png",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
  {
    id: 4,
    title: "ELECTRONIC",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    expectations: [
      "Develop electronic systems",
      "Test and evaluate prototypes",
      "Work on circuit design and integration",
    ],
    icon: "/engineer.png",
    bgColor: "bg-card",
    textColor: "text-muted-foreground",
  },
  // Add more items as needed
];
const Careercard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${item.bgColor} rounded-lg shadow-lg p-6 bg-white`}
        >
          <div className="flex items-center mb-4 bg-[#f6f6f7] rounded-lg p-1">
            <img
              src={item.icon}
              alt={item.iconAlt || "icon"}
              className="w-10 h-10 mr-2"
            />
            <h2 className="text-xl font-bold">{item.title}</h2>
          </div>
          <div className="bg-[#929cf02e] p-1 rounded-lg mb-4">
            <p className={`${item.textColor} mb-4 text-md font-semibold`}>
              {item.expectations[0]} {/* To be used as a heading or title */}
            </p>
            <ul
              className={`${item.textColor} mb-4 text-sm text-justify list-disc pl-5`}
            >
              {item.expectations.slice(1).map((expectation, index) => (
                <li key={index}>{expectation}</li>
              ))}
            </ul>
            <p className={`${item.textColor} mb-4 text-sm text-justify`}>
              {item.content}
            </p>
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="button relative overflow-hidden h-12 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer"
            >
              <span className="button-content relative z-10">Apply Now</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Careercard;
