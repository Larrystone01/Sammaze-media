import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Camera, Video, Home, Music, CircleCheckBig } from "lucide-react";
import Footer from "./Footer";
import { GlobalContextProvider } from "./context/GlobalContext";

const services = [
  {
    id: 1,
    title: "Photography",
    icon: <Camera size={24} />,
    description:
      "Professional photography services for all occasions. From portraits to events, we capture your precious moments with artistic flair.",
    services: [
      "Portrait Photography",
      "Event Photography",
      "Product Photography",
      "Lifestyle Photography",
      "Fashion Photography",
    ],
  },
  {
    id: 2,
    title: "Content Creator Cinematography",
    icon: <Video size={24} />,
    description:
      "Specialized cinematography packages designed for content creators. Professional video production with various editing levels to suit your brand.",
    services: [
      "Short-form Content",
      "Social Media Videos",
      "Brand Content",
      "Promotional Videos",
      "Custom Editing",
    ],
  },
  {
    id: 3,
    title: "Wedding Coverage",
    icon: <Video size={24} />,
    description:
      "Complete wedding documentation with cinematic quality. We tell your love story through beautiful imagery and films.",
    services: [
      "Wedding Photography",
      "Wedding Videography",
      "Drone Coverage",
      "Pre-wedding Shoots",
      "Reception Coverage",
    ],
  },
  {
    id: 4,
    title: "Real Estate",
    icon: <Home size={24} />,
    description:
      "Showcase properties with stunning visuals that attract buyers and renters. Professional real estate photography and videography.",
    services: [
      "Property Photography",
      "Virtual Tours",
      "Drone Real Estate",
      "Interior Photography",
      "Commercial Spaces",
    ],
  },
  {
    id: 5,
    title: "Club Events",
    icon: <Music size={24} />,
    description:
      "High-energy event coverage that captures the atmosphere and excitement of your club events and parties.",
    services: [
      "Night Club Photography",
      "Party Coverage",
      "DJ Events",
      "Corporate Parties",
      "Social Events",
    ],
  },
];

const rateData = {
  photography: {
    title: "Photography Rates",
    rates: [
      { name: "Three Indoor Pictures", price: "₦25,000" },
      { name: "Three Outdoor Pictures", price: "₦35,000" },
    ],
  },
  contentCreator: {
    title: "Cinematography Packages for Content Creators",
    rates: [
      { name: "Basic Creator Package (30s, Basic editing)", price: "₦60,000" },
      {
        name: "Premium Creator Package (60-90s, Advanced editing)",
        price: "₦80,000",
      },
      {
        name: "Elite Creator Package (60s+, Advanced + Color Grading)",
        price: "₦150,000",
      },
    ],
  },
  wedding: {
    title: "Wedding Coverage",
    rates: [
      { name: "Basic Highlights (No Drone)", price: "₦200,000" },
      { name: "Premium Highlights (With Drone)", price: "₦350,000" },
    ],
  },
  realEstate: {
    title: "Real Estate (Photo/Video)",
    rates: [
      { name: "Within State (No Drone)", price: "₦150,000" },
      { name: "Within State (With Drone)", price: "₦250,000" },
      { name: "Outside State (No Drone)", price: "₦200,000" },
      { name: "Outside State (With Drone)", price: "₦300,000" },
    ],
  },
  clubEvents: {
    title: "Club Events",
    rates: [
      { name: "Full Night Coverage", price: "₦200,000" },
      { name: "3-4 Hours Coverage", price: "₦150,000" },
    ],
  },
};

const bookingTerms = [
  "Deposit: 50% upfront validates your booking",
  "Booking Notice: 48-72 hours prior to the shoot",
  "Balance: Due upon final delivery",
  "Drone Surcharge: ₦100,000 extra charges apply",
];

const MainLayout = () => {
  return (
    <>
      <GlobalContextProvider
        services={services}
        rateData={rateData}
        bookingTerms={bookingTerms}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
    </>
  );
};

export default MainLayout;
