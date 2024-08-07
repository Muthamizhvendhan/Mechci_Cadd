import React, { useState } from "react";

const Products = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.tabmenu || "");

  return (
    <>
      <div className="container mx-auto p-4">

        {/* Tab Menu */}
        <div className="flex justify-center border-b border-zinc-300">
          {data.map((item, index) => (
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
          {data.map((item, index) =>
            activeTab === item.tabmenu ? (
              <div id="cadd" className="tab-panel" key={index}>
                {/* Service cards for CADD */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-200 text-secondary-foreground p-6 rounded-lg">
                    <div className="flex flex-col space-y-2">
                      <h2 className="text-primary text-2xl font-bold">
                        {item.title}
                      </h2>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {item.listItems.map((listItem, index) => (
                          <li key={index}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default Products;