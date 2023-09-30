import React from "react";
import Image from "next/image";
import Container from "./ui/container";

const Explore = () => {
  const items = [
    {
      id: "1",
      images: "/images/exploreSection/img1.png",
      name: "College & Universties",
    },
    {
      id: "2",
      images: "/images/exploreSection/img2.png",
      name: "Courses & Classes",
    },
    {
      id: "3",
      images: "/images/exploreSection/img3.png",
      name: "Educational Services",
    },
    {
      id: "4",
      images: "/images/exploreSection/img4.png",
      name: "Language Learning",
    },
    {
      id: "5",
      images: "/images/exploreSection/img6.png",
      name: "Music & Theater Classes",
    },
    {
      id: "6",
      images: "/images/exploreSection/img6.png",
      name: "Vocational Training Center",
    },
    {
      id: "7",
      images: "/images/exploreSection/img1.png",
      name: "College & Universties",
    },
    {
      id: "8",
      images: "/images/exploreSection/img1.png",
      name: "College & Universties",
    },
  ];
  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center text-2xl font-bold py-10">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          
            <div key={item.id} className="border p-6 w-[300px] mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-3 flex-col">
          <div className="border rounded-full bg-[#dad3e4] p-5">
            <Image
              src={item.images}
              alt="shoping cart"
              width={35}
              height={35}
              className="object-contain"
            />
          </div>
          <div>
            {" "}
            <p className="py-2">{item.name}</p>
          </div>
        </div>
        ))}
       
      </div>
        
      </Container>
    </div>
  );
};

export default Explore;
