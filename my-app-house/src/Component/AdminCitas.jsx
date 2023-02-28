import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import styled from "styled-components";

const AdminCitas = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cita/")
      .then((res) => {
        return res.data;
      })
      .then((list) => setLista(list));
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/cita/eliminar/${id}`, {
        withCredentials: true,
      })

      .then(() => swal("Usuario eliminado!"))
      .then(() => window.location.reload(false));
  };

  return (
    <CitasLista>
      <div className="conte">
        <h4>Lista de Citas</h4>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          {lista?.map((i) => {
            return (
              <div className="card" key={i.id}>
                <div className="row">
                  <div className="col-md-6">
                    <img
                      className="img-fluid rounded-start"
                      id="fav"
                      src={i.imagen ? i.imagen[0] : ""}
                      alt="imagen"
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">
                      Nombre de usuario : <span>{i.nombre}</span>
                    </h5>
                    <p></p>
                    <h5 className="card-title">
                      Telefono de usuario : <span>{i.telefono}</span>
                    </h5>
                    <h5 className="card-title">
                      Email de usuario : <span>{i.email}</span>
                    </h5>
                    <h5 className="card-title">
                      Mensaje de usuario : <span>{i.mensaje}</span>
                    </h5>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleSubmit(i.id)}
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
      {/*
    <div className="conte">
      <h1>Citas</h1>
      <div className="card mb-2">
        <div className="row g-0">
          {lista.map((i) => {
            return (
              <div key={i.id} className="list-group-item">
                <img src={i?.imagen[0]} alt="imagen" style={imgStyles} />

                <h5 className="card-title">{i.email}</h5>
                <h5 className="card-title">{i.telefono}</h5>
                <h5 className="card-title"> {i.nombre}</h5>
                <h5 className="card-title"> {i.mensaje}</h5>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => handleSubmit(i.id)}
                >
                  🗑 Eliminar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>*/}
    </CitasLista>
  );
};

export default AdminCitas;

const CitasLista = styled.div`
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

  .btn-secondary {
    color: white;

    --bs-btn-bg: #dc3545;
  }
  span {
    font-style: italic;
    font-family: "Times New Roman", Times, serif;
  }
  h5 {
    font-family: "Times New Roman", Times, serif;
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
`;
