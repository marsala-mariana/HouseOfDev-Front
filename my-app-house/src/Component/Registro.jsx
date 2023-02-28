import React from "react";
import useInput from "../Hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Registro = () => {
  const navigate = useNavigate();

  const nombre = useInput();
  const email = useInput();
  const celular = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/registro", {
        nombre: nombre.value,
        celular: celular.value,
        email: email.value,
        contraseña: password.value,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"));
  };

  return (
    <RegistroEstilo>
      <div className="container d-flex justify-content-center d-flex align-items-center">
        <main className="form-signin">
          <form className="row" onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <h1>Registrarse </h1>
            </div>

            <div>
              <div className="Auto">
                <label htmlFor="floatingInput" className="label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  {...nombre}
                  placeholder="Escribi tu nombre"
                />
              </div>
              <div className="Auto ">
                <label htmlFor="floatingInput" className="label">
                  Celular
                </label>
                <br />
                <input
                  type="number"
                  className="form-control"
                  id="celular"
                  {...celular}
                  placeholder="Escribi tu celular"
                />
              </div>
              <div className="Auto ">
                <label htmlFor="floatingInput" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  {...email}
                  placeholder="Escribi tu email"
                />
              </div>
              <div className="Auto ">
                <label htmlFor="floatingInput " className="label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="contraseña"
                  {...password}
                  placeholder="Escribi tu contraseña"
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary ">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </RegistroEstilo>
  );
};

export default Registro;

const RegistroEstilo = styled.div`
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
