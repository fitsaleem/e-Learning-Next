import React from "react";
import Container from "./ui/container";
import { Button } from "./ui/button";
import Image from "next/image";
import { SelectButton } from "./ui/SelectButton";

const Hero = () => {
    return (
      <div className="px-4 pt-10 md:pt-0 bg-[url('/images/heroSection/p1.png')] h-[600px] w-[100%] bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4E1D9A] bg-opacity-80"></div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-16 relative ">
            <div className="md:absolute">
              <h2 className="text-white text-6xl font-bold">To be the best,<br />
              <span className="text-green">Choose the best...</span></h2>
              <p className="text-white py-3">Company reviews, Course review, Internship</p>
              <div className="flex items-center"> 
                <div className="flex items-center gap-2 w-full relative">
                  <input type="search" name="search" id="search" className="border-2 rounded p-3 pl-15 w-full" />
                  <div className="absolute right-2">
                  <SelectButton />
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="large"
                  className="ml-2 px-8 py-3 md:block bg-green text-dark-green hover:text-black hover:border-green-500"
                  aria-label="login"
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="w-[500px] ml-[-3em] md:w-[860px] md:ml-[25em]">
              <Image
                src={"/images/heroSection/p2.png"}
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </div>
    );
};


export default Hero;

