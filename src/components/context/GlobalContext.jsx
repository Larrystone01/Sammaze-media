import { createContext, useContext } from "react";

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
  return (
    <GlobalContext.Provider
      value={{ images, services, rateData, bookingTerms }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
