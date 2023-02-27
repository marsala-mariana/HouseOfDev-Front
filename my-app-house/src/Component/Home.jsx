import React, { useContext, useEffect } from "react";
import home from "../Img/home.jpg";
import styled from "styled-components";
import { HomeContext } from "../Contexts/HomeContext";
import axios from "axios";
import Propiedad from "./Propiedad";

const Home = () => {
  const { propiedad, setPropiedad } = useContext(HomeContext);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/propiedades/")
      .then((res) => {
        return res.data;
      })
      .then((propiedad) => setPropiedad(propiedad));
  }, []);

  //filtro precio mayor
  const handleSubmit = () => {
    const ordenado = propiedad.slice().sort(function (a, b) {
      return b.precio - a.precio;
    });

    setPropiedad(ordenado);
  };
  //filtro precio menor
  const handleSubmitMenor = () => {
    const ordenado = propiedad.slice().sort(function (a, b) {
      return a.precio - b.precio;
    });

    setPropiedad(ordenado);
  };
  return (
    <Hom>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container cd-sm">
          <div className="d-flex justify-content-center align-items-center">
            <img src={home} className="img-fluid " alt="home"></img>
          </div>
          {/*filtros*/}
          <div className="container d-flex justify-content-end">
            <div className="dropdown">
              <button
                id="filtro"
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filtros
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a
                    className="dropdown-item active"
                    href="#"
                    onClick={handleSubmit}
                  >
                    Mayor precio
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleSubmitMenor}
                  >
                    Menor precio
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="http://localhost:3000/alquiler"
                  >
                    Alquiler
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="http://localhost:3000/venta"
                  >
                    Venta
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {propiedad.map((prop) => {
            return <Propiedad prop={prop} key={prop.id} />;
          })}
        </div>
      </div>
    </Hom>
  );
};

export default Home;

const Hom = styled.div`
  .img-fluid {
    width: 82%;
    margin-top: 29px;
  }
  body {
    background-color: beige;
  }
  .btn {
    margin-right: 12px;
    border: solid white;
    background-color: white;
    color: black;
  }
  #filtro {
    margin-top: 14px;
    margin-bottom: 14px;
    width: 250px;
  }
  .dropdown-menu {
    background-color: white;
    color: black;
  }
  .dropdown-item {
    color: black;
  }
  .dropdown-menu-dark {
    --bs-dropdown-link-active-bg: #fe4236;
  }
`;
