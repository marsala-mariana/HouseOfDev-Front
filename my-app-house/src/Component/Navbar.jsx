import React, { useContext, useState } from "react";
import logo from "../Img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import MenuDesplegable from "./MenuDesplegable";

import { BusquedaContext } from "../Contexts/BusquedaContext";
import axios from "axios";
import styled from "styled-components";

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const { setBusquedaProp } = useContext(BusquedaContext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/propiedades/busqueda/${input}`)
      .then((res) => setBusquedaProp(res.data))

      .catch((error) => console.log(error, "NO FUNCIONA LA BUSQUEDA"));

    navigate("/encontrado");
  };
  return (
    <Contenedor>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <>
                {usuario.nombre ? (
                  <MenuDesplegable />
                ) : (
                  <>
                    <li className="nav-item active">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="http://localhost:3000/registro"
                      >
                        Registro
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a
                        className="nav-link"
                        href="http://localhost:3000/login"
                      >
                        Login
                      </a>
                    </li>
                  </>
                )}
              </>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                onChange={handleInput}
                className="form-control me-2"
                type="text"
                placeholder="Busqueda"
                aria-label="Search"
              />
              <button className="btn btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Contenedor>
  );
};

export default Navbar;

const Contenedor = styled.nav`
  .navbar {
    --bs-navbar-color: white;
    --bs-navbar-hover-color: #123ac8;

    background-color: #fe4236;
  }
  .nav-link {
    font-weight: bold;
    padding-left: 28px;
  }

  .dropdown-menu {
    background-color: #fe4236;
  }
  .dropdown-item {
    color: white;
  }
`;
