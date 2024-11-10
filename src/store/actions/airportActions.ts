import { AppDispatch } from "../index";
import axios from "../../axios";
import { IAirport, ServerResponce } from "../../models/models";
import { airportSlice } from "../slices/airportSlice";

export const fetchAirports = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const responce = await axios.get<ServerResponce<IAirport>>("airports");
      //   console.log(responce.data.results[0].country);
      dispatch(airportSlice.actions.fetchSuccess(responce.data.results));
    } catch (e) {
      dispatch(airportSlice.actions.fetchError(e as Error));
    }
  };
};
