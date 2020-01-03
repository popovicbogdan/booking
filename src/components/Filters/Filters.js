import React, { useContext } from "react";
import { FiltersWrapper, FilterCont } from "./Filters.styled";
import { FiltersContext } from "../../contexts/FiltersContextProvider";

const Filters = () => {
  const {
    setLokacija,
    lokacija,
    setZvezdice,
    zvezdice,
    setUdaljenostOdCentra,
    udaljenostOdCentra,
    setOcenaGostiju,
    ocenaGostiju,
    filters,
    setFilters
  } = useContext(FiltersContext);

  const handleCheck = e => {
    switch (e.target.name) {
      case "lokacija":
        setLokacija([...lokacija, e.target.value]);
        setFilters({
          ...filters,
          [e.target.name]: [...lokacija, e.target.value]
        });
        break;
      case "zvezdice":
        setZvezdice([...zvezdice, e.target.value]);
        setFilters({
          ...filters,
          [e.target.name]: [...zvezdice, e.target.value]
        });
        break;
      case "udaljenostOdCentra":
        setUdaljenostOdCentra([...udaljenostOdCentra, e.target.value]);
        setFilters({
          ...filters,
          [e.target.name]: [...udaljenostOdCentra, e.target.value]
        });
        break;
      case "ocenaGostiju":
        setOcenaGostiju([...ocenaGostiju, e.target.value]);
        setFilters({
          ...filters,
          [e.target.name]: [...ocenaGostiju, e.target.value]
        });
        break;
      default:
        return;
    }
  };

  return (
    <FiltersWrapper>
      <h5>Filter: </h5>
      <FilterCont>
        <label htmlFor="lokacija">Ocena Lokacije</label>
        <p>
          <label>
            <input
              name="lokacija"
              type="checkbox"
              className="filled-in"
              value={9}
              onChange={handleCheck}
            />
            <span>Odlicna Lokacija: 9+</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="lokacija"
              type="checkbox"
              className="filled-in"
              value={8}
              onChange={handleCheck}
            />
            <span>Vrlo Dobra Lokacija: 8+</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="lokacija"
              type="checkbox"
              className="filled-in"
              value={7}
              onChange={handleCheck}
            />
            <span>Dobra Lokacija 7+</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="lokacija"
              type="checkbox"
              className="filled-in"
              value={6}
              onChange={handleCheck}
            />
            <span>Prijatna Lokacija: 6+</span>
          </label>
        </p>
      </FilterCont>
      <FilterCont>
        <label htmlFor="zvezdice">Broj zvezdica</label>
        <p>
          <label>
            <input
              name="zvezdice"
              type="checkbox"
              className="filled-in"
              value={2}
              onChange={handleCheck}
            />
            <span>2 zvezdice</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="zvezdice"
              type="checkbox"
              className="filled-in"
              value={3}
              onChange={handleCheck}
            />
            <span>3 zvezdice</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="zvezdice"
              type="checkbox"
              className="filled-in"
              value={4}
              onChange={handleCheck}
            />
            <span>4 zvezdice</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="zvezdice"
              type="checkbox"
              className="filled-in"
              value={5}
              onChange={handleCheck}
            />
            <span>5 zvezdica</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="zvezdice"
              type="checkbox"
              className="filled-in"
              value=""
              onChange={handleCheck}
            />
            <span>Neodredjeno</span>
          </label>
        </p>
      </FilterCont>

      <FilterCont>
        <label htmlFor="udaljenostOdCentra">Udaljenost od centra</label>
        <p>
          <label>
            <input
              name="udaljenostOdCentra"
              type="checkbox"
              className="filled-in"
              value="1000"
              onChange={handleCheck}
            />
            <span>Manje od 1 km</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="udaljenostOdCentra"
              type="checkbox"
              className="filled-in"
              value="3000"
              onChange={handleCheck}
            />
            <span>Manje od 3 km</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="udaljenostOdCentra"
              type="checkbox"
              className="filled-in"
              value="5000"
              onChange={handleCheck}
            />
            <span>Manje od 5 km</span>
          </label>
        </p>
      </FilterCont>
      <FilterCont>
        <label htmlFor="ocenaGostiju">Ocena gostiju</label>
        <p>
          <label>
            <input
              name="ocenaGostiju"
              type="checkbox"
              className="filled-in"
              value={9}
              onChange={handleCheck}
            />
            <span>Izvanredan: 9+</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="ocenaGostiju"
              type="checkbox"
              className="filled-in"
              value={8}
              onChange={handleCheck}
            />
            <span>Vrlo dobar: 8+</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="ocenaGostiju"
              type="checkbox"
              className="filled-in"
              value={7}
              onChange={handleCheck}
            />
            <span>Dobar: 7+</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="ocenaGostiju"
              type="checkbox"
              className="filled-in"
              value={6}
              onChange={handleCheck}
            />
            <span>Solidan: 6+</span>
          </label>
        </p>
      </FilterCont>
    </FiltersWrapper>
  );
};

export default Filters;
