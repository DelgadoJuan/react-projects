import { useEffect, useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {
  const focusRef = useRef()

  const initialForm = {
    username: "",
    email: "",
    password: "",
  };
  const { formState, onInputChange } = useForm(initialForm);
  const { username, email, password } = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            ref={focusRef}
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
