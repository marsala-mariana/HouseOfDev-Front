import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

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
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">EDITAR Y ELIMINAR PROPIEDADES :</h4>

        <ul class="list-group list-group-flush">
          {pedido.map((e) => {
            return (
              <li key={e.id} class="list-group-item">
                {e.nombre}
                <br />
                {e.ubicacion}
                <br />
                {e.estado}
                <br />
                {e.pais}
                <br />
                {e.disponibilidad}
                <br />
                {e.precio}
                <br />
                {e.descripcion}
                <br />
                {e.categoria}
                <br />
                <button
                  className="btn btn-outline-warning"
                  onClick={() => handleSubmit(e.id)}
                >
                  🗑 Eliminar
                </button>
                <Link to={`/editar/${e.id}`}>
                  <button class="btneditar" className="btn btn-outline-warning">
                    📝 Editar
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminPropiedad;
