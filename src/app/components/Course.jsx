'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './common.css'
import Container from './ui/container';


const items=[
  {
    id: "1",
    category: "computer science",
    course: "Data Science",
    level: "Begginer Level Course .",
    rating: "4.9",
  },
  {
    id: "1",
    category: "computer science",
    course: "Data Science",
    level: "Begginer Level Course .",
    rating: "4.9",
  },
  {
    id: "1",
    category: "computer science",
    course: "Data Science",
    level: "Begginer Level Course .",
    rating: "4.9",
  },
  {
    id: "1",
    category: "computer science",
    course: "Data Science",
    level: "Begginer Level Course .",
    rating: "4.9",
  },
  {
    id: "1",
    category: "computer science",
    course: "Data Science",
    level: "Begginer Level Course .",
    rating: "4.9",
  },
  {
    id: "1",
    category: "computer science",
    course: "Data Science",
    level: "Begginer Level Course .",
    rating: "4.9",
  },
]

const Course = () => {
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
        Courses We Offer
        </h1>
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

                 <div className='border pt-6 w-[100%] mx-auto bg-white rounded-xl shadow-lg flex flex-col space-x-3'> 
      <div className="flex space-x-3 px-6">
    <div className="flex">
      <Image
        src={"/images/courseSection/p1.png"}
        alt="shoping cart"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
    <div>
      {" "}
      <p className="text-sm md:text-xl">{p.course}</p>
      <p className='text-sm text-start text-gray-500'>Acmegrade</p>
    </div>
  </div>
  <div className='md:flex justify-between my-4 px-6'>
    <div className='md:flex justify-between pr-5'>
    <Image
        src={"/images/courseSection/p2.png"}
        alt="shoping cart"
        width={20}
        height={20}
        className="object-contain w-0 md:w-3"
      />
      <p className='px-2 text-sm md:pt-3'>
      Mumbai,India
      </p>
    </div>
 <div>
  <p className='text-sm py-2'><span className="text-green text-xl">&#9733; 4.9 </span> (345 Reviews)</p>
 </div>
    </div>
    <div className='flex justify-between my-4 border-t-2 py-2 px-6'>
    <div>
      <ul className='list-disc md:text-sm '>
        <li>{p.level}</li>
      </ul>
    </div>
 <div>
  <Link href={"/"} className='text-green text-sm'>View Details</Link>
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

  )
}

export default Course