import * as React from "react";
import { AirportSearch } from "../components/AirportSearch";
import { AirportFilter } from "../components/AirportFilter";
import { AirportCard } from "../components/AirportCard";
import { useDispatch } from "react-redux";
import { fetchAirports } from "../store/actions/airportActions";
import { useAppDespatch, useAppSelector } from "../hook/redux";

export function MainPage() {
  const dispatch = useAppDespatch();
  const { error, loading, airports } = useAppSelector((state) => state.airport);
  React.useEffect(() => {
    dispatch(fetchAirports());
  }, []);
  return (
    <div className="comtainer mx-auto max-w-[760px] pt-5">
      {/* <AirportSearch /> */}
      {/* <AirportFilter />
      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-lg text-red-600">{error}</p>}

      {airports.map((airports) => (
        <AirportCard key={airports.id} airport={airports} />
      ))} */}
      Data
    </div>
  );
}
