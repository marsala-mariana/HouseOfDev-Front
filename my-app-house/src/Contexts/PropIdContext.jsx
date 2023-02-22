import { useState, createContext } from "react";

export const PropIdContext = createContext();

const PropIdContextProvider = ({ children }) => {
  const [detalle, setDetalles] = useState({});
  return (
    <PropIdContext.Provider value={{ detalle, setDetalles }}>
      {children}
    </PropIdContext.Provider>
  );
};

export default PropIdContextProvider;
