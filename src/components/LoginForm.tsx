import React from "react"
import '../assets/styles/main.css'


interface LoginFormProps {
  email: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ email, password, onChange, onSubmit }) => {
  return (
    <div className="form-container">
      <div className="form-box">
        <form className="form" onSubmit={onSubmit}>
          <span className="title">Login</span>
          <div className="form-input">
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              className="input"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
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

export default LoginForm