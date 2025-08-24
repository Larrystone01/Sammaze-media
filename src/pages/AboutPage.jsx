import React from "react";
import AboutMe from "../components/about-me/About-me";
import SEO from "../components/SEO";

const AboutPage = () => {
  const seoData = {
    title:
      "About Us - Sammaze Media | Professional Photography & Videography Team",
    description:
      "Meet the creative minds behind Sammaze Media. With 4+ years of experience in wedding photography, corporate videography, and commercial content creation, we're passionate storytellers serving Lagos, Ilorin, and beyond with artistic excellence.",
    keywords:
      "about Sammaze Media, professional photographer videographer, wedding photographer Lagos, corporate videographer Ilorin, photography team, videography experience, visual storytelling experts, Nigeria photography business",
    ogTitle:
      "Meet Sammaze Media - Your Professional Photography & Videography Team",
    ogDescription:
      "Discover the story behind Sammaze Media. Passionate visual storytellers with 5+ years experience creating stunning photography and cinematic videography across Nigeria.",
    ogType: "website",
    ogImage: "",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    businessName: "Sammaze Media Production",
    businessType: "ProfessionalService",
    businessDescription:
      "Meet the professional photography and videography team at Sammaze Media. With years of experience in wedding documentation, corporate storytelling, and commercial content creation, we bring passion and expertise to every project.",
    businessPhone: "+234-704-795-1936",
    businessEmail: "sammazemedia@gmail.com",
    businessWebsite: "https://sammaze-media.vercel.app",
    photographyStyle:
      "authentic storytelling, cinematic visuals, emotional documentation, creative artistry, professional excellence",
    equipment:
      "Professional Canon & Sony cameras, cinematic lenses, professional lighting systems, drone technology, advanced editing suites",
    // About page specific custom props (if your SEO component supports them)
    experienceYears: "4+",
    philosophy: "Capturing authentic moments with artistic vision",
    specialization: "Wedding documentation and corporate storytelling",
    services: [
      "Wedding Photography & Videography",
      "Corporate Content Creation",
      "Portrait Photography Sessions",
      "Event Documentation",
      "Commercial Video Production",
      "Brand Photography",
      "Documentary Filmmaking",
      "Creative Consultations",
      "Post-Production Services",
      "Visual Storytelling",
    ],
    serviceAreas: [
      "Lagos",
      "Ilorin",
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
      <AboutMe />
    </>
  );
};

export default AboutPage;
