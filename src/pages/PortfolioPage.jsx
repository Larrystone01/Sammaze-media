import React from "react";
import PortfolioSection from "../components/portfolio/portfolio";
import SEO from "../components/SEO";

const PortfolioPage = () => {
  return (
    <>
      <SEO
        title="Portfolio - Sammaze Media | Photography & Videography Showcase"
        description="Explore our comprehensive portfolio featuring stunning photography and cinematic videography. Browse wedding films, corporate videos, portrait sessions, event coverage, and commercial content across Lagos and Ilorin."
        keywords="photography videography portfolio, wedding video gallery, corporate videography showcase, portrait photography, event filming, commercial video production, Lagos videographer portfolio, Ilorin wedding videography, professional video editing"
        ogTitle="Professional Photography & Videography Portfolio | Sammaze Media"
        ogDescription="Discover our award-winning visual storytelling through photography and cinematic videography. Featuring wedding films, corporate videos, portraits, and commercial content."
        ogType="website"
        ogImage=""
        ogImageWidth="1200"
        ogImageHeight="630"
        businessName="Sammaze Media Production"
        businessType="ProfessionalService"
        businessDescription="Professional photography and videography portfolio showcasing wedding films, corporate videos, portrait sessions, event coverage, and commercial content with cinematic quality and artistic excellence."
        businessPhone="+234-704-795-1936"
        businessEmail="sammazemedia@gmail.com"
        businessWebsite="https://sammaze-media.vercel.app"
        services={[
          "Wedding Videography",
          "Wedding Photography",
          "Corporate Video Production",
          "Portrait Photography",
          "Event Videography",
          "Commercial Video Production",
          "Documentary Filmmaking",
          "Music Video Production",
          "Corporate Photography",
          "Product Photography & Videography",
        ]}
        serviceAreas={[
          "Lagos",
          "Ilorin",
          "Osogbo",
          "Ogbomoso",
          "Abuja",
          "Ondo",
          "Akure",
        ]}
        photographyStyle="cinematic videography, artistic photography, documentary storytelling, commercial production"
        equipment="Canon, Sony, professional video equipment, drone footage, professional lighting, stabilizers"
      />
      <PortfolioSection />
    </>
  );
};

export default PortfolioPage;
