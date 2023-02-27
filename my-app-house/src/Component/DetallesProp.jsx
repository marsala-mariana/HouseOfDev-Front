import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PropIdContext } from "../Contexts/PropIdContext";
import styled from "styled-components";

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
    <Detalle>
      <div className="card">
        <h1>Detalles </h1>

        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid rounded-start"
                src={detalle.imagen ? detalle.imagen[0] : ""}
                alt="Error al cargar la imagen"
              />
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid rounded-start"
                src={detalle.imagen ? detalle.imagen[1] : ""}
                alt="Error al cargar la imagen"
              />
            </div>

            <div className="col-md-12 " id="contenedorT">
              <div className="card-body ">
                <h5 className="card-title d-flex justify-content-center">
                  {detalle.nombre}
                </h5>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.ubicacion}</small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.barrio}</small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.categoria}</small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">
                    {detalle?.disponibilidad}
                  </small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.estado}</small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.pais}</small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.precio}</small>
                </p>
                <p className="card-text d-flex justify-content-center">
                  <small className="text-muted">{detalle?.descripcion}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Detalle>
  );
};

export default DetallesProp;

const Detalle = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: 180%;
    margin-top: 37px;
    margin-left: 21px;
  }
  #contenedorT {
    margin-top: 38px;
    box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -webkit-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -moz-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
  }
`;
