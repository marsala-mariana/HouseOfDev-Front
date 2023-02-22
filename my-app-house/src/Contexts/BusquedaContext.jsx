import { useState, createContext } from "react";

export const BusquedaContext = createContext();

const BusquedaContextProvider = ({ children }) => {
  const [busquedaProp, setBusquedaProp] = useState([]);
  return (
    <BusquedaContext.Provider value={{ busquedaProp, setBusquedaProp }}>
      {children}
    </BusquedaContext.Provider>
  );
};

export default BusquedaContextProvider;
