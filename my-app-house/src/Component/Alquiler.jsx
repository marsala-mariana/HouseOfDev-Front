import axios from "axios";
import React, { useContext, useEffect } from "react";
import { HomeContext } from "../Contexts/HomeContext";
import styled from "styled-components";

const Alquiler = () => {
  const { propiedad, setPropiedad } = useContext(HomeContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/propiedades/")
      .then((res) => {
        return res.data;
      })
      .then((propiedad) => setPropiedad(propiedad));
  }, []);

  const filtro = propiedad.filter((data) => data.disponibilidad === "Alquiler");

  return (
    <Estilo>
      <div className="card">
        <h1>Propiedades en Alquiler</h1>

        <ul className="list-group list-group-flush">
          {filtro.map((e) => {
            return (
              <div className="card">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6">
                    <img
                      src={e?.imagen[1]}
                      className="img-fluid rounded-start"
                      alt="imagenalquiler"
                    />
                  </div>

                  <div className="col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">{e.nombre}</h5>
                      <p className="card-text">
                        <small className="text-muted">{e?.ubicacion}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{e?.estado}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {e?.disponibilidad}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{e?.precio}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{e?.descripcion}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{e?.categoria}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{e?.pais}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </Estilo>
  );
};

export default Alquiler;

const Estilo = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: 180%;
    margin-top: 37px;
    margin-left: 21px;
  }
  .img-fluid {
    border-radius: 40px;
    margin-left: 18px;
    margin-bottom: 19px;
    margin-top: 17px;
  }
`;
