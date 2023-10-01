"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Grid, Pagination } from "swiper/modules";
import { StarFilledIcon } from "@radix-ui/react-icons";

const Reviews = () => {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
     
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
     
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <div>
      <h2 className="text-4xl py-4 text-center font-bold">Brows Reviews</h2>
      <>
        <Swiper
          slidesPerView={3}             
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
      breakpoints={breakpoints}
          className="reviewSwiper"
        >
          <SwiperSlide>
           
       
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-start">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
           
        
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
           
            </div>
          </SwiperSlide>
          <SwiperSlide>
           
          
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
          
          </SwiperSlide>
          <SwiperSlide>
           
        
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
         
          </SwiperSlide>
          <SwiperSlide>
           
       
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
           
          
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
         
          </SwiperSlide>
          <SwiperSlide>
           
          
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
           
          </SwiperSlide>
          <SwiperSlide>
           
            <div>
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                      
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
           
            <div>
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="flex flex-col gap-4 -white-700 p-4">
                  {/* Profile and Rating */}
                  <div className="flex space-x-3">
                    <div className="flex items-center">
                      <div className="w-7 h-7 text-center rounded-full bg-red-500">
                        J
                      </div>
                    </div>
                    <div>
                     
                      <span>Jess Hopkins</span>
                      <div className="flex p-1 gap-1 text-orange-300">
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                        <StarFilledIcon />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;