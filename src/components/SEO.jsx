import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogType,
  ogVideo,
  businessName,
  businessType,
  businessDescription,
  businessPhone,
  businessEmail,
  businessWebsite,
  businessAddress,
  businessImage,
  businessHours,
  services,
  priceRange,
  serviceAreas,
  photographyStyle,
  equipment,
  latitude,
  longitude,
  portfolioUrl,
  reviewsUrl,
  philosophy,
  experienceYears,
  specialization,
}) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const isValidOgImage =
    typeof ogImage === "string" && ogImage.trim().startsWith("http");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": businessType || "ProfessionalService",
    name: businessName,
    description: businessDescription || description,
    telephone: businessPhone,
    email: businessEmail,
    url: businessWebsite,
    areaServed: serviceAreas.map((area) => ({ "@type": "Place", name: area })),
    serviceOffered: services.map((service) => ({
      "@type": "Service",
      name: service,
    })),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Photography Style",
        value: photographyStyle,
      },
      {
        "@type": "PropertyValue",
        name: "Equipment",
        value: equipment,
      },
      experienceYears && {
        "@type": "PropertyValue",
        name: "Experience Years",
        value: experienceYears,
      },
      philosophy && {
        "@type": "PropertyValue",
        name: "Philosophy",
        value: philosophy,
      },
      specialization && {
        "@type": "PropertyValue",
        name: "Specialization",
        value: specialization,
      },
    ].filter(Boolean),
  };

  const generateBusinessSchema = () => {
    if (!businessName) return null;

    return {
      "@context": "https://schema.org",
      "@type": businessType,
      name: businessName,
      description: businessDescription,
      url: businessWebsite,
      ...(businessPhone && { telephone: businessPhone }),
      ...(businessEmail && { email: businessEmail }),
      ...(priceRange && { priceRange: priceRange }),
      ...(businessImage && { image: businessImage, logo: businessImage }),
      ...(businessAddress && {
        address: {
          "@type": "PostalAddress",
          streetAddress: businessAddress.streetAddress,
          addressLocality: businessAddress.addressLocality,
          addressRegion: businessAddress.addressRegion,
          postalCode: businessAddress.postalCode,
          addressCountry: businessAddress.addressCountry,
        },
      }),
      ...(latitude &&
        longitude && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: latitude,
            longitude: longitude,
          },
        }),
      ...(businessHours && { openingHours: businessHours }),
      ...(serviceAreas && {
        serviceArea: serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
      }),
      ...(services && {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Photography & Videography Services",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service,
              description: `Professional ${service.toLowerCase()} services`,
              provider: {
                "@type": "Organization",
                name: businessName,
              },
            },
          })),
        },
      }),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
      },

      sameAs: [portfolioUrl, reviewsUrl].filter(Boolean),
    };
  };

  const businessSchema = generateBusinessSchema();

  return (
    <Helmet>
      <html language="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open graph tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      {businessName && <meta property="og:site_name" content={businessName} />}
      {ogImage && isValidOgImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:alt" content={finalOgTitle} />
          <meta property="og:image:width" content={ogImageWidth} />
          <meta property="og:image:height" content={ogImageHeight} />
          <meta property="og:image:type" content="image/jpeg" />
        </>
      )}
      {serviceAreas && (
        <meta name="service-areas" content={serviceAreas.join(", ")} />
      )}

      {priceRange && <meta name="price-range" content={priceRange} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {businessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(businessSchema, null, 2)}
        </script>
      )}

      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default SEO;
