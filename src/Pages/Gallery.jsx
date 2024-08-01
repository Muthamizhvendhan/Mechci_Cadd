import React from "react";

const images = [
  {
    src: "https://img.freepik.com/free-photo/pier-lake-hallstatt-austria_181624-44201.jpg?w=1380&t=st=1722513523~exp=1722514123~hmac=7a125202c85a5bc9482d45b04b46ea1a49d6a156f414a644c525862b118bf571",
    label: "",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2150787888.jpg?t=st=1722513557~exp=1722517157~hmac=dc2e200075feff3d904c7aee609cc4a4bb38b59f82f9f18efa92985e1be14c51&w=1380",
    label: "",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-sea-side-landscape_23-2150724725.jpg?t=st=1722513539~exp=1722517139~hmac=b4532aa9f12a9c4991513e8cbcf397079581f7cf361235542fd1fde4373a8941&w=1800",
    label: "",
  },
  {
    src: "https://img.freepik.com/free-photo/brown-wooden-dock_198523-110.jpg?t=st=1722513559~exp=1722517159~hmac=5711b71afc49d8fe8a73edc19e0bad0362e3cb618bde3488c7bb4c8ec4ac3275&w=1380",
    label: "",
  },

  {
    src: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151089.jpg?t=st=1722513599~exp=1722517199~hmac=9602ccc9458715cb278a9a6b84b0a8344815686ce3bbddabf594f06fdfb3684c&w=1380",
    label: "",
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151081.jpg?t=st=1722512327~exp=1722515927~hmac=b5fb1f257d1daba64ceed75ebf42762606c65e5c4f4cd6b886e8795b36cd2af1&w=1380",
    label: "",
  },
  {
    src: "https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?t=st=1722510166~exp=1722513766~hmac=d083e46f346c5d1a7c74785d39c6d24294a2ce41a3675cbdae04d2ae9c4684a4&w=1380",
    label: "",
  },
  {
    src: "https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546189.jpg?t=st=1722513116~exp=1722516716~hmac=f748674c4a985063c41ed59cd31d1feef789ead1cf1e38d67e5670fbfa8941b5&w=1380",
    label: "",
  },
];

const ImageBox = ({ src, label }) => {
  return (
    <div className="flex-1 overflow-hidden transition-all justify-around duration-500 m-2 shadow-lg hover:flex-[1_1_50%]">
      <img
        src={src}
        alt={label}
        className="w-[200%] h-[calc(100%-10vh)]  object-cover transition-all duration-500 hover:w-full hover:h-full"
      />
      <span className="block text-[3.8vh] text-center h-[10vh] leading-[2.6]">
        {label}
      </span>
    </div>
  );
};

const ImageContainer = () => {
  return (
    <div className="flex w-full aspect-video p-4 box-border">
      {images.map((image, index) => (
        <ImageBox key={index} src={image.src} label={image.label} />
      ))}
    </div>
  );
};

export default ImageContainer;
