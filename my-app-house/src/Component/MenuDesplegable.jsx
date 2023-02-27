import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuDesplegable = () => {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogOut = async () => {
    try {
      await axios.post("http://localhost:3001/api/users/logout");

      localStorage.removeItem("user");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {`🖐 HOLA ${usuario.nombre.toUpperCase()}`}
        </a>
        <ul className="dropdown-menu">
          <a className="dropdown-item" href="http://localhost:3000/favoritos">
            Mis Favoritos
          </a>
          {!usuario.admin ? (
            <a className="dropdown-item" href="http://localhost:3000/perfil">
              Mi perfil
            </a>
          ) : (
            <>
              <a className="dropdown-item" href="http://localhost:3000/admin">
                Mi perfil Admin
              </a>

              <a
                className="dropdown-item"
                href="http://localhost:3000/admincitas"
              >
                Citas
              </a>
            </>
          )}
          <a className="dropdown-item" onClick={handleLogOut}>
            Cerrar sesión
          </a>
        </ul>
      </li>
    </>
  );
};

export default MenuDesplegable;
