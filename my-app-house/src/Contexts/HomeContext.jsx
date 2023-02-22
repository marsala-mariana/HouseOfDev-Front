import { useState, createContext } from "react";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
  const [propiedad, setPropiedad] = useState([]);
  return (
    <HomeContext.Provider value={{ propiedad, setPropiedad }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
