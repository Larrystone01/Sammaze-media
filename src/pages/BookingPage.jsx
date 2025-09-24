import React from "react";
import ContactMe from "../components/contact";
import { useGlobalContext } from "../components/context/GlobalContext";
// import PricingListings from "../components/pricing/pricingDetails";

const ContactPage = () => {
  const { formData, rateData, services } = useGlobalContext();

  return (
    <div>
      <ContactMe />
    </div>
  );
};

export default ContactPage;
