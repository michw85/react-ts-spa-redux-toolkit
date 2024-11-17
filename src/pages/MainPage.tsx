import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchAirports } from "../store/actions/airportActions";
import { useAppDispatch, useAppSelector } from "../hook/redux";

const ITEMS_PER_PAGE = 50;

export function MainPage() {
  const dispatch = useAppDispatch();
  const page = React.useRef(1);
  const { error, loading, airports } = useAppSelector(
    (state) => state.airportReducer
  );
  React.useEffect(() => {
    dispatch(fetchAirports(page.current, ITEMS_PER_PAGE));
  }, []);
  // const pageChangeHandler = ({ selected }: { selected: number }) => {
  //   page.current = selected + 1;
  //   dispatch(fetchAirports(page.current, ITEMS_PER_PAGE));
  // };
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
