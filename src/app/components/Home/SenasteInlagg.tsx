import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Link from "next/link";
import { Arrow } from "../Icons/Arrow";
import getPostMetadata from "@/app/components/Blogg/getPostMetadata";

const SenasteInlagg = () => {
  var settings = {
    150: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  const slidePerView = 3;

  const posts = getPostMetadata();

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto  pt-20 pb-10">
        <div className="w-full flex items-center justify-center mb-10">
          <h1
            className="font-title font-poppins font-bold text-black-gray text-3xl md:text-5xl text-center md:text-left mb-2"
          >
           Senaste inlägg
          </h1>
        </div>

        <Swiper spaceBetween={10} slidesPerView={4} breakpoints={settings}>
          {posts.map((post, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="mx-0 pb-20 pt-12 z-10 relative px-2 transition-all transform hover:scale-105">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="md:max-w-392 bg-white rounded-lg shadow-lg py-4 mx-2">
                      <div className="w-full">
                        {" "}
                      {/*  Add Image */}
                        <img
                            src={post.og_image}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="px-6 flex flex-col">
                        <p className="font-poppins font-light pt-4 pb-3 text-codelabs-primary1">
                          {post.date}
                        </p>
                        <h4 className="font-title pb-2 font-semibold text-2xl truncate text-grey-normal ">
                          {post.title}
                        </h4>
                        <p className="font-title font-normal text-base pb-6 textTruncate">
                          {post.description}
                        </p>
                        <div className="pt-6">
                          <Link href={`/blogs/${post.slug}`}>
                            <div className="flex justify-end">
                              <a
                                href="/"
                                className="sm:px-4 py-1.5 cursor-pointer hover:shadow-lg px-7 pt-1 pb-1 mb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5">
                                <Arrow />
                              </a>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SenasteInlagg;
