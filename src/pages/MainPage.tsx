import * as React from "react";
import { AirportSearch } from "../components/AirportSearch";
import { AirportFilter } from "../components/AirportFilter";
import { AirportCard } from "../components/AirportCard";

export function MainPage() {
  return (
    <div className="comtainer mx-auto max-w-[760px] pt-5">
      <AirportSearch />

      <AirportFilter />

      <AirportCard />
    </div>
  );
}
