import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { postsData } from "../../data/homeData";
import PrimaryBtn from "../common/buttons/PrimaryBtn";

const Blog = () => {
  return (
    <div className="card-bg text-[var(--foreground)] p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm text-blue-500 font-semibold text-[var(--primary)]">
          OUR PRESS
        </h2>
        <h1 className="text-3xl font-bold mt-2">Latest Posts From Our Press</h1>
        <Splide
          options={{
            type: "loop",
            rewind: true,
            width: "100%",
            gap: "1rem",
            pagination: false,
            autoplay: true,
            perPage: 3,
            arrows: false,
            interval: 3000,
            breakpoints: {
              1024: {
                perPage: 2, // Number of slides to show on tablet screens
              },
              640: {
                perPage: 1, // Number of slides to show on mobile screens
              },
            },
          }}
          className="mt-6"
        >
          {postsData.map((post, index) => (
            <SplideSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={post.imageUrl}
                  alt={post.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                  <div className="text-sm text-[var(--muted-foreground)] mt-2">
                    <span>By {post.author}</span>
                    <span className="mx-2">|</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center mt-5 gap-4">
                    <PrimaryBtn text="Read" />
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Blog;
