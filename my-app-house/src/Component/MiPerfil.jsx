import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      });
  };

  return (
    <div>
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <div className="Auto">
            <h1>Mi perfil </h1>
            <label for="floatingInput">Nombre </label>
            <p>➡ {nombre}</p>
            <input
              onChange={handleChangeNombre}
              type="nombre"
              className="form-control"
              id="nombre"
              aria-describedby="nombre"
              placeholder="Editar"
            />
          </div>
          <div className="Auto">
            <label for="floatingInput">Celular </label>
            <p>➡ {celu}</p>
            <input
              onChange={handleChangeCelu}
              type="celular"
              className="form-control"
              id="celular"
              placeholder="Editar"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Email </label>
            <p>➡ {email} </p>
            <input
              onChange={handleChangeEmail}
              type="email"
              className="form-control"
              id="email"
              placeholder="Editar"
            />
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Guardar
          </button>
        </form>
      </main>
    </div>
  );
};

export default MiPerfil;
