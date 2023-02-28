import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import styled from "styled-components";

const MiPerfil = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(usuario.nombre);
  const [celu, setCelu] = useState(usuario.celular);
  const [email, setEmail] = useState(usuario.email);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeCelu = (e) => {
    setCelu(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/users/${usuario.email}`, {
        nombre: nombre,
        celular: celu,
        email: email,
      })
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)))
      .then(() => {
        navigate("/perfil");
      })
      .then(() => swal("Datos modificados"))
      .cath((e) => console.log(e, "error no mofidicado"));
  };

  return (
    <NewContainer>
      <div className="container d-flex justify-content-center d-flex align-items-center">
        <main className="form-signin">
          <form className="row" onSubmit={handleSubmit}>
            <div className=" mb-3 d-flex justify-content-center">
              <h1> MI PERFIL</h1>
            </div>

            <div className="Auto mb-3 d-flex justify-content-center">
              <label htmlFor="floatingInput" class="label">
                Nombre
              </label>

              <input
                onChange={handleChangeNombre}
                type="text"
                className="form-control"
                id="nombre"
                placeholder={nombre}
              />
            </div>

            <div className="Auto mb-3 d-flex justify-content-center">
              <label htmlFor="floatingInput" class="label">
                Celular
              </label>

              <input
                onChange={handleChangeCelu}
                type="text"
                className="form-control"
                id="celular"
                placeholder={celu}
              />
            </div>
            <div className="Auto mb-3 d-flex justify-content-center" id="inpu">
              <label htmlFor="floatingInput" class="label">
                Email
              </label>

              <input
                onChange={handleChangeEmail}
                type="text"
                className="form-control"
                id="email"
                placeholder={email}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary d-flex justify-content-center"
              >
                Guardar
              </button>
            </div>
          </form>
        </main>
      </div>
    </NewContainer>
  );
};

export default MiPerfil;
const NewContainer = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: medium;
    border-style: solid;
    border-top-width: 2px;
    border-left-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    padding-left: 8px;
    padding-top: 9px;
    height: 42px;
    width: 110px;
    margin-left: 13px;
    margin-top: 14px;
  }
  .label {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    padding-top: 16px;
  }
  .form-control {
    width: 345px;
    margin-left: 14px;
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
    padding-top: 13px;
  }
  .row {
    margin-bottom: 123px;
  }
  .Auto {
    padding-bottom: 21px;
    height: 73px;
  }
`;
