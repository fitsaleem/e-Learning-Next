"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./common.css";
import Container from "./ui/container";
import { ChatBubbleIcon, PersonIcon } from "@radix-ui/react-icons";
import { Backpack, LampDeskIcon, PersonStandingIcon } from "lucide-react";
import { Button } from "./ui/button";

const items = [
  {
    id: "1",
    category: "computer science",
    job: "Commercial Industrial Placement",
    image: "/images/internship/p1.png",
    level: "Apply Now",
    href: "/",
    rating: "4.9",
  },
  {
    id: "2",
    category: "computer science",
    job: "Commercial Industrial Placement",
    image: "/images/internship/p2.png",
    level: "Apply Now",
    href: "/",
    rating: "4.9",
  },
  {
    id: "3",
    category: "computer science",
    job: "Commercial Industrial Placement",
    image: "/images/internship/p4.png",
    level: "Apply Now",
    href: "/",
    rating: "4.9",
  },
  {
    id: "4",
    category: "computer science",
    job: "Commercial Industrial Placement",
    image: "/images/internship/p1.png",
    level: "Apply Now",
    href: "/",
    rating: "4.9",
  },
  {
    id: "5",
    category: "computer science",
    job: "Commercial Industrial Placement",
    image: "/images/internship/p2.png",
    level: "Apply Now",
    href: "/",
    rating: "4.9",
  },
  {
    id: "6",
    category: "computer science",
    job: "Commercial Industrial Placement",
    image: "/images/internship/p4.png",
    level: "Apply Now",
    href: "/",
    rating: "4.9",
  },
];

const Internship = () => {
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
    <>
      <Container>
        <section className="pt-[7rem] pb-[2rem]">
          <div className="lg:mx-auto w-6xl px-5">
            <h1 className="text-4xl font-bold mb-[2rem] text-center">
              Latest internships
            </h1>
            <div className=" my-6 m-[80px] md:flex">
              {}
              <div class="p-3 w-[150px] md:my-2 px-2 mx-auto border rounded-sm shadow-lg flex items-center cursor-pointer bg-purple-800">
                <div class="shrink-0">
                  <PersonIcon class="h-6 w-6" />
                </div>
                <div>
                  <div class="font-medium text-white px-3">ChitChat</div>
                </div>
              </div>
              <div class="p-3 my-2 w-[150px] px-2 mx-auto border rounded-sm shadow-lg flex items-center cursor-pointer">
                <div class="shrink-0">
                  <Backpack class="h-6 w-6" />
                </div>
                <div>
                  <div class="font-medium text-black px-3">ChitChat</div>
                </div>
              </div>
              <div class="p-3 my-2 w-[150px] px-2 mx-auto border rounded-sm shadow-lg flex items-center cursor-pointer">
                <div class="shrink-0">
                  <ChatBubbleIcon class="h-6 w-6" />
                </div>
                <div>
                  <div class="font-medium text-black px-3">ChitChat</div>
                </div>
              </div>
              <div class="p-3 my-2 w-[150px] px-2 mx-auto border rounded-sm shadow-lg flex items-center cursor-pointer">
                <div class="shrink-0">
                  <LampDeskIcon class="h-6 w-6" />
                </div>
                <div>
                  <div class="font-medium text-black px-3">ChitChat</div>
                </div>
              </div>
              <div class="p-3 w-[150px] md:my-2 px-2 mx-auto border rounded-sm shadow-lg flex items-center cursor-pointer">
                <div class="shrink-0">
                  <PersonIcon class="h-6 w-6" />
                </div>
                <div>
                  <div class="font-medium text-black px-3">ChitChat</div>
                </div>
              </div>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={breakpoints}
              navigation={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {items.map((p, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="border pt-6 w-[100%] mx-auto bg-white rounded-xl shadow-lg flex flex-col md:space-x-3">
                      <div className="flex flex-col md:flex-row items-center space-x-3 md:px-6">
                        <div className="flex">
                          <Image
                            src={p.image}
                            alt="shoping cart"
                            width={50}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          {" "}
                          <p className="text-sm py-3 md:py-0">{p.job}</p>
                          <p className="text-sm md:text-start text-gray-500">Acmegrade</p>
                        </div>
                      </div>
                      <div className="flex md:justify-between justify-center my-4 px-6">
                        <div className="flex md:justify-between justify-center pr-5">
                          <Image
                            src={"/images/internship/p3.png"}
                            alt="shoping cart"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          <p className="px-2 text-sm py-3">10 coin</p>
                        </div>
                      </div>
                      <div className="flex justify-between my-4 border-t-2 py-2 md:px-6">
                        <div>
                          <ul className="list-disc">
                          <Button
              variant="outline"
              size="large"
              className="ml-2 px-8 py-3 hidden md:block bg-green text-dark-green hover:text-black hover:border-green-500"
              aria-label="login"
            >
              <Link href={p.href} className="text-sm font-medium transition-colors">
                {p.level}
              </Link>
            </Button>
                          </ul>
                        </div>
                        <div>
                        <Button
              variant="outline"
              size="large"
              className="ml-2 px-5 py-3 hidden md:block text-dark-green hover:text-black hover:border-green-500"
              aria-label="login"
            >
              <Link href="./" className="text-sm font-medium transition-colors">
              View Program
              </Link>
            </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Internship;
