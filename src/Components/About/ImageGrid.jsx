import React from "react";

const ImageGrid = () => {
  const images = [
    "/public/logo/solid-works.png",
    "/public/logo/aveva-plant.png",
    "/public/logo/bentley.png",
    "/public/logo/intergraph.png",
    "/public/logo/auto-cad.png",
    "/public/logo/graphisoft.png",
    "/public/logo/autodesk.png",
    "/public/logo/tekla.png",
    "/public/logo/aspen.png",
    "/public/logo/staad.png",
    "/public/logo/caesar.png",
    "/public/logo/open-plant.png",
    "/public/logo/autodesk-3ds.png",
    "/public/logo/lfm.png",
    "/public/logo/leica.png",
    "/public/logo/micro-station.png",
    "/public/logo/aspen-analyser.png",
    "/public/logo/ansys.png",
    "/public/logo/nx.png",
    "/public/logo/autodesk-plant1.png",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 max-sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="bg-blue-50 hover:bg-white p-4 grid rounded-lg md:rounded-lg max-sm:rounded-lg place-items-center relative"
        >
          <div className="pb-[100%] grid-area-1" />
          <img
            src={src}
            alt=""
            className="w-full absolute justify-center items-center top-0 left-0 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;