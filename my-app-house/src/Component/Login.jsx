import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";

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
    <div>
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <div className="Auto">
            <h1>Login</h1>
            <label for="floatingInput">Correo electrónico</label>
            <input
              type="text"
              className="form-control"
              id="email"
              {...email}
              placeholder="Escribi tu email"
            />
          </div>

          <div className="Auto">
            <label for="floatingInput">Contraseña</label>
            <input
              type="text"
              className="form-control"
              id="contraseña"
              {...contraseña}
              placeholder="Escribi tu contraseña"
            />
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Ingesar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
