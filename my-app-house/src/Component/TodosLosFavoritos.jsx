import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

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
    <div>
      <div className="card">
        <div className="card-body">
          <h4> ⭐ MIS FAVORITOS</h4>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {fav?.map((e) => {
              return (
                <li class="list-group-item">
                  {e.nombre}
                  <br />
                  {e.precio}
                  <br />
                  <img
                    class="fav"
                    src={e.imagen ? e.imagen[0] : ""}
                    alt="imagen"
                  />
                  <br />
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => handleSubmit(e.id)}
                  >
                    🗑 Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodosLosFavoritos;
