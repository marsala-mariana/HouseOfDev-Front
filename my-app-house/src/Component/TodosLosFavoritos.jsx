import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import styled from "styled-components";

const TodosLosFavoritos = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const [fav, setFav] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/favorito/${usuario.id}`, {})
      .then((res) => res.data)
      .then((fav) => setFav(fav));
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/favorito/borrar/${id}`)

      .then(() => swal("Eliminado exitosamente!"))
      .then(() => window.location.reload(false));
  };

  return (
    <Favo>
      <div className="conte">
        <h4> FAVORITOS</h4>
      </div>

      <div className="card">
        <ul className="list-group list-group-flush">
          {fav?.map((e) => {
            return (
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid rounded-start"
                      id="fav"
                      src={e.imagen ? e.imagen[0] : ""}
                      alt="imagen"
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">{e.nombre}</h5>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleSubmit(e.id)}
                    >
                      🗑 Eliminar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </Favo>
  );
};

export default TodosLosFavoritos;

const Favo = styled.div`
  h4 {
    color: black;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    font-size: medium;

    padding-left: 8px;
    padding-top: 18px;
    height: 62px;
    width: 171px;
    margin-left: 13px;
    margin-top: 14px;
  }
  #fav {
    width: 761px;
    border-radius: 10px;
  }
  .btn {
    margin-top: 15px;
  }
  .conte {
    box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -webkit-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    -moz-box-shadow: 10px 10px 17px 10px rgba(3, 2, 2, 0.3);
    margin-top: 53px;
    margin-left: 29px;
    margin-right: 28px;
    margin-bottom: 53px;
  }
  .list-group-item {
    color: #123ac8;
    font-family: "Times New Roman", Times, serif;
    font-weight: bold;
    padding-top: 16px;
  }
  .btn-secondary {
    color: white;

    --bs-btn-bg: #dc3545;
  }
`;
