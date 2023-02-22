import axios from "axios";
import React, { useContext, useEffect } from "react";
import { HomeContext } from "../Contexts/HomeContext";
import home from "../Img/home.jpg";
import "../Style/Home.css";
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

  const handleSubmit = () => {
    const ordenado = propiedad.slice().sort(function (a, b) {
      return b.precio - a.precio;
    });

    setPropiedad(ordenado);
  };

  const handleSubmitMenor = () => {
    const ordenado = propiedad.slice().sort(function (a, b) {
      return a.precio - b.precio;
    });

    setPropiedad(ordenado);
  };
  return (
    <div>
      <div className="container cd-sm">
        <div>
          <img
            src={home}
            className="img-fluid d-flex justify-content-center align-items-center"
            alt="home"
          ></img>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-outline-warning dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordenar por
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={handleSubmitMenor}
              >
                Menor Precio
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={handleSubmit}
              >
                Mayor precio
              </button>
            </li>
          </ul>
        </div>

        {propiedad.map((prop) => {
          return <Propiedad prop={prop} key={prop.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
