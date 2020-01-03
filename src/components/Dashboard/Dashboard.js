import React, { useContext } from "react";
import HotelsList from "../Hotels/HotelsList/HotelsList";
import { DashB } from "./Dashboard.styled";
import SearchBox from "../Search/SearchBox";
import { HotelContext } from "../../contexts/HotelContextProvider";
import Filters from "../Filters/Filters";

const Dashboard = () => {
  const { showHotels } = useContext(HotelContext);

  return (
    <DashB>
      {showHotels && (
        <div className="row">
          <div className="col m12 xl3">
            <SearchBox />
            <Filters />
          </div>
          <HotelsList />
        </div>
      )}
    </DashB>
  );
};

export default Dashboard;
