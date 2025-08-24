import React from "react";
import ContactMe from "../components/contact";
import { useGlobalContext } from "../components/context/GlobalContext";
import PricingListings from "../components/pricing/pricingDetails";

const ContactPage = () => {
  const { formData } = useGlobalContext();

  return (
    <div>
      {formData.bookingDetails &&
      Object.values(formData.bookingDetails).some(
        (value) => value !== null && value !== undefined && value !== ""
      ) ? (
        <ContactMe />
      ) : (
        <PricingListings />
      )}
    </div>
  );
};

export default ContactPage;
