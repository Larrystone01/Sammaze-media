import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export function GlobalContextProvider({
  children,
  images,
  services,
  rateData,
  bookingTerms,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bookingDetails: {
      service: "",
      package: "",
      price: "",
    },
    preferredDate: "",
    preferredTime: "",
    numOfSubject: "",
    eventLocation: "",
    expectedDuration: "",
    message: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        images,
        services,
        rateData,
        bookingTerms,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
