import { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageWidth = "1200",
  ogImageHeight = "630",
  ogType = "website",
  businessName,
  businessType = "ProfessionalService",
  businessDescription,
  businessPhone,
  businessEmail,
  businessWebsite,
  services = [],
  serviceAreas = [],
  priceRange,
  portfolioUrl,
  reviewsUrl,
}) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Function to set or update meta tag
    const setMetaTag = (name, content, property = false) => {
      if (!content) return;

      const attribute = property ? "property" : "name";

      // Remove existing meta tag
      const existingTag = document.querySelector(
        `meta[${attribute}="${name}"]`
      );
      if (existingTag) {
        existingTag.remove();
      }

      // Create new meta tag
      const meta = document.createElement("meta");
      meta.setAttribute(attribute, name);
      meta.setAttribute("content", String(content));
      document.head.appendChild(meta);
    };

    // Function to add JSON-LD structured data
    const addStructuredData = (data, id = "seo-structured-data") => {
      // Remove existing structured data with this ID
      const existingScript = document.querySelector(`script[data-id="${id}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-id", id);
      script.textContent = JSON.stringify(data, null, 2);
      document.head.appendChild(script);
    };

    // Set basic meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("theme-color", "#000000");

    // Set Open Graph tags
    const finalOgTitle = ogTitle || title;
    const finalOgDescription = ogDescription || description;

    setMetaTag("og:title", finalOgTitle, true);
    setMetaTag("og:description", finalOgDescription, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:site_name", businessName, true);

    // Set og:image tags (essential for social sharing)
    if (ogImage && ogImage.startsWith("https")) {
      setMetaTag("og:image", ogImage, true);
      setMetaTag("og:image:secure_url", ogImage, true);
      setMetaTag("og:image:alt", finalOgTitle, true);
      setMetaTag("og:image:type", "image/jpeg", true);
      setMetaTag("og:image:width", ogImageWidth, true);
      setMetaTag("og:image:height", ogImageHeight, true);
    }

    // Twitter Card tags (important for social media)
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", finalOgTitle);
    setMetaTag("twitter:description", finalOgDescription);
    if (ogImage && ogImage.startsWith("https")) {
      setMetaTag("twitter:image", ogImage);
    }

    // Service areas and price range (useful for local SEO)
    if (serviceAreas.length > 0) {
      setMetaTag("service-areas", serviceAreas.join(", "));
    }
    if (priceRange) {
      setMetaTag("price-range", priceRange);
    }

    // Essential structured data for photography & videography business
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": businessType,
      name: businessName,
      description: businessDescription || description,
      url: businessWebsite,
      telephone: businessPhone,
      email: businessEmail,
      priceRange: priceRange,

      // Specify as both photography and videography business
      additionalType: [
        "https://schema.org/PhotographyService",
        "https://schema.org/VideoProductionService",
      ],

      // Service areas for local SEO (photographers/videographers in specific cities)
      areaServed: serviceAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),

      // Photography & Videography services offered
      hasOfferCatalog:
        services.length > 0
          ? {
              "@type": "OfferCatalog",
              name: "Photography & Videography Services",
              itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                position: index + 1,
                itemOffered: {
                  "@type": service.toLowerCase().includes("video")
                    ? "VideoProductionService"
                    : "PhotographyService",
                  name: service,
                  description: `Professional ${service.toLowerCase()} services for weddings, events, and commercial projects`,
                  provider: {
                    "@type": "Organization",
                    name: businessName,
                  },
                },
              })),
            }
          : undefined,

      // Ratings (crucial for creative services)
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
      },

      // Portfolio and review links (essential for visual businesses)
      sameAs: [portfolioUrl, reviewsUrl].filter(Boolean),
    };

    // Remove undefined properties
    Object.keys(businessSchema).forEach((key) => {
      if (businessSchema[key] === undefined) {
        delete businessSchema[key];
      }
    });

    // Add structured data
    if (businessName) {
      addStructuredData(businessSchema, "business-schema");
    }

    console.log("✅ SEO tags set successfully with custom component!");
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogType,
    businessName,
    businessType,
    businessDescription,
    businessPhone,
    businessEmail,
    businessWebsite,
    services,
    serviceAreas,
    priceRange,
    portfolioUrl,
    reviewsUrl,
  ]);

  // This component doesn't render anything visible
  return null;
};
export default SEO;
