import * as React from "react";
import { useInput } from "../hook/input";
import { useAppDispatch } from "../hook/redux";
import { register, login } from "../store/actions/authAction";
import { useNavigate } from "react-router-dom";

export function AuthPage() {
  const username = useInput("");
  const password = useInput("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFormValid = () => username.value && password.value;

  const loginHandler = () => {
    if (isFormValid()) {
      dispatch(
        login({ username: username.value, password: password.value })
      ).then(() => {
        navigate("/");
      });
    } else {
      alert("INVALID FORM PLZ CHAGE FAST");
    }
  };

  const submitHandler = async (event: React.FormEvent) => {
    try {
      event.preventDefault();

      if (isFormValid()) {
        await dispatch(
          register({ username: username.value, password: password.value })
        );
        // .then(() => {
        //   navigate("/");
        // })
        // .catch((e) => console.log(e));
        navigate("/");
      } else {
        alert("INVALID FORM PLZ CHAGE FAST");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="container mx-auto max-w-[500px] pt-8"
      onSubmit={submitHandler}
    >
      <div className="mb-2">
        <label htmlFor="username" className="block">
          User Name
        </label>
        <input
          type="text"
          {...username}
          id="username"
          className="border py-1 px-2 w-full"
        />
      </div>
      <div className="">
        <label htmlFor="password" className="block">
          Passwort
        </label>
        <input
          type="password"
          {...password}
          id="password"
          className="border py-1 px-2 w-full"
        />
      </div>
      <button className="py-2 px-4 bg-blue-400 border" type="submit">
        Register
      </button>
      <button
        className="py-2 px-4 bg-green-400 border"
        type="button"
        onClick={loginHandler}
      >
        Login
      </button>
    </form>
  );
}
