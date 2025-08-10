import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import {
  Camera,
  Video,
  Film,
  User,
  Briefcase,
  Building,
  Clapperboard,
  CircleCheckBig,
} from "lucide-react";
import Footer from "./Footer";
import { GlobalContextProvider } from "./context/GlobalContext";

const services = [
  {
    id: 1,
    icon: <Camera />,
    title: "Wedding Photography",
    description:
      "Your love story deserves to be told beautifully. We capture every emotion, every detail, and every magical moment of your special day with artistic precision and heartfelt dedication.",
    services: [
      "Full day coverage (up to 12 hours)",
      "Engagement session included",
      "500+ edited high-resolution images",
      "Online gallery for easy sharing",
    ],
    pricing: 2500,
  },
  {
    id: 2,
    icon: <Clapperboard />,
    title: "Wedding Videography",
    description:
      "Relive your wedding day forever with cinematic storytelling that captures not just the sights, but the sounds, emotions, and atmosphere of your celebration.",
    services: [
      "Cinematic highlight reel (3-5 minutes)",
      "Full ceremony footage",
      "Reception highlights",
      "Professional audio recording",
      "4K resolution delivery",
    ],
    pricing: 1800,
  },
  {
    id: 3,
    icon: <Film />,
    title: "Family Portraits",
    description:
      "Preserve the bonds that matter most. Our family sessions create timeless portraits that celebrate your unique story and the love that connects you.",
    services: [
      "1-2 hour photo session",
      "Multiple location options",
      "50+ edited images",
      "Wardrobe consultation",
      "Print packages available",
    ],
    pricing: 450,
  },
  {
    id: 4,
    icon: <Video />,
    title: "Corporate Events",
    description:
      "Professional documentation of your business milestones, conferences, and corporate gatherings. We help you showcase your brand's story with compelling visual content.",
    services: [
      "Event photography & videography",
      "Same-day preview images",
      "Corporate headshots",
      "Social media ready content",
      "Usage rights included",
    ],
    pricing: 800,
  },
  {
    id: 5,
    icon: <User />,
    title: "Portrait Sessions",
    description:
      "Express your personality through professional portraits. Whether for personal branding, artistic expression, or special occasions, we create images that truly represent you.",
    services: [
      "Studio or outdoor locations",
      "Professional lighting setup",
      "Style and posing guidance",
      "25+ retouched images",
      "Social media optimization",
    ],
    pricing: 350,
  },
  {
    id: 6,
    icon: <Building />,
    title: "Special Events",
    description:
      "From birthday celebrations to anniversaries, graduations to reunions, we capture the joy and significance of your milestone moments with creativity and care.",
    services: [
      "Flexible coverage options",
      "Candid and posed shots",
      "Quick turnaround available",
      "Group photo coordination",
      "Custom packages available",
    ],
    pricing: 600,
  },
];

const MainLayout = () => {
  return (
    <>
      <GlobalContextProvider services={services}>
        <Navbar />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
    </>
  );
};

export default MainLayout;
