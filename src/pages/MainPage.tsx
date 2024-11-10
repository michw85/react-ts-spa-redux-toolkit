import * as React from "react";
import { AirportSearch } from "../components/AirportSearch";
import { AirportFilter } from "../components/AirportFilter";
import { AirportCard } from "../components/AirportCard";
import { useDispatch } from "react-redux";
import { fetchAirports } from "../store/actions/airportActions";
import { useAppDespatch } from "../hook/redux";

export function MainPage() {
  const dispatch = useAppDespatch();

  React.useEffect(() => {
    dispatch(fetchAirports());
  }, []);
  return (
    <div className="comtainer mx-auto max-w-[760px] pt-5">
      <AirportSearch />

      <AirportFilter />

      <AirportCard />
    </div>
  );
}
