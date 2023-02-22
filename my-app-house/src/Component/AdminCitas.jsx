import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

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

  const imgStyles = {
    heigth: "230px",
    width: "230px",
    objectFit: "top",
    marginTop: "5px",
  };
  return (
    <div className="container">
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
    </div>
  );
};

export default AdminCitas;
