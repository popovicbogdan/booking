import React, { createContext, useState } from "react";

export const FiltersContext = createContext();

const FiltersContextProvider = props => {
  const [lokacija, setLokacija] = useState([]);
  const [zvezdice, setZvezdice] = useState([]);
  const [udaljenostOdCentra, setUdaljenostOdCentra] = useState([]);
  const [ocenaGostiju, setOcenaGostiju] = useState([]);
  const [filters, setFilters] = useState({});

  return (
    <FiltersContext.Provider
      value={{
        lokacija,
        setLokacija,
        zvezdice,
        setZvezdice,
        udaljenostOdCentra,
        setUdaljenostOdCentra,
        ocenaGostiju,
        setOcenaGostiju,
        filters,
        setFilters
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
