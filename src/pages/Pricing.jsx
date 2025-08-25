import React from "react";
import Hero from "../components/pricing/pricing-hero";
import SEO from "../components/SEO";

const PricingPage = () => {
  return (
    <>
      <SEO
        title="Pricing - Sammaze Media | Photography & Videography Packages"
        description="Transparent pricing for professional photography and videography services. Wedding packages, corporate video rates, portrait sessions, and commercial content pricing. Affordable luxury across Lagos and Ilorin with flexible payment options."
        keywords="photography videography pricing, wedding photography rates, corporate video pricing, portrait photography cost, Lagos photographer prices, Ilorin videographer rates, affordable photography packages, wedding videography cost Nigeria"
        ogTitle="Sammaze Media Pricing - Professional Photography & Videography Rates"
        ogDescription="Discover our competitive pricing for wedding photography, corporate videos, portraits, and commercial content. Quality visual storytelling at transparent, affordable rates."
        ogType="website"
        ogImage="https://res.cloudinary.com/dfex2qeg7/image/upload/v1755993614/img4_jig6w8.jpg"
        ogImageWidth="1200"
        ogImageHeight="630"
        businessName="Sammaze Media Production"
        businessType="ProfessionalService"
        businessDescription="Professional photography and videography services with transparent pricing. We offer competitive rates for wedding documentation, corporate content, portrait sessions, and commercial projects across Nigeria."
        businessPhone="+234-704-795-1936"
        businessEmail="sammazemedia@gmail.com"
        businessWebsite="https://sammaze-media.vercel.app"
        priceRange="NGN20,000 - NGN500,000"
        services={[
          "Wedding Photography Packages",
          "Wedding Videography Packages",
          "Corporate Video Production",
          "Portrait Photography Sessions",
          "Event Coverage Packages",
          "Commercial Content Creation",
          "Brand Photography",
          "Product Photography",
          "Engagement Sessions",
          "Family Photography",
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
        photographyStyle="premium quality, professional service, flexible packages, competitive pricing, value-driven solutions"
        equipment="Professional Canon & Sony equipment, premium editing software, full production setup included in pricing"
      />
      <Hero />
    </>
  );
};

export default PricingPage;
