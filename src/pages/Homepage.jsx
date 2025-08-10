import React from "react";
import Hero from "../components/homepage/Hero";
import HeroSubSection from "../components/homepage/SubHero";
import { GlobalContextProvider } from "../components/context/GlobalContext";

const images = [
  {
    id: 1,
    imgUrl: "/images-videos/img1.jpg",
    sizes: "w-[160px] h-[300px]",
  },
  {
    id: 2,
    imgUrl: "/images-videos/img2.jpg",
    sizes: "w-[160px] h-[270px]",
  },
  {
    id: 3,
    imgUrl: "/images-videos/img3.jpg",
    sizes: "w-[160px] h-[240px]",
  },
  { id: 4, imgUrl: "/images-videos/img4.jpg", sizes: "w-[160px] h-[210px]" },
  {
    id: 5,
    imgUrl: "/images-videos/img5.jpg",
    sizes: "w-[160px] h-[240px]",
  },
  {
    id: 6,
    imgUrl: "/images-videos/img6.jpg",
    sizes: "w-[160px] h-[270px]",
  },
  {
    id: 7,
    imgUrl: "/images-videos/img8.jpg",
    sizes: "w-[160px] h-[300px]",
  },
];
const Homepage = () => {
  return (
    <>
      <GlobalContextProvider images={images}>
        <Hero images={images} />
        <HeroSubSection images={images} />
      </GlobalContextProvider>
    </>
  );
};

export default Homepage;
