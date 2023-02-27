import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import styled from "styled-components";

const AdminPropiedad = () => {
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/propiedades/")
      .then((res) => {
        return res.data;
      })
      .then((pedido) => setPedido(pedido));
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/propiedades/${id}`, {
        withCredentials: true,
      })

      .then(() => swal("Propiedad eliminada!"))
      .then(() => window.location.reload(false));
  };

  return (
    <Lista>
      <div className="conte">
        <h1>Editar/Eliminar Propiedad</h1>

        <ul class="list-group list-group-flush">
          {pedido.map((e) => {
            return (
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid rounded-star"
                      src={e.imagen ? e.imagen[0] : ""}
                      alt="Error  al cargar la imagen"
                    />
                  </div>

                  <div className="col-md-6">
                    <h5 className="card-title">{e.nombre}</h5>
                    <h5 className="card-title">{e.estado}</h5>
                    <h5 className="card-title">{e.pais}</h5>
                    <h5 className="card-title">{e.disponibilidad}</h5>
                    <h5 className="card-title">{e.precio}</h5>
                    <h5 className="card-title">{e.categoria}</h5>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleSubmit(e.id)}
                    >
                      🗑 Eliminar
                    </button>
                    <Link to={`/editar/${e.id}`}>
                      <button className="btn btn-secondary ">📝 Editar</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </Lista>
  );
};

export default AdminPropiedad;

const Lista = styled.div`
  h1 {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: medium;
    padding-left: 8px;
    padding-top: 9px;
    height: 42px;
    margin-left: 13px;
    margin-top: 14px;
  }
  .btn-secondary {
    margin-right: 15px;
  }
`;
