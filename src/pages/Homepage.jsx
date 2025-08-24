import React from "react";
import Hero from "../components/homepage/Hero";
import HeroSubSection from "../components/homepage/SubHero";
import { GlobalContextProvider } from "../components/context/GlobalContext";
import SEO from "../components/SEO";

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
  const seoData = {
    title: "Professional Photography & Videography Services - Sammaze Media",
    description:
      "Award-winning photography and videography studio specializing in weddings, portraits, corporate events, and commercial projects. Creating stunning visual stories across Kwara and Lagos State with years of experience",
    keywords:
      "photography, videography, wedding photographer, portrait photography, corporate videos, event photography, ilorin photographer,ilorin videographer. lagos photographer, lagos videograpger, professional photographer, video production, commercial photography",
    ogTitle:
      "Sammaze Media Production - Premier Photography & Videography in Lagos & Ilorin",
    ogDescription:
      "Creating timeless visual stories through expert photography and cinematic videography. Serving couples and businesses with artistic excellence and professional service.",
    ogImage:
      "https://res.cloudinary.com/dfex2qeg7/image/upload/v1755993614/img4_jig6w8.jpg",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    ogType: "website",
    businessName: "Sammaze Media Production",
    businessType: "Photography & Videography Business",
    businessDescription:
      "Professional photography and videography studio specializing in weddings, portraits, corporate events, and commercial content creation with artistic excellence and cinematic storytelling.",
    businessPhone: "+234-704-795-1936",
    businessEmail: "sammazemedia@gmail.com",
    businessWebsite: "https://sammaze-media.vercel.app",
    services: [
      "Wedding Photography",
      "Wedding Videography",
      "Portrait Photography",
      "Corporate Videography",
      "Event Photography",
      "Commercial Photography",
      "Family Photography",
      "Engagement Sessions",
      "Corporate Headshots",
      "Product Photography",
    ],
    serviceAreas: [
      "Ilorin",
      "Lagos",
      "Osogbo",
      "Ogbomoso",
      "Abuja",
      "Ondo",
      "Akure",
    ],
  };
  return (
    <>
      <SEO {...seoData} />
      <GlobalContextProvider images={images}>
        <Hero images={images} />
        <HeroSubSection images={images} />
      </GlobalContextProvider>
    </>
  );
};

export default Homepage;
