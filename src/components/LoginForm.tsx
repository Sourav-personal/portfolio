import React from "react";
import type { UseFormRegister } from "react-hook-form";
import '../assets/styles/main.css';

interface LoginFormProps {
  register: UseFormRegister<{email: string, password: string}>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ register, onSubmit }) => {
  return (
    <div className="form-container">
      <div className="form-box">
        <form className="form" onSubmit={onSubmit}>
          <span className="title">Login</span>
          <div className="form-input">
            <input
              type="text"
              {...register("email")}
              className="input"
              placeholder="Email"
            />
            <input
              type="password"
              {...register("password")}
              className="input"
              placeholder="Password"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;