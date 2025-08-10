import { createContext, useContext } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export function GlobalContextProvider({ children, images, services }) {
  return (
    <GlobalContext.Provider value={{ images, services }}>
      {children}
    </GlobalContext.Provider>
  );
}
