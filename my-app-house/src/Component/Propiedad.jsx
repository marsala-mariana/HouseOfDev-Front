import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Propiedad = ({ prop }) => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/api/favorito/agregar/${usuario.id}`, {
        idUsuario: usuario.id,
        idPropiedades: prop.id,
        nombre: prop.nombre,
        precio: prop.precio,
        imagen: prop.imagen,
      })
      .then(() => swal("Propiedad agregada a Favoritos!"));
  };
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={prop?.imagen[1]}
            className="img-fluid rounded-start"
            alt={prop?.nombre}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body">
            <>
              {usuario.nombre ? (
                <div>
                  <Link to="/favoritos">
                    <button
                      class="favorito"
                      className="btn btn-warning"
                      onClick={handleSubmit}
                    >
                      💛
                    </button>
                  </Link>

                  <Link to={"/citas"}>
                    <button className="btn btn-warning">Contactar</button>
                  </Link>

                  <Link to={`/detalles/${prop.id}`}>
                    <button class="favorito" className="btn btn-warning">
                      ⭐ Detalles
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={`/detalles/${prop.id}`}>
                    <button class="favorito" className="btn btn-warning">
                      ⭐ Detalles
                    </button>
                  </Link>
                </div>
              )}
            </>
            <hr />
            <h5 className="card-title">${prop?.precio}</h5>
            <h5 className="card-title">{prop?.nombre}</h5>
            <p className="card-text">
              <small className="text-muted">{prop?.ubicacion}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propiedad;
