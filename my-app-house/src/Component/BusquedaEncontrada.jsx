import React, { useContext } from "react";
import { BusquedaContext } from "../Contexts/BusquedaContext";

const BusquedaEncontrada = () => {
  const { busquedaProp } = useContext(BusquedaContext);
  return (
    <div>
      <div className="card ">
        <div className="card-body">
          <ul class="list-group list-group-flush">
            {busquedaProp.map((data) => {
              return (
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
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusquedaEncontrada;
