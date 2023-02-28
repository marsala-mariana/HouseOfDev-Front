import React, { useContext } from "react";
import { BusquedaContext } from "../Contexts/BusquedaContext";
import styled from "styled-components";

const BusquedaEncontrada = () => {
  const { busquedaProp } = useContext(BusquedaContext);

  return (
    <Busqueda>
      <div className="card ">
        <ul class="list-group list-group-flush">
          {busquedaProp.map((data) => {
            return (
              <div className="card">
                <div className="row d-flex justify-content-cente">
                  <div>
                    <img
                      src={data?.imagen[1]}
                      className="img-fluid rounded-start"
                      alt="Error al cargar la imagen"
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">{data.nombre}</h5>
                      <p className="card-text">
                        <small className="text-muted">{data?.barrio}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{data?.ubicacion}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{data?.precio}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{data?.pais}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              /*
                <li key={data.id} class="list-group-item">
                  {data.barrio}
                  <br />
                  {data.categoria}
                  <br />
                  {data.precio}
                  <br />
                  {data.nombre}
                  <br />
                  {data.ubicacion}
                  <br />
                  {data.pais}
                  <br />

                  <img class="bus" src={data?.imagen[1]} alt="imagen rota" />
                </li>

                */
            );
          })}
        </ul>
      </div>
    </Busqueda>
  );
};

export default BusquedaEncontrada;

const Busqueda = styled.div`
  .img-fluid {
    border-radius: 40px;
    margin-left: 18px;
    margin-bottom: 19px;
    margin-top: 17px;
    width: 720px;
  }
`;
