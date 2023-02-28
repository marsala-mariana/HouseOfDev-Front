import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const contraseña = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/api/users/login",

        {
          email: email.value,
          contraseña: contraseña.value,
        },
        { withCredentials: true }
      )
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)))

      .then(() => navigate("/"));
  };

  return (
    <LoginEstilo>
      <div className="container d-flex justify-content-center d-flex align-items-center">
        <main className="form-signin">
          <form className="row" onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <h1>Login </h1>
            </div>
            <div>
              <div className="Auto">
                <label htmlFor="floatingInput" className="label">
                  Correo electrónico
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  {...email}
                  placeholder="Escribi tu email"
                />
              </div>

              <div className="Auto">
                <label htmlFor="floatingInput" className="label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="contraseña"
                  {...contraseña}
                  placeholder="Escribi tu contraseña"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" class="w-100 btn btn-primary">
                  Ingesar
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </LoginEstilo>
  );
};

export default Login;

const LoginEstilo = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: 42px;

    height: 42px;
    width: 110px;
    margin-bottom: 38px;
    margin-top: 14px;
  }
  .label {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    padding-top: 16px;
    padding-left: 15px;
    padding-bottom: 7px;
  }
  .form-control {
    width: 345px;
    margin-left: 14px;
    border: 1px solid #123ac8;
  }
  .container {
    margin-top: 63px;

    box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -webkit-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -moz-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
  }
  .btn {
    width: 225px;
    height: 54px;
    margin-right: 115px;
  }
  .btn-primary {
    --bs-btn-bg: #dc3545;
    --bs-btn-border-color: #dc3545;
  }
  .row {
    margin-bottom: 123px;
  }
  .Auto {
    padding-bottom: 21px;
  }
`;
