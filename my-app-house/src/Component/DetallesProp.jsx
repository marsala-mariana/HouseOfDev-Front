import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PropIdContext } from "../Contexts/PropIdContext";

const DetallesProp = () => {
  const { id } = useParams();
  const { detalle, setDetalles } = useContext(PropIdContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((detalle) => {
        setDetalles(detalle);
      });
  }, []);

  return (
    <div className="container">
      <div className="Auto">
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={detalle.imagen ? detalle.imagen[1] : ""}
                className="d-block w-100 rounded "
                alt="imagen"
              />
            </div>
            <div className="carousel-item">
              <img
                src={detalle.imagen ? detalle.imagen[2] : ""}
                className="d-block w-100 rounded "
                alt="imagen"
              />
            </div>
            <div className="carousel-item">
              <img
                src={detalle.imagen ? detalle.imagen[3] : ""}
                className="d-block w-100 rounded "
                alt="imagen"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="container">
        <div class="card-body">
          {detalle.nombre}
          <br />
          <br />
          {detalle.descripcion}
          <br />
          <br />
          Barrio: {detalle.barrio}
          <br />
          Ubicación: {detalle.ubicacion}
          <br />
          País: {detalle.pais}
          <br />
          Precio: {detalle.precio}
          <br />
          Disponibilidad: {detalle.disponibilidad}
          <br />
          Categoria: {detalle.categoria}
        </div>
      </div>
    </div>
  );
};

export default DetallesProp;
