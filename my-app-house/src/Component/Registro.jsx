import React from "react";
import useInput from "../Hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <div className="Auto">
            <h1>Registrarse </h1>
            <label for="floatingInput">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              {...nombre}
              aria-describedby="nombre"
              placeholder="Escribi tu nombre"
            />
          </div>
          <div className="Auto">
            <label for="floatingInput">Celular</label>
            <input
              type="number"
              className="form-control"
              id="celular"
              {...celular}
              placeholder="Escribi tu celular"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              {...email}
              placeholder="Escribi tu email"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Contraseña</label>
            <input
              type="text"
              className="form-control"
              id="contraseña"
              {...password}
              placeholder="Escribi tu contraseña"
            />
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Registro;
