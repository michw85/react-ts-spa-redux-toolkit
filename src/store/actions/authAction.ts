import { AppDispatch, RootState } from "../index";
import axios from "../../axios";
import {
  IAirport,
  IAirportCountry,
  IAirportDetail,
  IAirportRegion,
  IAirportType,
  IAuth,
  IAuthResponse,
  IComment,
  ServerResponse,
} from "../../models/models";
import { authSlice } from "../slices/authSlice";
import { airportSlice } from "../slices/airportSlice";

export const register = (data: IAuth) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(`auth/register`, data);
      dispatch(
        authSlice.actions.loginSuccess({
          access: response.data.access,
          username: data.username,
        })
      );
    } catch (e) {
      console.log("Error register", e);
    }
  };
};

export const login = (data: IAuth) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IAuthResponse>(`auth/login`, data);
      dispatch(
        authSlice.actions.loginSuccess({
          access: response.data.access,
          username: data.username,
        })
      );
    } catch (e) {
      console.log("Error Login", e);
    }
  };
};
