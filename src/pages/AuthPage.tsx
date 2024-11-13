import * as React from "react";
import { useInput } from "../hook/input";

export function AuthPage() {
  const username = useInput("");
  const password = useInput("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
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
          User Passwort
        </label>
        <input
          type="password"
          {...password}
          id="password"
          className="border py-1 px-2 w-full"
        />
      </div>
    </form>
  );
}
