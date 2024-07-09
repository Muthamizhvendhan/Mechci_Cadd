import React from "react";
import { clients } from "../../data/aboutData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Clients = () => {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          drag: "free",
          pagination: false,
          focus: "center",
          arrows: false,
          perPage: 7,
          autoScroll: {
            speed: -1,
          },
          breakpoints: {
            1024: {
              perPage: 5,
            },
            768: {
              perPage: 3,
            },
            640: {
              perPage: 2,
            },
            480: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="My Favorite Images"
      >
        {clients.map((item, index) => (
          <SplideSlide key={index}>
            <div>
              <img src={item} alt="Image 1" className="w-full h-full" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Clients;
